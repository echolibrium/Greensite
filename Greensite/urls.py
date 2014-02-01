from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Greensite.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    #url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'pages.views.home', name='home'),
    url(r'^index.html/$', 'pages.views.index', name='index'),
    url(r'^about.html/$', 'pages.views.about', name='about'),
    url(r'^philosophy.html/$', 'pages.views.philosophy', name='philosophy'),
    url(r'^engineering.html/$', 'pages.views.engineering', name='engineering'),
    url(r'^contact.html/$', 'pages.views.contact', name='contact'),
)
