from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from users.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


class UserCreate(GenericAPIView):

    def post(self, request, format='json'):
        serializer = UserSerializer(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response({
                    'user' : serializer.data, 
                    'status' :status.HTTP_201_CREATED
                })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
