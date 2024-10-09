from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models

class PatientManager(BaseUserManager):
    """Extending and editing the BaseUserManager class to
    create and manage patients."""
    def create_user(self, email, name, phone_number, password=None, **extra_fields):
        if not email:
            raise ValueError("The Email field must be set")
        email = self.normalize_email(email)
        user = self.model(email=email, name=name, phone_number=phone_number, **extra_fields)
        user.set_password(password)  # Set hashed password
        user.save(using=self._db)
        return user

    def create_superuser(self, email, name, phone_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, name, phone_number, password, **extra_fields)

class Patient(AbstractBaseUser, PermissionsMixin):
    """The patients database model"""
    ROLE_CHOICES = (
        ('patient', 'Patient'),
        ('admin', 'Admin'),
        ('doctor', 'Doctor')
    )
    
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=128)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='patient')
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)

    # Additional fields for user management
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = PatientManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'phone_number', 'role', 'age', 'gender']

    def __str__(self):
        return self.email
