define(["require", "exports", "durandal/system"], function(require, exports, __system__) {
    /// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
    /// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />
    var system = __system__;

    function log(message, data, source, showToast) {
        logIt(message, data, source, showToast, 'info');
    }
    exports.log = log;
    function logError(message, data, source, showToast) {
        logIt(message, data, source, showToast, 'error');
    }
    exports.logError = logError;
    function logIt(message, data, source, showToast, toastType) {
        source = source ? '[' + source + '] ' : '';
        if(data) {
            system.log(source, message, data);
        } else {
            system.log(source, message);
        }
        if(showToast) {
            if(toastType === 'error') {
                toastr.error(message);
            } else {
                toastr.info(message);
            }
        }
    }
})
