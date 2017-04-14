requirejs.config({
    baseUrl: 'js/app',
 
    paths: {
        jquery: '../lib/jquery',
        app:'../app'
    }
});

requirejs(['app/index'])
