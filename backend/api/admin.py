from django.contrib import admin
from .models import Patient, Doctor, Appointment  # Import your Patient model

# Register your models here.


# Optional: Define an admin interface class to customize the admin view
class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'age', 'gender', 'role')  # Fields to display in the list view
    search_fields = ('name', 'email')  # Add a search bar for these fields
    list_filter = ('role',)

class DoctorAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'specialty', 'bio', 'role')  # Fields to display in the list view
    search_fields = ('name', 'email', 'specialty')  # Add a search bar for these fields
    list_filter = ('role', 'specialty')  # Filters for role and specialty

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('patient', 'doctor', 'appointment_date', 'status')  # Fields to display in the list view
    search_fields = ('patient__name', 'doctor__name', 'status')  # Add a search bar for these fields
    list_filter = ('status', 'doctor')  # Filters for status and doctor

# Register the Doctor model with the custom DoctorAdmin interface
admin.site.register(Doctor, DoctorAdmin)
# Register the Patient model with the custom PatientAdmin interface
admin.site.register(Patient, PatientAdmin)
# Register the Appointment model with the AppointmentAdmin class
admin.site.register(Appointment, AppointmentAdmin)
