from django.urls import path
from . import views

urlpatterns = [
    path('api/quizzes/', views.quiz_list, name='quiz_list'),
    path('api/quizzes/<int:quiz_id>/', views.quiz_detail, name='quiz_detail'),
]
