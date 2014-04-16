import os
from django.conf.urls import patterns, include, url
from django.contrib import admin, auth
from apps.baseapp.views import *
from django.contrib import admin

site_media = os.path.join(os.path.dirname(__file__), 'site_media')
app = os.path.join(os.path.dirname(__file__), 'app')

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'django_durandal.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    # app urls
    url(r'^', include('apps.baseapp.urls')),

    # Site media
    (r'^site_media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': site_media}),
    (r'^app/(?P<path>.*)$', 'django.views.static.serve', {'document_root': app}),
)
