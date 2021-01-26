"use strict";
/* 
 * Script Description:
 */
angular
   .module('js.angular.cards.style0', [])
   .component('cardsStyle0Overlay', (() => {
      // Component object
      return {
         restrict: 'E',
         replace: true,
         controller: controller(),
         templateUrl: 'src/components/cards/style0/view.html'
      };

      //<summary>
      // NG - controller
      //</summary>
      function controller() {
         return ['$scope', '$location', '$window', function ($scope, $location, $window) {
            let bodyEl, gridItemsContainer, docElem, support, transEndEventNames, transEndEventName, openItem;
            
            function onEndTransition( el, callback ) {
               var onEndCallbackFn = function( ev ) {
                  if( support.transitions ) {
                     if( ev.target != this ) return;
                     this.removeEventListener( transEndEventName, onEndCallbackFn );
                  }
                  if( callback && typeof callback === 'function' ) { callback.call(this); }
               };
               if( support.transitions ) {
                  el.addEventListener( transEndEventName, onEndCallbackFn );
               }
               else {
                  onEndCallbackFn();
               }
            }

            
            // Clean up
            this.$onDestroy = function () {
               $window.removeEventListener('keydown', closeOnEsc);
            }

            // Initialization on-start
            this.$onInit = function () {
               // Setup events
               $window.addEventListener('keydown', closeOnEsc);

               // Setup vars for animations
               bodyEl = document.body;
               gridItemsContainer = $('.grid')[0];
               docElem = window.document.documentElement;
               support = { transitions: Modernizr.csstransitions };
               // transition end event name
               transEndEventNames = {
                  'WebkitTransition': 'webkitTransitionEnd',
                  'MozTransition': 'transitionend',
                  'OTransition': 'oTransitionEnd',
                  'msTransition': 'MSTransitionEnd',
                  'transition': 'transitionend'
               };
               transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];
            }

            // Redirection
            $scope.redirect = function ($event, path) {
               // Apply changes to route
               $location.path(path);

               // openItem = $($event.currentTarget).parents().eq(2)[0];
               // classie.add(openItem, 'grid__item--animate');

               // setTimeout(function () { loadContent(openItem, path) }, 500);
            }

            function loadContent(item, path) {
               // add expanding element/placeholder 
               var dummy = document.createElement('div');
               dummy.className = 'placeholder';
               
               // set the width/heigth and position
               dummy.style.WebkitTransform = 'translate3d(' + (item.offsetLeft - 5) + 'px, ' + (item.offsetTop - 5) + 'px, 0px) scale3d(' + item.offsetWidth/gridItemsContainer.offsetWidth + ',' + item.offsetHeight/getViewport('y') + ',1)';
               dummy.style.transform = 'translate3d(' + (item.offsetLeft - 5) + 'px, ' + (item.offsetTop - 5) + 'px, 0px) scale3d(' + item.offsetWidth/gridItemsContainer.offsetWidth + ',' + item.offsetHeight/getViewport('y') + ',1)';
         
               // add transition class 
               classie.add(dummy, 'placeholder--trans-in');
         
               // insert it after all the grid items
               bodyEl.append(dummy);
               
               // body overlay
               classie.add(bodyEl, 'view-single');
         
               setTimeout(function () {
                  // expands the placeholder
                  dummy.style.WebkitTransform = 'translate3d(-5px, ' + (scrollY() - 5) + 'px, 0px)';
                  dummy.style.transform = 'translate3d(-5px, ' + (scrollY() - 5) + 'px, 0px)';
               }, 25);
               
               onEndTransition(dummy, function() {
                  // add transition class 
                  classie.remove(dummy, 'placeholder--trans-in');
                  classie.add(dummy, 'placeholder--trans-out');
                  // sets overflow hidden to the body and allows the switch to the content scroll
                  classie.addClass(bodyEl, 'noscroll');
                  
                  // Apply changes to route
                  // $scope.$apply(() => {$location.path(path);});
               });
            }

            function hideContent() {
               classie.remove(bodyEl, 'view-single');
               setTimeout(function () {
                  var dummy = bodyEl.querySelector('.placeholder');
                  console.log(openItem.offsetWidth)
                  dummy.style.WebkitTransform = 'translate3d(' + openItem.offsetLeft + 'px, ' + openItem.offsetTop + 'px, 0px) scale3d(' + openItem.offsetWidth/gridItemsContainer.offsetWidth + ',' + openItem.offsetHeight/getViewport('y') + ',1)';
                  dummy.style.transform = 'translate3d(' + openItem.offsetLeft + 'px, ' + openItem.offsetTop + 'px, 0px) scale3d(' + openItem.offsetWidth/gridItemsContainer.offsetWidth + ',' + openItem.offsetHeight/getViewport('y') + ',1)';
                  onEndTransition(dummy, function () {
                     bodyEl.removeChild(dummy);
                     classie.remove(openItem, 'grid__item--animate');
                  });
               }, 25);
            }

            function closeOnEsc(event) {
               var keyCode = event.keyCode || event.which;
               if( keyCode === 27 ) {
                  event.preventDefault();
                  hideContent();
               }
            }

            /**
             * gets the viewport width and height
             * based on http://responsejs.com/labs/dimensions/
             */
            function getViewport( axis ) {
               var client, inner;
               if( axis === 'x' ) {
                  client = docElem['clientWidth'];
                  inner = window['innerWidth'];
               }
               else if( axis === 'y' ) {
                  client = docElem['clientHeight'];
                  inner = window['innerHeight'];
               }

               return client < inner ? inner : client;
            }
            
            function scrollX() { return window.pageXOffset || docElem.scrollLeft; }
            function scrollY() { return window.pageYOffset || docElem.scrollTop; }

         }];
      }
   })());
