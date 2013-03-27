import logger = module('services/logger');

export var title = 'Details View TS';

export function activate() {
    logger.log('Details View Activated', null, 'details', true);
    return true;
}
