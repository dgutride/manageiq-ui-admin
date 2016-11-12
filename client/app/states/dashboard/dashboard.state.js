(function() {
  'use strict';

  angular.module('app.states')
    .run(appRun);

  /** @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return {
      'dashboard': {
        parent: 'application',
        url: '/',
        templateUrl: 'app/states/dashboard/dashboard.html',
        controller: StateController,
        controllerAs: 'vm',
        title: N_('Dashboard'),
        data: {
          requireUser: true,
        },
        resolve: {
        },
      },
    };
  }

  /** @ngInject */
  // TODO API in question: /api/requests
  // TODO with filterValues = ['type=ServiceReconfigureRequest', 'or type=ServiceTemplateProvisionRequest', 'approval_state=pending_approval'];
  // TODO API OR-ing bug/"design limitation" has forced an implementation change in how we gather count data for Requests
  // TODO One API call would now be split into two - one for ServiceTemplateProvisionRequest and other for ServiceReconfigureRequest

  function resolveAllRequests(CollectionsApi, $state) {
    if (!$state.navFeatures.requests.show) {
      return undefined;
    }

    return [];
  }

  /** @ngInject */
  function StateController() {
    var vm = this;
  }
})();
