from django.contrib import admin

# Register your models here.

from .models import Patient  # Import your Patient model

# Optional: Define an admin interface class to customize the admin view
class PatientAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone_number', 'age', 'gender', 'role')  # Fields to display in the list view
    search_fields = ('name', 'email')  # Add a search bar for these fields
    list_filter = ('role',)

# Register the Patient model with the custom PatientAdmin interface
admin.site.register(Patient, PatientAdmin)
