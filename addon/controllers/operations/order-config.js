import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class OperationsOrderConfigController extends Controller {
    @tracked tab = 'details';
    @tracked config;
    @tracked context;
    @tracked contextModel;
    queryParams = ['tab', 'config', 'context', 'contextModel'];

    /**
     * Handle tab change.
     *
     * @param {string} tab
     * @memberof OperationsOrderConfigController
     */
    @action onTabChanged(tab) {
        this.tab = tab;
    }

    /**
     * Handle order config change.
     *
     * @param {*} config
     * @memberof OperationsOrderConfigController
     */
    @action onConfigChanged(config) {
        this.config = config.id;
    }

    /**
     * Handle order config change.
     *
     * @param {*} config
     * @memberof OperationsOrderConfigController
     */
    @action onContextChanged(context, contextModel) {
        this.context = context;
        this.contextModel = contextModel;
    }
}
