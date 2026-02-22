from django.http import JsonResponse
from .models import Person

def hello(request):
    data = list(Person.objects.values("id", "name"))
    return JsonResponse(data, safe=False)