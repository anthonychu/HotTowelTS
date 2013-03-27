define(["require", "exports", 'durandal/app', 'durandal/viewLocator', 'durandal/system', 'durandal/plugins/router', 'services/logger'], function(require, exports, __app__, __viewLocator__, __system__, __router__, __logger__) {
    /// <reference path="../Scripts/typings/toastr/toastr.d.ts" />
    /// <reference path="../Scripts/typings/durandal/durandal.d.ts" />
    var app = __app__;

    var viewLocator = __viewLocator__;

    var system = __system__;

    var router = __router__;

    var logger = __logger__;

    // Enable debug message to show in the console
    system.debug(true);
    app.start().then(function () {
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.backgroundpositionClass = 'toast-bottom-right';
        router.handleInvalidRoute = function (route, params) {
            logger.logError('No Route Found', route, 'main', true);
        };
        // When finding a viewmodel module, replace the viewmodel string
        // with view to find it partner view.
        router.useConvention();
        viewLocator.useConvention();
        // Adapt to touch devices
        app.adaptToDevice();
        //Show the app by setting the root view model for our application.
        app.setRoot('viewmodels/shell', 'entrance');
    });
})
