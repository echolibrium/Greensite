#from django.shortcuts import render
#from django.http import HttpResponse
from django.shortcuts import render_to_response
from .models import Line

# Create your views here.
#def home(request):
#	return HttpResponse("Hello world from story/views.py!")

def home(request):
	#return render_to_response("pages/home.html", {'lines': Line.objects.all()})
	#return render_to_response("pages/home.html")
	#return render_to_response("pages/index.html")
	return render_to_response("pages/index2.html")

def index(request):
	#return render_to_response("pages/home.html", {'lines': Line.objects.all()})
	#return render_to_response("pages/home.html")
	#return render_to_response("pages/index.html")
	return render_to_response("pages/index2.html")
	
def about(request):
	return render_to_response("pages/about.html")	

def philosophy(request):
	return render_to_response("pages/philosophy.html")	

def engineering(request):
	return render_to_response("pages/engineering.html")	

def contact(request):
	return render_to_response("pages/contact.html")	
	
