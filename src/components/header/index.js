"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.header', [])
   .directive('headerOverlay', ['$timeout', '$http', '$compile', 'Header', function ($timeout, $http, $compile, Header) {
      // Root view element to append items to
      var $ngHeaderOverlay;

      // Directive object
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
               $location.path(path);
            }
         }];
      }

      //<summary>
      // NG - linkage
      //</summary>
      function link(scope, element) {
         // Once initialized don't bother with constant initialization
         // we will let the component handle it after intialiation...
         // if ($ngHeaderOverlay) return;
         // Root element from view.html
         $ngHeaderOverlay = $(element);
         scope.init();
      }
   }]);

angular
   .module('js.angular.header')
   .provider("Header", function () {
      return {
         $get: ['$http', '$q', function ($http, $q) {
            var that = this;
            return {

            }
         }]
      }
   });
