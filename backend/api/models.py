from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models


class DoctorManager(BaseUserManager):
    """Extending and editing the BaseUserManager class to
    create and manage doctors."""

    def create_user(self, email, name, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(
            email=email, name=name, phone_number=phone_number, **extra_fields
        )
        user.set_password(password)  # Set hashed password
        user.save(using=self._db)
        return user


class Doctor(AbstractBaseUser, PermissionsMixin):
    """The Doctors database model"""

    ROLE_CHOICES = [("doctor", "Doctor")]
    
    SPECIALTY_CHOICES = [
        ("cardiology", "Cardiology"),
        ("dermatology", "Dermatology"),
        ("orthopedics", "Orthopedics"),
        ("pediatrics", "Pediatrics"),
        ("rheumatology", "Rheumatology"),
        ("family_medicine", "Family Medicine"),
        ("internal_medicine", "Internal Medicine")
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=128)
    bio = models.CharField(max_length=400)
    specialty = models.CharField(max_length=50, choices=SPECIALTY_CHOICES, default="internal_medicine")
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default="doctor")
    gender = models.CharField(max_length=10)
    patients = models.ManyToManyField("Patient", related_name="doctors", blank=True)

    # Additional fields for user management
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="doctor_groups",  # Add a related_name here
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="doctor_user_permissions",  # Add a related_name here
        blank=True,
    )

    objects = DoctorManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "phone_number", "specialty", "bio", "role"]

    def __str__(self):
        return self.email


class PatientManager(BaseUserManager):
    """Extending and editing the BaseUserManager class to
    create and manage patients."""

    def create_user(self, email, name, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(
            email=email, name=name, phone_number=phone_number, **extra_fields
        )
        user.set_password(password)  # Set hashed password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, name, phone_number, password, **extra_fields)


class Patient(AbstractBaseUser, PermissionsMixin):
    """The patients database model"""

    ROLE_CHOICES = [
        ("patient", "Patient"),
        ("admin", "Admin"),
    ]

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=128)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default="patient")
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    doctor = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)

    # Additional fields for user management
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    groups = models.ManyToManyField(
        "auth.Group",
        related_name="patient_groups",  # Add a related_name here
        blank=True,
    )
    user_permissions = models.ManyToManyField(
        "auth.Permission",
        related_name="patient_user_permissions",  # Add a related_name here
        blank=True,
    )

    objects = PatientManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["name", "phone_number", "role", "age", "gender"]

    def __str__(self):
        return self.email
    

class Appointment(models.Model):
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('CONFIRMED', 'Confirmed'),
        ('CANCELLED', 'Cancelled'),
        ('COMPLETED', 'Completed'),
    ]
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='appointments')
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE, related_name='appointments')
    appointment_date = models.DateTimeField()
    reason = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return f"Appointment for {self.patient.name} with Dr. {self.doctor.name} on {self.date}"


