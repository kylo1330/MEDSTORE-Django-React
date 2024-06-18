from django.urls import path
from . import views
urlpatterns = [
    path('signup',views.signup,name='signup_api'),
    path('login', views.login, name='login_api'),
    path('addmedicine', views.create_store, name='addmedicineapi'),
    path('listmedicine', views.store_list, name='listmedicineapi'),
    path('<int:pk>/updatemedicine', views.update_store, name='updatemedcineapi'),
    path('<int:pk>/deletemedicine', views.delete_store, name='deletemedicineapi'),
    path('search/', views.search_store, name='searchmedicineapi'),
    
     ]