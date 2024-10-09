from django.urls import path
from .views import PatientListCreateView, PatientDetailView, PatientSignupView, PatientLoginView, PatientLogoutView, PatientProfileUpdateView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('patients/', PatientListCreateView.as_view(), name="patient-list-create"),
    path('patients/<int:pk>/', PatientDetailView.as_view(), name="patient-detail"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('patient/signup/', PatientSignupView.as_view(), name='patient_signup'),  # For signup
    path('patient/login/', PatientLoginView.as_view(), name='patient_login'),  # For login
    path('patient/logout/', PatientLogoutView.as_view(), name='patient_logout'),  # For logout
    path('patient/profile/', PatientProfileUpdateView.as_view(), name='patient_profile'),  # For updating profile
]
