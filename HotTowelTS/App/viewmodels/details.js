define(["require", "exports", 'services/logger'], function(require, exports, __logger__) {
    var logger = __logger__;

    exports.title = 'Details View TS';
    function activate() {
        logger.log('Details View Activated', null, 'details', true);
        return true;
    }
    exports.activate = activate;
})
