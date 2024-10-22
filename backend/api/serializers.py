from .models import Patient, Doctor, Appointment
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
import logging

logger = logging.getLogger(__name__)

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ['id', 'name', 'email', 'phone_number', 'role', 'specialty', 'bio', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        doctor = Doctor(
            email=validated_data['email'],
            name=validated_data['name'],
            phone_number=validated_data['phone_number'],
            specialty=validated_data['specialty'],
            bio=validated_data['bio'],
        )
        doctor.set_password(validated_data['password'])
        doctor.save()
        return doctor


class DoctorLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Log the login attempt
        logger.debug(f"Attempting to authenticate user with email: {email}")

        user = authenticate(email=email, password=password)
        if user is None:
            logger.debug("Authentication failed: Invalid email or password.")
            raise serializers.ValidationError("Invalid email or password.")
        
        data['user'] = user
        return data



class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'name', 'email', 'phone_number', 'role', 'age', 'gender', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        patient = Patient(
            email=validated_data['email'],
            name=validated_data['name'],
            phone_number=validated_data['phone_number'],
            age=validated_data['age'],
            gender=validated_data['gender'],
        )
        patient.set_password(validated_data['password'])
        patient.save()
        return patient
        
    def update(self, instance, validated_data):
        # Update the patient instance with the validated data
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


class PatientLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        patient = authenticate(email=email, password=password)

        if patient and patient.is_active:
            return patient
        raise serializers.ValidationError("Invalid credentials or account is inactive.")


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate_old_password(self, value):
        # Check if the old password is correct
        user = self.context['request'].user
        if not user.check_password(value):
            raise serializers.ValidationError("Old password is incorrect.")
        return value

    def validate_new_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("New password must be at least 8 characters long.")
        return value

    def update(self, instance, validated_data):
        # Set the new password
        instance.set_password(validated_data['new_password'])
        instance.save()
        return instance

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate(self, attrs):
        self.refresh_token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.refresh_token).blacklist()
        except Exception as e:
            self.fail('bad_token')

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'
