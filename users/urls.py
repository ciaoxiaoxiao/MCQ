from django.urls import path
from . import views

app_name = 'users'
urlpatterns = [
    path('signup/', views.signup, name='signup'),
    path('signin/', views.signin, name='signin'),
    path('logout/', views.logoutUser, name='logout'),
    path('loginUser/', views.loginUser, name='login-user'),
    path('signupUser/', views.signupUser, name='signup-user'),
]
