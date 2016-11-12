/* global toastr:false, _:false, ActionCable:false, $:false, sprintf: false */
(function() {
  'use strict';

  angular.module('app.core')
    .constant('lodash', _)
    .constant('ActionCable', ActionCable)
    .constant('toastr', toastr)
    .constant('sprintf', sprintf);
})();
