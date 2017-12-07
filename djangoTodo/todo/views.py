import logging
import json

from rest_framework.views import APIView
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from todo.serializer import TodoSerializer
from todo.models import Todo
from utils import AtomicMixin


class CreateTodoView(GenericAPIView, APIView, AtomicMixin):
    serializer_class = TodoSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JSONWebTokenAuthentication,)

    def post(self, request):
        logging.info('CreateTodoView::post::request::user {}'.format(request.user))
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        logging.info('CreateTodoView::post::response')
        return Response({'success': True}, status=status.HTTP_200_OK)


class GetTodosView(GenericAPIView, APIView, AtomicMixin):
    serializer_class = TodoSerializer
    permission_classes = (IsAuthenticated,)
    authentication_classes = (JSONWebTokenAuthentication,)

    def get(self, request):
        logging.info('GetTodosView::post::request::user {}'.format(request.user))
        todos = Todo.objects.all()
        todo_serializer = self.get_serializer(todos, many=True)
        formatted_data = todo_serializer.data

        logging.info('GetTodosView::get::success::data {}'.format(json.dumps(formatted_data)))
        return Response(formatted_data, status=status.HTTP_200_OK)

