from .models import Patient, Doctor, Appointment
from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate


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
    """Doctor Login Serializer"""
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        doctor = authenticate(email=email, password=password)

        if doctor and doctor.is_active:
            return doctor
        raise serializers.ValidationError("Invalid credentials or account is inactive.")
    def update(self, instance, validated_data):
        # Update the doctor instance with the validated data
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


