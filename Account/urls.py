from django.urls import path
from.import views
urlpatterns = [
    path("",views.register,name="reg"),
    path("log",views.login,name="lg"),
    path("logout",views.logout,name="lgt"),
    path("pr",views.profile,name="pr"),
    path("upp",views.upprofile,name="uprf"),

]