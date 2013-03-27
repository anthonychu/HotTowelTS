/// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />

import system = module("durandal/system");


export function log(message: string, data: any, source: string, showToast: bool) {
    logIt(message, data, source, showToast, 'info');
}

export function logError(message: string, data: any, source: string, showToast: bool) {
    logIt(message, data, source, showToast, 'error');
}

function logIt(message: string, data: any, source: string, showToast: bool, toastType: string) {
    source = source ? '[' + source + '] ' : '';
    if (data) {
        system.log(source, message, data);
    } else {
        system.log(source, message);
    }
    if (showToast) {
        if (toastType === 'error') {
            toastr.error(message);
        } else {
            toastr.info(message);
        }

    }

}

