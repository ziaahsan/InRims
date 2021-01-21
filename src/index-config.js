"use strict";
/* 
 * Reason for not going MVC:
 *    Why not MVC, this way I can setup component wise, and manage components in a way.
 *    MVC is good and all but I prefer to setup project this way for making my life easier for smaller projects with N number of components.
 *    Everything in here can very easily be migrated to MVC structure if need be. I personally would like to call it MVDC.
 *    More on this design later...
 */
(function () {
   // on-ready do...
   angular
      .module('js.angular.app', ['ngRoute', 'ngAnimate',
                                 'js.angular.header', 'js.angular.hero.banner0', 'js.angular.cards.style0', 'js.angular.view.style0'])
      .config(($routeProvider) => {
         // Routing
         $routeProvider
            .when("/", { templateUrl: "src/templates/index.html", pageTitle: 'Home'})
            .when("/view/:id", { templateUrl: "src/templates/view.html", pageTitle: 'View - '});
      })
      .run(function ($rootScope, $location) {
         $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            // Change page pageTitle, based on Route information
            $rootScope.pageTitle = current.$$route.pageTitle;
         });
      });
})();
