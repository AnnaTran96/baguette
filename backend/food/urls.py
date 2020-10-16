from django.contrib import admin
from django.urls import path, include
from . import views
from .views import current_user, UserList

urlpatterns = [
    path('menu/', views.index, name="food-index"),
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]