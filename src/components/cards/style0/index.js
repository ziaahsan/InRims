"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.cards.style0', [])
   .directive('cardsStyle0Overlay', ['$timeout', '$http', '$compile', 'CardsStyle0Overlay', function ($timeout, $http, $compile, CardsStyle0Overlay) {
      // Root view element to append items to
      var $ngCardsStyle0OverlayOverlay;

      // Directive object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         link: link,
         templateUrl: 'src/components/cards/style0/view.html'
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
         $ngCardsStyle0OverlayOverlay = $(element);
         scope.init();
      }
   }]);

angular
   .module('js.angular.cards.style0')
   .provider("CardsStyle0Overlay", function () {
      return {
         $get: ['$http', '$q', function ($http, $q) {
            var that = this;
            return {

            }
         }]
      }
   });
