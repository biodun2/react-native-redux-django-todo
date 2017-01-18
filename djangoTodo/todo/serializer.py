from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from todo.models import Todo


class TodoSerializer(serializers.ModelSerializer):
    todo = serializers.CharField(
        required=True,
        max_length=32,
        validators=[UniqueValidator(queryset=Todo.objects.all())]
    )

    def create_todo(self, validated_data):
        newTodo = Todo(todo=validated_data['todo'])
        return newTodo

    class Meta:
        model = Todo
        fields = ('todo',)