"use strict";
/* 
 * Reason for not going MVC:
 *    Why not MVC, this way I can setup components, and manage components in a isloated way.
 *    MVC is good and all but I prefer to setup project this way for making my life easier for smaller projects with N number of components.
 *    Everything in here can very easily be migrated to MVC structure if need be. I personally would like to call it MVDC.
 *    More on this design later...
 */
(function () {
   // on-ready do...
   angular
      .module('js.angular.app', ['ngRoute', 'ngAnimate', 'ngSanitize',
                                 'js.angular.header', 'js.angular.footer', 'js.angular.cart',
                                 'js.angular.hero.banner0',
                                 'js.angular.cards.style0', 'js.angular.view.rim'])
      .config(($routeProvider) => {
         // Routing
         $routeProvider
            .when("/", { templateUrl: "src/templates/index.html", pageTitle: 'Home'})
            .when("/rim/:id", { templateUrl: "src/templates/rim.html", pageTitle: 'Rim Model B100'})
            .when("/cart/:id", { templateUrl: "src/templates/cart.html", pageTitle: 'Reserve B100'});
      })
      .run(function ($rootScope, $location) {
         $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            // Change page pageTitle, based on Route information
            $rootScope.pageTitle = current.$$route.pageTitle;
         });
      });
})();
