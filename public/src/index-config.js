"use strict";
/* 
 * Reason for not going MVC:
 *    Why not MVC, this way I can setup components, and manage components in a isloated way.
 *    MVC is good and all but I prefer to setup project this way for making my life easier for smaller projects with N number of components.
 *    Everything in here can very easily be migrated to MVC/Angular structure if need be.
 *    https://docs.angularjs.org/guide/component#component-based-application-architecture
 *    https://docs.angularjs.org/guide/component-router (@Router LifeCycle Hooks)
 */
(function () {

   // Setup URL for getting data...
   // @todo: Move this to database if needed but for sake of AGILE this is good
   function getDataURL() {
      return `${window.location.protocol}//${window.location.host}:3001/rims/`
   }

   // on-ready do...
   angular
      .module('js.angular.app', ['ngRoute', 'ngAnimate', 'ngSanitize'])
      .constant('appInfo', {
         name: 'InRims',
         jsonDataURL: getDataURL(),
         serverIP: '54.209.67.195',
      })
      .config(['$routeProvider', function ($routeProvider) {
         // Routing
         $routeProvider
            .when("/", { templateUrl: "src/view.html", partialURI: 'root', pageTitle: 'Home' })
            .when("/details/:id", { templateUrl: "src/view.html", partialURI: 'details', pageTitle: 'Rim Model B100' })
            .when("/cart/:id", { templateUrl: "src/view.html", partialURI: 'cart', pageTitle: 'Reserve B100' });
      }])
      .run(($rootScope, $location) => {
         $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            // Change page pageTitle, based on Route information
            $rootScope.rootData = {
               pageTitle: current.$$route.pageTitle,
               partialURI: current.$$route.partialURI
            };
         });
      });
})();
