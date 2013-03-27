define(["require", "exports", 'services/logger'], function(require, exports, __logger__) {
    var logger = __logger__;

    exports.title = 'Home View TS';
    function activate() {
        logger.log('Home View Activated', null, 'home', true);
        return true;
    }
    exports.activate = activate;
})
