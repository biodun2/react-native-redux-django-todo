from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        required=True,
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    email = serializers.EmailField(
        required=True,
        max_length=32,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        max_length=32
    )

    def create_user(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'], validated_data['email'], 
            validated_data['password'])

    class Meta:
        model = User
        fields = ('username', 'email', 'password')