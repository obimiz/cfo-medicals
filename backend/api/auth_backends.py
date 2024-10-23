# yourapp/auth_backends.py
from django.contrib.auth.backends import ModelBackend
from .models import Doctor

class EmailBackend(ModelBackend):
    def authenticate(self, request, email=None, password=None, **kwargs):
        try:
            user = Doctor.objects.get(email=email)
        except Doctor.DoesNotExist:
            return None
        
        if user.check_password(password):
            return user
        return None
