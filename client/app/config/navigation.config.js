/* eslint camelcase: "off" */
(function() {
  'use strict';

  angular.module('app.config')
    .config(navigation)
    .run(init);

  /** @ngInject */
  function navigation(NavigationProvider) {
    var dashboard = createItem(
      N_('Dashboard'),
      'dashboard',
      'fa fa-dashboard'
    );

    NavigationProvider.configure({
      items: {
        dashboard: dashboard,
      },
    });

    function createItem(title, state, iconClass, badgeTooltip) {
      var item = {
        title: title,
        state: state,
        iconClass: iconClass,
      };

      if (angular.isString(badgeTooltip)) {
        item.badges =  [
          {
            count: 0,
            tooltip: badgeTooltip,
          },
        ];
      }

      return item;
    }
  }

  /** @ngInject */
  function init() {
  }
})();
