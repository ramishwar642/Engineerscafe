from unicodedata import category
from django.shortcuts import render
from django.http import HttpResponse
from.models import *
# Create your views here.
def index(request):
    dic={}
    obj= Categorie.objects.all()
    dic["ctg"]= obj
    return render(request,"index.html",dic)
def error(request):
    return render(request,"error.html")
def about(request):
    return render(request,"about.html")
def blog_single(request):
    return render(request,"blog_single.html")
def blog(request):
    return render(request,"blog.html")
def checkout(request):
    return render(request,"checkout.html")
def contact(request):
    return render(request,"contact.html")
def food_page(request):
    dic={}
    obj= food.objects.all()
    dic["fd"]= obj
    return render(request,"food_page.html",dic)


    return render(request,"food_page.html",dic)
def food_page2(request):
    return render(request,"food_page2.html")
def gallery(request):
    return render(request,"gallery.html")
def homepage2(request):
    return render(request,"homepage2.html")
def homepage3(request):
    return render(request,"homepage3.html")
def homepage4(request):
    return render(request,"homepage4.html")
def login(request):
    return render(request,"login.html")
def menu(request):
    return render(request,"menu.html")
def profile(request):
    return render(request,"profile.html")
def shopping_cart(request):
    return render(request,"shopping-cart.html")
def signup(request):
    return render(request,"signup.html")
def single_dish(request):
    return render(request,"single_dish.html")
def single_food(request):
    return render(request,"single-food.html") 
def registration(request):
    return render(request,"registration.html")

