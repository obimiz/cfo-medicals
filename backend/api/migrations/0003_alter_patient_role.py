# Generated by Django 5.1.1 on 2024-10-21 11:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_delete_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='role',
            field=models.CharField(choices=[('patient', 'Patient'), ('admin', 'Admin')], default='patient', max_length=10),
        ),
    ]
