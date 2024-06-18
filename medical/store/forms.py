from django import forms
from .models import Store

class Storeform(forms.ModelForm):
    class Meta:
        model = Store
        fields = ['name','description','price','quantity']