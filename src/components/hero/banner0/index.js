"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.hero.banner0', [])
   .component('heroBanner0Overlay', (() => {
      // Root view element to append items to
      var $ngHeroBanner0Overlay;

      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         link: link,
         templateUrl: 'src/components/hero/banner0/view.html'
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
         $ngHeroBanner0Overlay = $(element);
         scope.init();
      }
   })());
