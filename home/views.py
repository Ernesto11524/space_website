from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'home/home.html')

def work(request):
    return render(request, 'home/work.html')

def service(request):
    return render(request, 'home/service.html')