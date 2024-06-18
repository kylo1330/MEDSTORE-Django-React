
from operator import itemgetter
from django.shortcuts import render
from .forms import MedicineForm


def med(request):
    return render(request,'index.html')
    


from django.contrib.auth.forms import UserCreationForm
from django import forms

class CustomUserCreationForm(UserCreationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.fields['password1'].help_text = None
        self.fields['password2'].help_text = None
        self.fields['username'].help_text = None

from django.shortcuts import render, redirect

def signup_page(request):
    if request.method == 'POST':
        form =CustomUserCreationForm(request.POST)
        if form.is_valid():
            cust = form.save()
        return redirect('login')
    else:
        form = CustomUserCreationForm()
    return render(request, 'signup.html', {'form': form})




from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import render,redirect
from django.contrib.auth import login 

def login_page(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            # Authenticate the user
            user = form.get_user()
            login(request, user)
         


            return redirect('home')
    else:
        form = AuthenticationForm()
    return render(request, 'login.html', {'form': form})


from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout

@login_required(login_url='/login/')
def logout_view(request):
    if request.method == 'POST':
        logout(request)
        return redirect('login')

    context = {
        'user': request.user
    }

    return render(request, 'logout.html', context)



from django.shortcuts import render
from django.contrib.auth.decorators import user_passes_test

def  user_check(user):
    return user.username.endswith('@example.com')

@login_required(login_url='/login/')
@user_passes_test(user_check,login_url='/login/')
def aboutUs(request):
    return render(request,'about-us.html')



from django.shortcuts import render
from django.contrib.auth.decorators import user_passes_test

def  user_check(user):
    return user.username.endswith('@example.com')

@login_required(login_url='/login/')
@user_passes_test(user_check,login_url='/login/')
def aboutUs(request):
    return render(request,'about-us.html')






