from re import M
from turtle import update
from django.db import models
# Create your models here.
class Categorie(models.Model):
    name_ct=models.CharField(max_length=100)
    desc_ct=models.TextField()
    imgct=models.ImageField(upload_to="categ")
    updated_on=models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name_ct

class food(models.Model):
    categ=models.ForeignKey(Categorie,on_delete=models.CASCADE,default=1)
    name=models.CharField(max_length=100)
    desc=models.TextField()
    srimg=models.ImageField(upload_to="pics")
    price=models.PositiveIntegerField()
    updated_on=models.DateTimeField(auto_now=True)
    def __str__(self):
         return self.name