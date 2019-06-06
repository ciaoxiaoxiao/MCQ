from django.urls import path
from . import views

app_name = 'mcq'
urlpatterns = [
    path('', views.index, name='index'),
    path('settings', views.settings, name='settings'),
]
