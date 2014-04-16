from django.conf.urls import patterns, url
from apps.baseapp.views import home_page
from apps.baseapp import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = patterns('apps.baseapp.views',
    url(r'^snippets/$', views.SnippetList.as_view()),
    url(r'^snippets/(?P<pk>[0-9]+)/$', views.SnippetDetail.as_view()),
    url(r'^$', home_page),
)

urlpatterns = format_suffix_patterns(urlpatterns)
