import store
from .models import Store
from django.shortcuts import render, redirect

from .forms import Storeform
from django.contrib.auth.decorators import login_required

@login_required(login_url='/login/')
def store_create(request):
    if request.method == 'POST':
        form = Storeform(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form =Storeform()
    return render(request, 'create.html', {'form': form})

@login_required(login_url='/login/')
def store_read(request):
    store_list=Store.objects.all()
    return render(request,'retrieve.html',{'store_list':store_list})


@login_required(login_url='/login/')
def store_update(request, pk):
    store = Store.objects.get(pk=pk)
    if request.method == 'POST':
        form = Storeform(request.POST,instance=store)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form =Storeform(instance=store)           
    return render(request, 'update.html', {'form': form})

from django.shortcuts import render
def store_delete(request,pk):
    store=Store.objects.get(pk=pk)  
    if request.method == 'POST':
        store.delete()
        return redirect('home')
    
    return render(request,'delete.html',{'store':store})


from django.db.models import Q
@login_required(login_url='/login/')
def store_read(request):
    query = request.GET.get('q')
    if query:
        store_list = Store.objects.filter(Q(medicine_name__icontains=query))
    else:
        store_list = Store.objects.all()
    return render(request, 'retrieve.html', {'store_list': store_list})




def store_search(request):
    querry = request.GET.get('q')
    if querry:
        store = Store.objects.filter(name__icontains=querry)
        return render(request,'search.html',{'store':store})
    else:
        return redirect(store)