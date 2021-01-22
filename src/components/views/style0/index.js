"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.view.style0', [])
   .component('viewStyle0Overlay', (() => {
      // Root view element to append items to
      var $ngViewStyle0;

      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         link: link,
         templateUrl: 'src/components/views/style0/view.html'
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
         $ngViewStyle0 = $(element);
         scope.init();
      }

      //<summary>
      // ScrollMagic library to handle some AWESOME sprite management effects.
      //</summary>
      function makeScrollMagic() {
         let frame = document.querySelector('.frame-model-666m');
         let frame_count = 15;
         let offset = 50;
         let scrollMagic;

         scrollMagic = new ScrollMagic.Controller({
            globalSceneOptions: {
               triggerHook: 0
            }
         });
         
         new ScrollMagic.Scene({
            triggerHook: 0,
            triggerElement: '.cu-car-model',
            duration: (frame_count * offset) + 'px',
            reverse: true
         })
         .setPin('.cu-car-model')
         .addTo(scrollMagic);

         // build step frame scene
         for (var i = 1, l = frame_count; i <= l; i++) {
            new ScrollMagic.Scene({
               triggerElement: '.cu-car-model',
               offset: i * offset
            })
            .setClassToggle(frame, 'frame-model-666m-' + i)
            .addTo(scrollMagic);
         }
      }
   })());
