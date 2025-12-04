from django.urls import path
from . import views as home_views

urlpatterns = [
    path('home/', home_views.home, name='home'),
    path('work/', home_views.work, name='work'),
    path('services/', home_views.service, name='services'),
]