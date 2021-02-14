"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.app')
   .component('headerOverlay', (() => {
      // Component object
      return {
         controller: controller(),
         templateUrl: 'src/components/header/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['appInfo', '$scope', '$location', '$window', '$http', function (appInfo, $scope, $location, $window, $http) {
            var ctrl = this;

            // Setup items
            ctrl.navItems = '';

            // App name
            ctrl.appName = appInfo.name;

            // Clean up
            ctrl.$onDestroy = function () {

            }

            // Initialization on-start
            ctrl.$onInit = function () {
               loadRimJson();
            }

           // Redirection
           $scope.redirect = function (...args) {
               let uri = `${args[1]}/${args[2]}`;
               $location.path(uri);
            }

            // @todo: For now fetch all just like lists, but in general this is not the case
             function loadRimJson () {
               $http.get(appInfo.jsonDataURL).then(results => {
                  ctrl.navItems = results.data;
               })
            }
         }];
      }
   })());
