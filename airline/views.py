from rest_framework import viewsets, permissions, filters
from .models import CustomUser, SFlight, FlightSchedule, Place, TravelPassenger, PassengerContact, PaymentDetails
from .serializers import (
    CustomUserSerializer, 
    SFlightSerializer, 
    FlightScheduleSerializer, 
    PlaceSerializer, 
    TravelPassengerSerializer, 
    PassengerContactSerializer, 
    PaymentDetailsSerializer
)
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate

@api_view(['POST'])
def register(request):
    serializer = CustomUserSerializer(data=request.data)  # Use the correct serializer
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')  # Use email for authentication
    password = request.data.get('password')

    if not email or not password:
        return Response({"message": "Email and password are required!"}, status=status.HTTP_400_BAD_REQUEST)

    user = authenticate(username=email, password=password)  # Authenticate with email
    if user is not None:
        return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)
    return Response({"message": "Invalid email or password!"}, status=status.HTTP_400_BAD_REQUEST)

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter]
    search_fields = ['email']  # Allow searching by email

class SFlightViewSet(viewsets.ModelViewSet):
    queryset = SFlight.objects.all()
    serializer_class = SFlightSerializer
    permission_classes = [permissions.IsAuthenticated]

class FlightScheduleViewSet(viewsets.ModelViewSet):
    queryset = FlightSchedule.objects.all()
    serializer_class = FlightScheduleSerializer
    permission_classes = [permissions.IsAuthenticated]

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.IsAuthenticated]

class TravelPassengerViewSet(viewsets.ModelViewSet):
    queryset = TravelPassenger.objects.all()
    serializer_class = TravelPassengerSerializer
    permission_classes = [permissions.IsAuthenticated]

class PassengerContactViewSet(viewsets.ModelViewSet):
    queryset = PassengerContact.objects.all()
    serializer_class = PassengerContactSerializer
    permission_classes = [permissions.IsAuthenticated]

class PaymentDetailsViewSet(viewsets.ModelViewSet):
    queryset = PaymentDetails.objects.all()
    serializer_class = PaymentDetailsSerializer
    permission_classes = [permissions.IsAuthenticated]
