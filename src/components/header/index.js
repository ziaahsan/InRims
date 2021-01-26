"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.header', [])
   .component('headerOverlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/header/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', function ($scope, $location) {
            // Clean up
             this.$onDestroy = function () {

            }

            // Initialization on-start
            this.$onInit = function () {

            }

            // Redirection
            $scope.redirect = function ($event, path) {

            }
         }];
      }
   })());
