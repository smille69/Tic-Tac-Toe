requirejs.config({
    paths: {
        'text': '../site_media/lib/require/text',
        'durandal':'../site_media/lib/durandal/js',
        'plugins' : '../site_media/lib/durandal/js/plugins',
        'transitions' : '../site_media/lib/durandal/js/transitions',
        'knockout': '../site_media/lib/knockout/knockout-2.3.0',
        'bootstrap': '../site_media/lib/bootstrap/js/bootstrap',
        'jquery': '../site_media/lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'Durandal Samples';

    //specify which plugins to install and their configuration
    app.configurePlugins({
        router:true,
        dialog: true,
        widget: {
            kinds: ['expander']
        }
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application.
        app.setRoot('shell');
    });
});