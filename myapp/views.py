from django.http import JsonResponse
from .models import Comment  # replace Person with Comment

def comments_list(request):
    data = list(Comment.objects.values("id", "author", "text", "date", "likes", "image"))
    return JsonResponse(data, safe=False)