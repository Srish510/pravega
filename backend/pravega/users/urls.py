from django.urls import path

from . import views

urlpatterns = [
    # path("", views.index, name="index"),
    path('api/content/', ContentListCreateView.as_view(), name='content-list-create'),
    
    # Retrieve, Update, and Delete Content
    path('api/content/<int:pk>/', ContentDetailView.as_view(), name='content-detail'),
]