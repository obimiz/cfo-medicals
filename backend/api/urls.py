from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    PatientListCreateView,
    PatientDetailView,
    PatientSignupView,
    PatientLoginView,
    PatientLogoutView,
    PatientProfileUpdateView,
    ChangePasswordView,
    HelloWorldView,
    DoctorListCreateView,
    DoctorDetailView,
    DoctorSignupView,
    DoctorLogoutView,
    DoctorLoginView,
    AppointmentCreateView,
    AppointmentListView,
    AppointmentDetailView,
)

urlpatterns = [
    # patients URLS
    path("patients/", PatientListCreateView.as_view(), name="patient-list-create"),
    path("patients/<int:pk>/", PatientDetailView.as_view(), name="patient-detail"),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path(
        "patient/signup/", PatientSignupView.as_view(), name="patient_signup"
    ),  # For signup
    path(
        "patient/login/", PatientLoginView.as_view(), name="patient_login"
    ),  # For login
    path(
        "patient/logout/", PatientLogoutView.as_view(), name="patient_logout"
    ),  # For logout
    path(
        "patient/profile/", PatientProfileUpdateView.as_view(), name="patient_profile"
    ),  # For updating profile
    path(
        "patient/reset-password/", ChangePasswordView.as_view(), name="change-password"
    ),
    path("hello-world/", HelloWorldView.as_view(), name="hello-world"),
    # Appointment URLS
    path(
        "appointments/create/",
        AppointmentCreateView.as_view(),
        name="appointment-create",
    ),
    path("appointments/", AppointmentListView.as_view(), name="appointment-list"),
    path(
        "appointments/<int:pk>/",
        AppointmentDetailView.as_view(),
        name="appointment-detail",
    ),
    # Doctor URLs
    path("doctors/", DoctorListCreateView.as_view(), name="doctor-list-create"),
    path("doctor/<int:pk>/", DoctorDetailView.as_view(), name="doctor-detail"),
    path("doctor/signup/", DoctorSignupView.as_view(), name="doctor-signup"),
    path("doctor/login/", DoctorLoginView.as_view(), name="doctor-login"),
    path("doctor/logout/", DoctorLogoutView.as_view(), name="doctor-logout"),
]
