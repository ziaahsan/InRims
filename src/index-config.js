"use strict";
/* 
 * Reason for not going MVC:
 *    Why not MVC, this way I can setup components, and manage components in a isloated way.
 *    MVC is good and all but I prefer to setup project this way for making my life easier for smaller projects with N number of components.
 *    Everything in here can very easily be migrated to MVC/Angular structure if need be.
 *    https://docs.angularjs.org/guide/component#component-based-application-architecture
 */
(function () {
   // on-ready do...
   angular
      .module('js.angular.app', ['ngRoute', 'ngAnimate', 'ngSanitize'])
      .constant('appName', 'InRims')
      .config(($routeProvider) => {
         // Routing
         $routeProvider
            .when("/", { templateUrl: "src/view.html", partialURI: 'root', pageTitle: 'Home' })
            .when("/details/:id", { templateUrl: "src/view.html", partialURI: 'details', pageTitle: 'Rim Model B100' })
            .when("/cart/:id", { templateUrl: "src/view.html", partialURI: 'cart', pageTitle: 'Reserve B100' });
      })
      .run(($rootScope, $location) => {
         $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            // Change page pageTitle, based on Route information
            $rootScope.rootData = {
               websiteTitle: 'InRims',
               pageTitle: current.$$route.pageTitle,
               partialURI: current.$$route.partialURI
            };
         });
      });
})();
