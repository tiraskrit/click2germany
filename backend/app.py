from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from bson import ObjectId
import paypalrestsdk
import os
from datetime import datetime
from dotenv import load_dotenv

# PayPal SDK imports
from paypalcheckoutsdk.core import PayPalHttpClient, SandboxEnvironment, LiveEnvironment
from paypalcheckoutsdk.orders import OrdersCreateRequest, OrdersCaptureRequest


# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# MongoDB configuration
MONGODB_URI = os.getenv('MONGODB_URI')
DATABASE_NAME = os.getenv('DATABASE_NAME')

# Initialize MongoDB
try:
    client = MongoClient(MONGODB_URI)
    db = client[DATABASE_NAME]
    print("Connected to MongoDB")
except Exception as e:
    print(f"MongoDB connection error: {e}")

# PayPal configuration

# paypalrestsdk.configure({
#     "mode": os.getenv('PAYPAL_MODE', 'sandbox'),  # sandbox or live
#     "client_id": os.getenv('PAYPAL_CLIENT_ID'),
#     "client_secret": os.getenv('PAYPAL_CLIENT_SECRET')
# })

PAYPAL_CLIENT_ID = os.getenv('PAYPAL_CLIENT_ID')
PAYPAL_CLIENT_SECRET = os.getenv('PAYPAL_CLIENT_SECRET')
PAYPAL_MODE = os.getenv('PAYPAL_MODE', 'sandbox')

if PAYPAL_MODE == 'live':
    paypal_env = LiveEnvironment(client_id=PAYPAL_CLIENT_ID, client_secret=PAYPAL_CLIENT_SECRET)
else:
    paypal_env = SandboxEnvironment(client_id=PAYPAL_CLIENT_ID, client_secret=PAYPAL_CLIENT_SECRET)
paypal_client = PayPalHttpClient(paypal_env)

# Helper function to convert ObjectId to string
def serialize_doc(doc):
    if isinstance(doc, dict) and '_id' in doc:
        doc['_id'] = str(doc['_id'])
    return doc

# API Routes

@app.route('/')
def home():
    return jsonify({
        'message': 'Welcome to Click2Germany API',
        'status': 'running',
        'timestamp': datetime.now().isoformat(),
        'endpoints': {
            'courses': '/api/courses',
            'bookings': '/api/bookings',
            'paypal': '/api/create-paypal-order'
        }
    })

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        'status': 'OK',
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/courses', methods=['GET'])
def get_courses():
    try:
        level = request.args.get('level', 'all')
        filter_query = {'isActive': True}
        
        if level and level != 'all':
            filter_query['level'] = level
        
        courses = list(db.courses.find(filter_query))
        # Convert ObjectId to string for JSON serialization
        courses = [serialize_doc(course) for course in courses]
        
        return jsonify(courses)
    except Exception as e:
        print(f"Error fetching courses: {e}")
        return jsonify({'error': 'Failed to fetch courses'}), 500

@app.route('/api/courses/<int:course_id>', methods=['GET'])
def get_course_by_id(course_id):
    try:
        course = db.courses.find_one({'id': course_id})
        
        if not course:
            return jsonify({'error': 'Course not found'}), 404
        
        course = serialize_doc(course)
        return jsonify(course)
    except Exception as e:
        print(f"Error fetching course: {e}")
        return jsonify({'error': 'Failed to fetch course'}), 500

@app.route('/api/create-paypal-order', methods=['POST'])
def create_paypal_order():
    try:
        data = request.get_json()
        course_id = data.get('courseId')
        amount = data.get('amount')
        currency = data.get('currency', 'USD')
        
        # Convert NPR to USD if needed (use real exchange rate API in production)
        exchange_rate = 0.0075  # 1 NPR ≈ 0.0075 USD
        usd_amount = float(amount * exchange_rate) if currency == 'NPR' else float(amount)
        
    #     payment = paypalrestsdk.Payment({
    #         "intent": "sale",
    #         "payer": {
    #             "payment_method": "paypal"
    #         },
    #         "redirect_urls": {
    #             "return_url": f"{os.getenv('FRONTEND_URL', 'http://localhost:3000')}/payment-success",
    #             "cancel_url": f"{os.getenv('FRONTEND_URL', 'http://localhost:3000')}/payment-cancel"
    #         },
    #         "transactions": [{
    #             "item_list": {
    #                 "items": [{
    #                     "name": f"German Language Course - Course ID: {course_id}",
    #                     "sku": str(course_id),
    #                     "price": f"{usd_amount:.2f}",
    #                     "currency": "USD",
    #                     "quantity": 1
    #                 }]
    #             },
    #             "amount": {
    #                 "total": f"{usd_amount:.2f}",
    #                 "currency": "USD"
    #             },
    #             "description": f"German Language Course - Course ID: {course_id}"
    #         }]
    #     })
        
    #     if payment.create():
    #         # Find the approval URL
    #         approval_url = None
    #         for link in payment.links:
    #             if link.rel == "approval_url":
    #                 approval_url = link.href
    #                 break
            
    #         return jsonify({
    #             'orderID': payment.id,
    #             'approval_url': approval_url
    #         })
    #     else:
    #         print(f"PayPal payment creation error: {payment.error}")
    #         return jsonify({'error': 'Failed to create PayPal order'}), 500
            
    # except Exception as e:
    #     print(f"Error creating PayPal order: {e}")
    #     return jsonify({'error': 'Failed to create PayPal order'}), 500

        request_order = OrdersCreateRequest()
        request_order.prefer('return=representation')
        request_order.request_body({
            "intent": "CAPTURE",
            "purchase_units": [{
                "reference_id": str(course_id),
                "amount": {
                    "currency_code": "USD",
                    "value": f"{usd_amount:.2f}"
                },
                "description": f"German Language Course - Course ID: {course_id}"
            }],
            "application_context": {
                "return_url": f"{os.getenv('FRONTEND_URL', 'http://localhost:3000')}/payment-success",
                "cancel_url": f"{os.getenv('FRONTEND_URL', 'http://localhost:3000')}/payment-cancel"
            }
        })

        response = paypal_client.execute(request_order)
        order = response.result

        return jsonify({'orderID': order.id})
    except Exception as e:
        print(f"Error creating PayPal order: {e}")
        return jsonify({'error': 'Failed to create PayPal order'}), 500

@app.route('/api/capture-paypal-order', methods=['POST'])
def capture_paypal_order():
    try:
        data = request.get_json()
        order_id = data.get('orderID')
        # payer_id = data.get('payerID')
        
    #     payment = paypalrestsdk.Payment.find(payment_id)
        
    #     if payment.execute({"payer_id": payer_id}):
    #         return jsonify({
    #             'captureID': payment.id,
    #             'status': 'COMPLETED'
    #         })
    #     else:
    #         print(f"PayPal payment execution error: {payment.error}")
    #         return jsonify({'error': 'Failed to capture payment'}), 500
            
    # except Exception as e:
    #     print(f"Error capturing PayPal payment: {e}")
    #     return jsonify({'error': 'Failed to capture payment'}), 500
        request_capture = OrdersCaptureRequest(order_id)
        response = paypal_client.execute(request_capture)
        result = response.result
        if result.status == "COMPLETED":
            return jsonify({
                'captureID': result.id,
                'status': result.status
            })
        else:
            return jsonify({'error': 'Failed to capture payment'}), 500
    except Exception as e:
        print(f"Error capturing PayPal payment: {e}")
        return jsonify({'error': 'Failed to capture payment'}), 500

@app.route('/api/bookings', methods=['POST'])
def create_booking():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'dateOfBirth', 'email', 'courseId', 'selectedStartDate', 'selectedSchedule']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Get course details
        course = db.courses.find_one({'id': int(data['courseId'])})
        if not course:
            return jsonify({'error': 'Course not found'}), 404
        
        # Create booking object
        booking = {
            'name': data['name'],
            'dateOfBirth': datetime.fromisoformat(data['dateOfBirth'].replace('Z', '+00:00')) if 'T' in data['dateOfBirth'] else datetime.strptime(data['dateOfBirth'], '%Y-%m-%d'),
            'email': data['email'],
            'phone': data.get('phone'),
            'courseId': int(data['courseId']),
            'courseTitle': course['title'],
            'courseLevel': course['level'],
            'selectedStartDate': data['selectedStartDate'],
            'selectedSchedule': data['selectedSchedule'],
            'price': course['price'],
            'priceNumeric': course['priceNumeric'],
            'currency': course['currency'],
            'paymentId': data.get('paymentId'),
            'paymentStatus': data.get('paymentStatus', 'pending'),
            'bookingStatus': 'confirmed' if data.get('paymentStatus') == 'COMPLETED' else 'pending',
            'createdAt': datetime.now(),
            'updatedAt': datetime.now()
        }
        
        # Insert booking into database
        result = db.bookings.insert_one(booking)
        booking['_id'] = str(result.inserted_id)
        
        return jsonify({
            'bookingId': str(result.inserted_id),
            'message': 'Booking created successfully',
            'booking': booking
        }), 201
        
    except Exception as e:
        print(f"Error creating booking: {e}")
        return jsonify({'error': 'Failed to create booking'}), 500

@app.route('/api/bookings', methods=['GET'])
def get_bookings():
    try:
        status = request.args.get('status')
        course_id = request.args.get('courseId')
        
        filter_query = {}
        if status:
            filter_query['bookingStatus'] = status
        if course_id:
            filter_query['courseId'] = int(course_id)
        
        bookings = list(db.bookings.find(filter_query).sort('createdAt', -1))
        bookings = [serialize_doc(booking) for booking in bookings]
        
        # Convert datetime objects to ISO format strings for JSON serialization
        for booking in bookings:
            if 'createdAt' in booking:
                booking['createdAt'] = booking['createdAt'].isoformat()
            if 'updatedAt' in booking:
                booking['updatedAt'] = booking['updatedAt'].isoformat()
            if 'dateOfBirth' in booking:
                booking['dateOfBirth'] = booking['dateOfBirth'].isoformat()
        
        return jsonify(bookings)
    except Exception as e:
        print(f"Error fetching bookings: {e}")
        return jsonify({'error': 'Failed to fetch bookings'}), 500

@app.route('/api/bookings/<booking_id>', methods=['GET'])
def get_booking_by_id(booking_id):
    try:
        if not ObjectId.is_valid(booking_id):
            return jsonify({'error': 'Invalid booking ID'}), 400
        
        booking = db.bookings.find_one({'_id': ObjectId(booking_id)})
        
        if not booking:
            return jsonify({'error': 'Booking not found'}), 404
        
        booking = serialize_doc(booking)
        
        # Convert datetime objects to ISO format strings
        if 'createdAt' in booking:
            booking['createdAt'] = booking['createdAt'].isoformat()
        if 'updatedAt' in booking:
            booking['updatedAt'] = booking['updatedAt'].isoformat()
        if 'dateOfBirth' in booking:
            booking['dateOfBirth'] = booking['dateOfBirth'].isoformat()
        
        return jsonify(booking)
    except Exception as e:
        print(f"Error fetching booking: {e}")
        return jsonify({'error': 'Failed to fetch booking'}), 500

@app.route('/api/bookings/<booking_id>', methods=['PATCH'])
def update_booking(booking_id):
    try:
        if not ObjectId.is_valid(booking_id):
            return jsonify({'error': 'Invalid booking ID'}), 400
        
        data = request.get_json()
        update_data = {'updatedAt': datetime.now()}
        
        if 'paymentStatus' in data:
            update_data['paymentStatus'] = data['paymentStatus']
        if 'bookingStatus' in data:
            update_data['bookingStatus'] = data['bookingStatus']
        if 'paymentId' in data:
            update_data['paymentId'] = data['paymentId']
        
        result = db.bookings.update_one(
            {'_id': ObjectId(booking_id)},
            {'$set': update_data}
        )
        
        if result.matched_count == 0:
            return jsonify({'error': 'Booking not found'}), 404
        
        return jsonify({'message': 'Booking updated successfully'})
    except Exception as e:
        print(f"Error updating booking: {e}")
        return jsonify({'error': 'Failed to update booking'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)