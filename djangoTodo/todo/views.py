from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from todo.serializer import TodoSerializer
from todo.models import Todo
from rest_framework.authtoken.models import Token


class TodoCreate(APIView):

    def post(self, request, format='json'):
        serializer = TodoSerializer(data = request.data)
        if serializer.is_valid():
            todo = serializer.save()
            if todo:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
