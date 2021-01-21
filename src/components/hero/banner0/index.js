"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.hero.banner0', [])
   .directive('banner0Overlay', ['$timeout', '$http', '$compile', 'Banner0', function ($timeout, $http, $compile, Banner0) {
      // Root view element to append items to
      var $ngBanner0Overlay;

      // Directive object
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
               $location.path(path);
            }
         }];
      }

      //<summary>
      // NG - linkage
      //</summary>
      function link(scope, element) {
         // Root element from view.html
         $ngBanner0Overlay = $(element);
         scope.init();
      }
   }]);

angular
   .module('js.angular.hero.banner0')
   .provider("Banner0", function () {
      return {
         $get: ['$http', '$q', function ($http, $q) {
            var that = this;
            return {

            }
         }]
      }
   });
