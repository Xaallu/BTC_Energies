from django.urls import path
from .views import contact_api
from .views import contact_api, generate

urlpatterns = [
    path('contact/', contact_api, name='contact_api'),
    path('generate', generate),  # ✅ pour le chatbot Rubie
]
