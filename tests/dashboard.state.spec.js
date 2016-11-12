describe('Dashboard', function() {
  beforeEach(function() {
    module('app.states', 'app.config', 'gettext', bard.fakeToastr);
    bard.inject('$location', '$rootScope', '$state', '$templateCache', 'Session', '$httpBackend', '$q');
  });

  beforeEach(function() {
    var d = new Date();
    d.setMinutes(d.getMinutes() + 30);
    d = d.toISOString();
    d = d.substring(0, d.indexOf('.'));

    Session.create({
      auth_token: 'b10ee568ac7b5d4efbc09a6b62cb99b8',
    });
    $httpBackend.whenGET('').respond(200);
  });

  describe('route', function() {
    var views = {
      dashboard: 'app/states/dashboard/dashboard.html'
    };

    beforeEach(function() {
      bard.inject('$location', '$rootScope', '$state', '$templateCache');
    });

    it('should work with $state.go', function() {
      $state.go('dashboard');
      expect($state.is('dashboard'));
    });
  });

  describe('controller', function() {
    var controller;
    var resolveServicesWithDefinedServiceIds = {};
    var retiredServices = {};
    var resolveNonRetiredServices = {};
    var expiringServices = {};
    var resolveAllRequests = [];

    beforeEach(function() {
      bard.inject('$controller', '$log', '$state', '$rootScope');

      var controllerResolves = {
        definedServiceIdsServices: resolveServicesWithDefinedServiceIds,
        retiredServices: retiredServices,
        nonRetiredServices: resolveNonRetiredServices,
        expiringServices: expiringServices,
        allRequests: resolveAllRequests
      };

      controller = $controller($state.get('dashboard').controller, controllerResolves);
    });

    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });
  });
});
