# views.py
from django.http import JsonResponse

def hello(request):
    data = [
        {"id": 1, "name": "Alice"},
        {"id": 2, "name": "Bob"}
    ]
    return JsonResponse(data, safe=False)