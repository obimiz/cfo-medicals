from .models import Patient
from rest_framework import serializers

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ['id', 'name', 'email', 'phone_number', 'password', 'role', 'age', 'gender']
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        patient = Patient(
            email=validated_data['email'],
            name=validated_data['name'],
            phone_number=validated_data['phone_number'],
            age=validated_data['age'],
            gender=validated_data['gender'],
        )
        patient.set_password(validated_data['password'])  # Hash the password
        patient.save()
        return patient
    
    def update(self, instance, validated_data):
        # Update the patient instance with the validated data
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
class LoginSerializer(serializers.Serializer):
    """Serializer for the Login View"""
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True)