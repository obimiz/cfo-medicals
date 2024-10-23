from django.shortcuts import render
from django.utils import timezone  # Import timezone to set last_login
from rest_framework import generics, status
from .models import Patient, Doctor, Appointment
from .permissions import IsAdmin
from .serializers import (
    PatientSerializer,
    ChangePasswordSerializer,
    LogoutSerializer,
    AppointmentSerializer,
    DoctorSerializer,
    DoctorLoginSerializer,
    PatientLoginSerializer,
)
from django.contrib.auth.hashers import make_password
from rest_framework_simplejwt.tokens import OutstandingToken, RefreshToken
from rest_framework_simplejwt.exceptions import TokenError
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import logging

logger = logging.getLogger(__name__)

# Create your views here.


#
class PatientListCreateView(generics.ListCreateAPIView):
    """This view manages listing all patients and
    creating a new patient."""

    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]  # Require authentication


class PatientDetailView(generics.RetrieveUpdateDestroyAPIView):
    """This view manages retrieving, updating, and
    deleting a specific patient."""

    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    permission_classes = [IsAuthenticated]  # Require authentication


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
            return Response(
                {
                    "id": patient.id,
                    "name": patient.name,
                    "email": patient.email,
                    "gender": patient.gender,
                    "role": patient.role,
                },
                status=status.HTTP_201_CREATED,
            )

        # Customizing error response
        errors = serializer.errors

        # Initialize an empty response dictionary
        error_response = {}

        # Check if the email error exists and prioritize it
        if "email" in errors:
            error_response["email"] = errors["email"]
        # If no email error, check for phone_number
        elif "phone_number" in errors:
            error_response["phone_number"] = errors["phone_number"]
        return Response(error_response, status=status.HTTP_400_BAD_REQUEST)


class PatientLoginView(APIView):
    """FOr managing patients logins"""

    def post(self, request):
        serializer = PatientLoginSerializer(data=request.data)
        if serializer.is_valid():
            patient = serializer.validated_data
            if not patient.is_active:
                return Response(
                    {"detail": "This account is inactive. Please contact support."},
                    status=status.HTTP_403_FORBIDDEN,
                )
            refresh = RefreshToken.for_user(patient)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "message": "Login successful.",
                },
                status=status.HTTP_200_OK,
            )
        return Response(
            {"detail": "Invalid email or password. Please try again."},
            status=status.HTTP_401_UNAUTHORIZED,
        )


class PatientLogoutView(generics.GenericAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = LogoutSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.validated_data["refresh"]
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token
        except Exception as e:
            return Response(
                {"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"detail": "Successfully logged out."}, status=status.HTTP_204_NO_CONTENT
        )


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
        serializer = self.get_serializer(
            patient, data=request.data, partial=True
        )  # Use partial=True to allow partial updates
        if serializer.is_valid():
            # Save the updated patient instance
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DoctorListCreateView(generics.ListCreateAPIView):
    """This view manages listing all doctors and creating a new doctor."""

    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated]  # Adjust permissions as needed


class DoctorDetailView(generics.RetrieveUpdateDestroyAPIView):
    """This view manages retrieving, updating, and deleting a specific doctor."""

    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [IsAuthenticated]  # Adjust permissions as needed


# For doctor signup, similar to the patient signup view

class DoctorSignupView(generics.CreateAPIView):
    """This view manages signing up a doctor."""

    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            # Hash the password before saving
            serializer.validated_data['password'] = make_password(serializer.validated_data['password'])
            doctor = serializer.save()
            return Response(
                {
                    "id": doctor.id,
                    "name": doctor.name,
                    "email": doctor.email,
                    "specialty": doctor.specialty,
                    "role": doctor.role,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DoctorLoginView(APIView):
    """For managing Doctor login views"""

    def post(self, request):
        logger.debug(f"Login attempt with data: {request.data}")
        serializer = DoctorLoginSerializer(data=request.data)
        if serializer.is_valid():
            doctor = serializer.validated_data["user"]
            logger.debug(f"Authenticated user: {doctor.email} with id: {doctor.id}")  # Log authenticated user

            if not doctor.is_active:
                return Response(
                    {"detail": "This account is inactive. Please contact support."},
                    status=status.HTTP_403_FORBIDDEN,
                )
            refresh = RefreshToken.for_user(doctor)
            return Response(
                {
                    "refresh": str(refresh),
                    "access": str(refresh.access_token),
                    "message": "Login successful.",
                },
                status=status.HTTP_200_OK,
            )

        logger.debug(f"Validation errors: {serializer.errors}")  # Log validation errors
        return Response(
            {"detail": "Invalid email or password."},
            status=status.HTTP_401_UNAUTHORIZED,
        )



class DoctorLogoutView(generics.GenericAPIView):
    """This view manages logging out a doctor."""

    permission_classes = [IsAuthenticated]
    serializer_class = LogoutSerializer

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        refresh_token = serializer.validated_data["refresh"]
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()  # Blacklist the refresh token
        except Exception as e:
            return Response(
                {"detail": "Invalid token."}, status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"detail": "Successfully logged out."}, status=status.HTTP_204_NO_CONTENT
        )


class ChangePasswordView(generics.UpdateAPIView):
    """
    This view manages changing a patient's password
    """

    permission_classes = [IsAuthenticated]
    serializer_class = ChangePasswordSerializer

    def get_object(self):
        # Return the authenticated user instance
        return self.request.user

    def put(self, request, *args, **kwargs):
        user = self.get_object()  # Get the logged-in patient
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            # Call the update method to change the password
            serializer.update(user, serializer.validated_data)
            return Response(
                {"detail": "Password updated successfully."}, status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class HelloWorldView(APIView):
    """
    This view returns 'Hello World' and requires authentication.
    """

    permission_classes = [IsAuthenticated]  # Ensure that the user is authenticated

    def get(self, request, *args, **kwargs):
        return Response({"message": "Hello World"}, status=status.HTTP_200_OK)


class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class AppointmentListView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


class AppointmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
