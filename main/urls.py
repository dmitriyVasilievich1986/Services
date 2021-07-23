from .views import index_view
from django.urls import path

urlpatterns = [
    path("", index_view),
    path(r"^.*", index_view),
]
