
from django.db import models
from django.core.validators import validate_email

class Medicine(models.Model):
    email = models.CharField(max_length=100, validators=[validate_email], default="example@example.com")
    password = models.CharField(max_length=128, default="")

    
    
    