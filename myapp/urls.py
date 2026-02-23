from django.urls import path
from .views import comments_list

urlpatterns = [
    path('', comments_list),
]