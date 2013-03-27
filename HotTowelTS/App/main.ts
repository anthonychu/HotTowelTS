/// <reference path="../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../Scripts/typings/durandal/durandal.d.ts" />

import app = module('durandal/app');
import viewLocator = module('durandal/viewLocator');
import system = module('durandal/system');
import router = module('durandal/plugins/router');
import logger = module('services/logger');


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
