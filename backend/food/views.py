from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from .models import Baguette


def index(req):
    data = Baguette.objects.all()
    context = serializers.serialize('json', data)
    return HttpResponse(context, content_type="text/json")
