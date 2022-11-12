
from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include('PolitrackApp.urls'))
]

admin.site.site_header = 'Politrack Administration'      # default: "Django Administration"
admin.site.index_title = 'Features area'                 # default: "Site administration"
admin.site.site_title = 'Politrack Admin'                # default: "Django site admin"