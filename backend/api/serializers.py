from rest_framework import serializers
from .models import *
from .serializers import *
from rest_framework.response import Response

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ("name", "start_date", "end_date", "comments", "status")