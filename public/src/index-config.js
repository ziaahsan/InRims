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
      .module('js.angular.app', ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.router'])
      .constant('appInfo', {
         name: 'InRims',
         jsonDataURL: getDataURL(),
         serverIP: '54.209.67.195',
      })
      .config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
         // Stating Instead of Routing
         $stateProvider
            .state('index', {
               url: "/",
               views: {
                  'header': 'headerOverlay',
                  'hero': 'heroOverlay',
                  'itemLists': 'itemListsOverlay',
                  'footer': 'footerOverlay',
               },
               data: { pageTitle: 'Home' },
            })
            .state('index.details', {
               url: "details/:id",
               views: {
                  '!$default.modal': 'itemDetailsOverlay'
               },
               data: { pageTitle: 'Details', type: 'modal' }
            })
            .state('index.cart', {
               url: "cart/:id",
               views: {
                  '!$default.modal': 'cartOverlay'
               },
               data: { pageTitle: 'Cart', type: 'modal' }
            });

      }])
      .run((appInfo, $rootScope, $transitions) => {
         $rootScope.pageTitle = appInfo.name;
         $rootScope.type = 'page';

         $transitions.onSuccess({}, ($transition$) => {
            $rootScope.pageTitle = ($transition$.to().data && $transition$.to().data.pageTitle) ? `${appInfo.name} - ${$transition$.to().data.pageTitle}` : appInfo.name;
            $rootScope.type = ($transition$.to().data && $transition$.to().data.type) ? $transition$.to().data.type : 'page';
         });
      });
})();
