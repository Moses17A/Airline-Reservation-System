from django.urls import path, include
from .views import register, login_view
from rest_framework.routers import DefaultRouter
from .views import (
    CustomUserViewSet,
    SFlightViewSet,
    FlightScheduleViewSet,
    PlaceViewSet,
    TravelPassengerViewSet,
    PassengerContactViewSet,
    PaymentDetailsViewSet,
)

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)
router.register(r'sflights', SFlightViewSet)
router.register(r'flightschedule', FlightScheduleViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'travelpassengers', TravelPassengerViewSet)
router.register(r'passengercontacts', PassengerContactViewSet)
router.register(r'paymentdetails', PaymentDetailsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('register/', register, name='register'),
    path('login/', login_view, name='login'),
]