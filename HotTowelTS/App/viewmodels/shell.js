define(["require", "exports", 'durandal/system', 'durandal/plugins/router', 'services/logger'], function(require, exports, __system__, ___router__, __logger__) {
    /// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
    var system = __system__;

    var _router = ___router__;

    var logger = __logger__;

    exports.router = _router;
    function activate() {
        return boot();
    }
    exports.activate = activate;
    function boot() {
        exports.router.mapNav('home', null, null);
        exports.router.mapNav('details', null, null);
        log('Hot Towel SPA Loaded!', null, true);
        return exports.router.activate('home');
    }
    function log(msg, data, showToast) {
        // TODO: how to reference current module to pass to system.getModuleID?
        logger.log(msg, data, system.getModuleId(null), showToast);
    }
})
