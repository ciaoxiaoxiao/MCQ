from django.shortcuts import get_object_or_404, render
from django.contrib.auth.decorators import login_required


def index(request):
    return render(request, 'mcqs/index.html', {})


@login_required(login_url='/signin/')
def settings(request):
    return render(request, 'mcqs/settings.html', {})
