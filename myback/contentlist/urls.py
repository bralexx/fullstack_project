from django.urls import path
from .views import *

urlpatterns = [
    # path("get_all/", VacancyList.as_view()),
    path("get_content/", VacancyList.as_view()),
    path("post_vacancy/", PostVacancy.as_view()),
    # path("drop_vacancies/", DropVacancies.as_view())
    path("get_filters/", FilterList.as_view()),
]

