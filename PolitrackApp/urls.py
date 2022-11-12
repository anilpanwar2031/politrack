
from django.contrib import admin
from django.urls import path
from PolitrackApp import views

urlpatterns = [
    path("", views.home, name="home"),
    path("statement/", views.statement, name="statement"),
    path("save/", views.save_statement, name="save"),

]
