from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Profile(models.Model):
    user= models.ForeignKey(User,on_delete=models.CASCADE)
    cno=models.PositiveBigIntegerField()
    proimg=models.ImageField(upload_to="profilepic")
    city=models.CharField(max_length=25)
    state=models.CharField(max_length=25)
    pincode=models.CharField(max_length=25)
    address=models.TextField()
    updates=models.DateTimeField(auto_now=True)