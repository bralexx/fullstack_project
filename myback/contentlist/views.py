import json
from django.shortcuts import render
from django.http import HttpResponse 
from rest_framework.views import APIView 
from rest_framework import generics


from .models import Vacancy
from .serializers import *

from .filters.db_fillters import *
from .filters.vacancy_filter_list import vacancy_filter_list

class VacancyList(generics.ListAPIView):
  serializer_class = VacancySerializer
  queryset = Vacancy.objects.all()
  def get_queryset(self):
    qs = self.queryset
    qp = self.request.query_params
    qs = vacancy_filter_list.apply_filters(qs, qp).all()
    search_str = qp.get('search')
    print(search_str)
    if search_str is not None:
      print(search_str)
      qs = qs.filter(job_title__contains=search_str)
    return qs

class PostVacancy(generics.CreateAPIView):
  serializer_class = VacancySerializer

class FilterList(generics.ListAPIView):
  def get(self, request):
    filter_list_json = vacancy_filter_list.get_json()
    return HttpResponse(json.dumps(filter_list_json), content_type="application/json")