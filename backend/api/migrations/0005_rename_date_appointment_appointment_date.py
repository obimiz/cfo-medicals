# Generated by Django 5.1.1 on 2024-10-22 09:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_appointment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='date',
            new_name='appointment_date',
        ),
    ]
