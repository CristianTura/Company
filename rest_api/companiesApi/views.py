# from django.shortcuts import render
from django.views import View
from .models import Company
from django.http import JsonResponse
from django.forms.models import model_to_dict

class CompanyView(View):
    def get(self, request):
        companyList = Company.objects.all()
        return JsonResponse(list(companyList.values()), safe=False)
    def post(request):
        company = Company(
            name = request.POST['name'],
            address = request.POST['address'],
            nit = request.POST['nit'],
            phone = request.POST['phone']
        )
        company.save()
        return JsonResponse(model_to_dict(company), safe=False)
    # def put(self, request):
    #     pass
    # def delete(self, request):
    #     pass

class CompanyDetailView(View):
    def get(self, request, pk):
        company = Company.objects.get(pk=pk)
        return JsonResponse(model_to_dict(company), safe=False)
    # def post(self, request):
    #     pass
    # def put(self, request):
    #     pass
    # def delete(self, request):
    #     pass