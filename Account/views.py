from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from .models import * 
# Create your views here.
def register(request):
    if request.method=="POST":
        fname=request.POST["fn"]
        lname=request.POST["ln"]
        uname=request.POST["un"]
        email=request.POST["en"]
        ped=request.POST["pn"]
        cowd=request.POST["cpn"]
        if cowd== ped:
            usr=User.objects.create_user(first_name=fname,username=uname,last_name=lname,email=email,password=ped)
            usr.save()
            return redirect("am")
        else:
            return redirect("ab")

    return render(request,"signup.html")
def login(request):
    if request.method=="POST":
        un=request.POST["us"]
        psd=request.POST["pa"]
        usr=auth.authenticate(username=un,password=psd)
        if usr!=None:
            auth.login(request,usr)
            return redirect("am")
        

    return render(request,"login.html")
def logout(request):
    auth.logout(request)
    return redirect("am") 
def profile(request):
    dic={}
    prof=Profile.objects.filter(user_id=request.user.id)
    if len(prof)>0:
        pr=Profile.objects.get(user_id=request.user.id)
        dic["pro"]=pr
    return render(request,"profile.html",dic)
def upprofile(request):
    dic={}
    prof=Profile.objects.filter(user_id=request.user.id)
    if len(prof)>0:
        pr=Profile.objects.get(user_id=request.user.id)
        dic["pro"]=pr
        if request.method== "POST":
            fn=request.POST["fnm"]
            ln=request.POST["lnm"]
            un=request.POST["unm"]
            em=request.POST["eml"]
            add=request.POST["adr"]
            ct=request.POST["ct"]
            pin=request.POST["pin"]
            phn=request.POST["phn"]
            usr=User.objects.get(id=request.user.id)
            usr.first_name=fn
            usr.last_name=ln
            usr.username=un
            usr.email=em
            usr.save()
            pr.address=add
            pr.pincode=pin
            pr.city=ct
            pr.cno=phn
            pr.save()
        if "prf" in request.FILES:
            pimg=request.FILES["prf"]
            pr.proimg=pimg
            pr.save()
            return redirect("pr")
    return render(request,"uppro.html",dic)