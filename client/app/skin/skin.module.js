(function() {
  'use strict';

  var text = {
    app: {
      name: 'ManageIQ Admin',
    },
    login: {
      brand: '<strong>ManageIQ</strong> Admin',
    },
  };

  angular.module('app.skin', [])
    .constant('Text', text)
    .config(configure);

  /** @ngInject */
  function configure(routerHelperProvider, exceptionHandlerProvider) {
    exceptionHandlerProvider.configure('[ManageIQ] ');
    routerHelperProvider.configure({docTitle: 'ManageIQ: '});
  }
})();
