from rest_framework import serializers
from .models import (
    CustomUser,
    SFlight,
    FlightSchedule,
    Place,
    TravelPassenger,
    PassengerContact,
    PaymentDetails,
)

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = '__all__'  # You can specify fields explicitly if needed

class SFlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = SFlight
        fields = '__all__'  # Adjust fields as needed

class FlightScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlightSchedule
        fields = '__all__'  # Adjust fields as needed

class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'  # Adjust fields as needed

class TravelPassengerSerializer(serializers.ModelSerializer):
    class Meta:
        model = TravelPassenger
        fields = '__all__'  # Adjust fields as needed

class PassengerContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = PassengerContact
        fields = '__all__'  # Adjust fields as needed

class PaymentDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentDetails
        fields = '__all__'  # Adjust fields as needed

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['first_name', 'last_name', 'email', 'mobile_no', 'password']
        extra_kwargs = {'password': {'write_only': True}}  # Ensure password is write-only

    def create(self, validated_data):
        # Create a new user with the validated data
        user = CustomUser(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            mobile_no=validated_data['mobile_no']
        )
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user
