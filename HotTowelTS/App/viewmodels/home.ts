import logger = module('services/logger');

export var title = 'Home View TS';

export function activate() {
    logger.log('Home View Activated', null, 'home', true);
    return true;
}
