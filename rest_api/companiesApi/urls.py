from django.urls import URLPattern, path
from .views import CompanyView, CompanyDetailView

urlpatterns = [
    path('company/', CompanyView.as_view(), name='company-list'),
    path('company/<int:pk>/', CompanyDetailView.as_view(), name='company-detail'),
]