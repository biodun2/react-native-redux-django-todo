from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.TodoCreate.as_view(), name='todo-create'),
]