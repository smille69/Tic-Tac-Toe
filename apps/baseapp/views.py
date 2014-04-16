from apps.baseapp.models import Snippet
from apps.baseapp.serializers import SnippetSerializer
from rest_framework import generics
from django.shortcuts import render_to_response

def home_page(request):
    company_name = "Netsoft Solutions, Inc"

    return render_to_response('index.html',  locals())

class SnippetList(generics.ListCreateAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer


class SnippetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
