from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class CustomUser(AbstractUser):
    mobile_no = models.CharField(max_length=20, verbose_name="Mobile Number")
    role = models.CharField(max_length=10, choices=[
        ('admin', 'Admin'),
        ('customer', 'Customer'),
    ], default='customer')

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email}) - Role: {self.get_role_display()}"

class SFlight(models.Model):
    travel_type = models.CharField(max_length=25)
    departure = models.CharField(max_length=100)
    arrive = models.CharField(max_length=100)
    depart_date = models.DateTimeField(default=timezone.now)
    return_date = models.DateTimeField(default=timezone.now)
    no_of_passengers = models.IntegerField()
    cabin_class = models.CharField(max_length=25)

    class Meta:
        db_table = "search_flight"

    def __str__(self):
        return f"{self.travel_type} from {self.departure} to {self.arrive}"

class FlightSchedule(models.Model):
    company_name = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    pnr_no = models.IntegerField(default=0)
    dept_time = models.CharField(max_length=100)
    arrival_time = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    economy_seat = models.IntegerField(default=0)
    pre_economy_seat = models.IntegerField(default=0)
    business_seat = models.IntegerField(default=0)
    first_class_seat = models.IntegerField(default=0)
    economy_seat_price = models.IntegerField(default=0)
    pre_economy_seat_price = models.IntegerField(default=0)
    business_price = models.IntegerField(default=0)
    first_class_seat_price = models.IntegerField(default=0)
    date = models.DateField()
    everyday = models.CharField(max_length=55, default="NO")
    
    def __str__(self):
        return f"{self.company_name} flight from {self.from_location} to {self.to_location}"

class Place(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class TravelPassenger(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=55)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class PassengerContact(models.Model):
    travel_passenger = models.ForeignKey(TravelPassenger, on_delete=models.CASCADE)
    country_code = models.CharField(max_length=55)
    mobile_no = models.CharField(max_length=11)
    email = models.EmailField(max_length=55)

    def __str__(self):
        return f"Contact for {self.travel_passenger}"

class PaymentDetails(models.Model):
    payment_amount = models.CharField(max_length=255)
    credit_card_number = models.CharField(max_length=255)
    credit_holder_name = models.CharField(max_length=255)
    month_year_expiry = models.DateField()
    cvv_code = models.CharField(max_length=55)

    def __str__(self):
        return f"Payment details for {self.credit_holder_name}"
