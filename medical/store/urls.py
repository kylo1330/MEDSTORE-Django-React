from . import views
from django.urls import path

urlpatterns = [
        path('add/',views.store_create,name='addmedicine'),
        path('view/',views.store_read,name='viewmedicine'),
        path('update/<int:pk>/',views.store_update,name='updatemedicine'),
        path('delete/<int:pk>',views.store_delete,name='deletemedicine'),
        path('search/', views.store_search, name='searchmedicine'),
    ]