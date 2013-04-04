/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />

import system = module('durandal/system');
import _router = module('durandal/plugins/router');
import logger = module('services/logger');

declare var exports; // so that we can refer to this module later (might not be such a good idea)

export var router = _router;

export function activate() {
    return boot();
}

function boot() {
    router.mapNav('home', null, null);
    router.mapNav('details', null, null);
    log('Hot Towel SPA Loaded!', null, true);
    return router.activate('home');
}

function log(msg, data, showToast) {
    logger.log(msg, data, system.getModuleId(exports), showToast);
}
