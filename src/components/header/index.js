"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.header', [])
   .component('headerOverlay', (() => {
      // Root view element to append items to
      var $ngHeaderOverlay;

      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         link: link,
         templateUrl: 'src/components/header/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', function ($scope, $location) {
            // Clean up
            $scope.$on('$destroy', function () {

            });

            // Initialization on-start
            $scope.init = function () {

            }

            // Redirection
            $scope.redirect = function (path) {

            }
         }];
      }

      //<summary>
      // NG - linkage
      //</summary>
      function link(scope, element) {
         // Root element from view.html
         $ngHeaderOverlay = $(element);
         scope.init();
      }
   })());
