"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.cart.reserve', [])
   .component('cartReserveOverlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/cart/reserve/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', function ($scope, $location, $window) {            
            // Clean up
            this.$onDestroy = function () {

            }

            // Initialization on-start
            this.$onInit = function () {

            }

            // Redirection
            $scope.redirect = function ($event, path) {

            }

            //<summary>
            // ScrollMagic library to handle some AWESOME sprite management effects.
            //</summary>
            function makeScrollMagic() {
               let frame = document.querySelector('.frame-rim-b100');
               let frame_count = 9;
               let offset = 50;
               let scrollMagic;

               scrollMagic = new ScrollMagic.Controller({
                  globalSceneOptions: {
                     triggerHook: 0
                  }
               });
               
               new ScrollMagic.Scene({
                  triggerHook: 0,
                  triggerElement: '.cu-frame-rim',
                  duration: (frame_count * offset) + 'px',
                  reverse: true
               })
               .setPin('.cu-frame-rim')
               .addTo(scrollMagic);

               // build step frame scene
               for (var i = 1, l = frame_count; i <= l; i++) {
                  new ScrollMagic.Scene({
                     triggerElement: '.cu-frame-rim',
                     offset: i * offset
                  })
                  .setClassToggle(frame, 'frame-rim-b100-' + i)
                  .addTo(scrollMagic);
               }
            }

        }];
      }
   })());
