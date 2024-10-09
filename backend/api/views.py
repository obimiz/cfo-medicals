from django.shortcuts import render
from django.utils import timezone  # Import timezone to set last_login
from rest_framework import generics
from .models import Patient
from .permissions import IsAdmin
from .serializers import PatientSerializer, LoginSerializer
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import OutstandingToken, BlacklistedToken

# Create your views here.

# 
class PatientListCreateView(generics.ListCreateAPIView):
    """This view manages listing all patients and
    creating a new patient."""
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated, IsAdmin]  # Require authentication

class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    """This view manages retrieving, updating, and
    deleting a specific patient."""
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated, IsAdmin]  # Require authentication


class PatientSignupView(generics.CreateAPIView):
    """
    This view manages signing up a patient
    """
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            patient = serializer.save()
            return Response({
                "id": patient.id,
                "name": patient.name,
                "email": patient.email,
                "gender": patient.gender,
                "role": patient.role,
            }, status=status.HTTP_201_CREATED)

		# Customizing error response
        errors = serializer.errors
        
        # Initialize an empty response dictionary
        error_response = {}
        
        # Check if the email error exists and prioritize it
        if 'email' in errors:
            error_response['email'] = errors['email']
        # If no email error, check for phone_number
        elif 'phone_number' in errors:
            error_response['phone_number'] = errors['phone_number']
        return Response(error_response, status=status.HTTP_400_BAD_REQUEST)


class PatientLoginView(generics.GenericAPIView):
    """
    This view manages logging in a patient
    """
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            patient = Patient.objects.get(email=email)
            if patient.check_password(password):  # Check the provided password
                patient.last_login = timezone.now()  # Set the current time
                patient.save() # Save the updated patient instance
                refresh = RefreshToken.for_user(patient)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            else:
                return Response({'detail': 'Invalid credentials'}, status=401)
        except Patient.DoesNotExist:
            return Response({'detail': 'User not found'}, status=404)


class PatientLogoutView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            token = request.auth  # Get the token from the request
            OutstandingToken.objects.get(token=token).blacklist()  # Blacklist the token
            return Response(status=status.HTTP_205_RESET_CONTENT)  # No content returned on logout
        except OutstandingToken.DoesNotExist:
            return Response({"detail": "Token already blacklisted"}, status=400)


class PatientProfileUpdateView(generics.UpdateAPIView):
    """
    This view manages updating a patient's profile
    """
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        # Return the authenticated user instance
        return self.request.user

    def put(self, request, *args, **kwargs):
        patient = self.get_object()  # Get the logged-in patient
        serializer = self.get_serializer(patient, data=request.data, partial=True)  # Use partial=True to allow partial updates
        if serializer.is_valid():
            # Save the updated patient instance
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

