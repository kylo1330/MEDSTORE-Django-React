import queue
import qrcode
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from django.contrib.auth.forms import UserCreationForm
from rest_framework.permissions import AllowAny

@api_view(['POST'])
@permission_classes((AllowAny,))
def signup(request):
    form = UserCreationForm(data=request.data)
    if form.is_valid():
        user = form.save()
        return Response("account created successfully", status=status.HTTP_201_CREATED)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)



from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from rest_framework.authtoken.models import Token

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)



from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from store.forms import Storeform


@api_view(['POST'])
@permission_classes([IsAuthenticated])

def create_store(request):
    form = Storeform(request.POST)
    if form.is_valid():
        store = form.save()
        return Response({'id': store.id}, status=status.HTTP_201_CREATED)
    return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)



from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from store.models import Store
from .serializers import StoreSerializer
from rest_framework.permissions import AllowAny

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def store_list(request):
    store = Store.objects.all()
    serializer = StoreSerializer(store, many=True)
    return Response(serializer.data)



from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from store.forms import Storeform
from store.models import Store
from .serializers import StoreSerializer

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_store(request, pk):
    store = get_object_or_404(Store, pk=pk)
    form = Storeform(request.data, instance=store)
    if form.is_valid():
        form.save()
        serializer = StoreSerializer(store)
        return Response(serializer.data)
    else:
        return Response(form.errors, status=status.HTTP_400_BAD_REQUEST)
    


from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from store.models import Store
from rest_framework.permissions import AllowAny

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def delete_store(request, pk):
    try:
        store = Store.objects.get(pk=pk)
    except store.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    store.delete()
    return Response("deleted successfully")




@api_view(['GET'])
@permission_classes([IsAuthenticated])
def search_store(request):
    query = request.GET.get('q')
    if query:
        # Perform case-insensitive search on both name and medicine_name fields
        store_results = Store.objects.filter(queue(name__icontains=query) | qrcode(medicine_name__icontains=query))
        serializer = StoreSerializer(store_results, many=True)
        return Response(serializer.data)
    else:
        # If no query provided, return an empty list
        return Response([], status=status.HTTP_200_OK)


