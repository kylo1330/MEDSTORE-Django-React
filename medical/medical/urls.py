from django.urls import path, include
from med import views
from django.views.generic.base import RedirectView

urlpatterns = [
    path('', views.med, name='home'),
    path('about-us/', views.aboutUs, name='about-us'),
    path('signup/',views.signup_page,name='signup'),  
    path('login/',views.login_page,name='login'),
    path('logout/', views.logout_view,name='logout'),
    path('store/',include('store.urls')),
    path('storeapi/', include('storeapi.urls')),
    
]