jQuery(document).ready(function($){

    /*!
 *
 * jQuery collagePlus Plugin v0.3.2
 * https://github.com/ed-lea/jquery-collagePlus
 *
 * Copyright 2012, Ed Lea twitter.com/ed_lea
 *
 * built for http://qiip.me
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */
;(function(e){e.fn.collagePlus=function(t){function i(t,n,r,i){var o=r.padding*(t.length-1)+t.length*t[0][3],u=r.albumWidth-o,a=u/(n-o),f=o,l=n<r.albumWidth?true:false;for(var c=0;c<t.length;c++){var h=e(t[c][0]),p=Math.floor(t[c][1]*a),d=Math.floor(t[c][2]*a),v=!!(c<t.length-1);if(r.allowPartialLastRow===true&&l===true){p=t[c][1];d=t[c][2]}f+=p;if(!v&&f<r.albumWidth){if(r.allowPartialLastRow===true&&l===true){p=p}else{p=p+(r.albumWidth-f)}}var m=h.is("img")?h:h.find("img");m.width(p);if(!h.is("img")){h.width(p+t[c][3])}m.height(d);if(!h.is("img")){h.height(d+t[c][4])}s(h,v,r);m.load(function(e){return function(){if(r.effect=="default"){e.animate({opacity:"1"},{duration:r.fadeSpeed})}else{if(r.direction=="vertical"){var t=i<=10?i:10}else{var t=c<=9?c+1:10}e.addClass(r.effect);e.addClass("effect-duration-"+t)}}}(h)).each(function(){if(this.complete)e(this).trigger("load")})}}function s(e,t,n){var r={"margin-bottom":n.padding+"px","margin-right":t?n.padding+"px":"0px",display:n.display,"vertical-align":"bottom",overflow:"hidden"};return e.css(r)}function o(t){$img=e(t);var n=new Array;n["w"]=parseFloat($img.css("border-left-width"))+parseFloat($img.css("border-right-width"));n["h"]=parseFloat($img.css("border-top-width"))+parseFloat($img.css("border-bottom-width"));return n}var n={targetHeight:400,albumWidth:this.width(),padding:parseFloat(this.css("padding-left")),images:this.children(),fadeSpeed:"fast",display:"inline-block",effect:"default",direction:"vertical",allowPartialLastRow:false};var r=e.extend({},n,t);return this.each(function(){var t=0,n=[],s=1;r.images.each(function(u){var a=e(this),f=a.is("img")?a:e(this).find("img");var l=typeof f.data("width")!="undefined"?f.data("width"):f.width(),c=typeof f.data("height")!="undefined"?f.data("height"):f.height();var h=o(f);f.data("width",l);f.data("height",c);var p=Math.ceil(l/c*r.targetHeight),d=Math.ceil(r.targetHeight);n.push([this,p,d,h["w"],h["h"]]);t+=p+h["w"]+r.padding;if(t>r.albumWidth&&n.length!=0){i(n,t-r.padding,r,s);delete t;delete n;t=0;n=[];s+=1}if(r.images.length-1==u&&n.length!=0){i(n,t,r,s);delete t;delete n;t=0;n=[];s+=1}})})}})(jQuery);

$('.Collage').collagePlus(
    {
        // change this to adjust the height of the rows
        'targetHeight' : 300,
        // change this to try different effects
        // valid effets = effect-1 to effect-6
        'effect' : "effect-3",
        'allowPartialLastRow' : true,
    }
);

/*======== One Page Scroll =========*/
$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});


	 /*$(".shuffle-me").shuffleImages({
	   trigger: "imageMouseMove",     // Choose which type of trigger you want here. Available options are "imageMouseMove", "imageHover", "documentMouseMove", and "documentScroll". "imageMouseMove" will trigger when your mouse over the image and move your cursor. "imageHover" will trigger when you mouse over without moving your cursor. "documentMouseMove" will trigger when cursor is being moved anywhere on the page. "documentScroll" will trigger when you scroll the page. The default value is "imageMouseMove"
	   triggerTarget: false,          // For "imageMouseMove", and "imageHover" only, you can set which element to trigger the image shuffle when mouse over. For example, if you want a container ".main" to trigger an image shuffle instead of the image itself, put $(".main") for this option. Default value is false.
	   mouseMoveTrigger: 50,          // For "imageMouseMove" only, you can set how many pixels you have to move in order to trigger one image shuffle. The lower the faster. The default value is 50.
	   hoverTrigger: 200,             // For "imageHover" only, you can set how long you have to hover the image until it shuffles to other images. The option accepts milliseconds without unit. The default value is 200.
	   scrollTrigger: 100,          // For "documentScroll" only, you can set how many pixels you have to scroll to see the image shuffle. The default value is 100.
	   target: "> img"              // In case you have a complete HTML structure, you can set your own custom selector to your images here. The default value is "> img" which means images that are directly under the "shuffle-me" will be used to shuffle.
	 });*/


	 /*============ Contact ============*/
	     $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");

// contact page toogles
$("#contact-mapClick").click(function () {
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-map').show();
    $("#contact-mapClick").addClass("active");
});
$("#contact-carClick").click(function () {
    $('#contact-map').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-car').show();
    $("#contact-carClick").addClass("active");
});
$("#contact-busClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bus').show();
    $("#contact-busClick").addClass("active");
});
$("#contact-bikeClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-phone').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-bike').show();
    $("#contact-bikeClick").addClass("active");
});
$("#contact-phoneClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-mail').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-mailClick').removeClass("active");

    $('#contact-phone').show();
    $("#contact-phoneClick").addClass("active");
});



$("#contact-mailClick").click(function () {
    $('#contact-map').hide();
    $('#contact-car').hide();
    $('#contact-bus').hide();
    $('#contact-bike').hide();
    $('#contact-phone').hide();

    $('#contact-mapClick').removeClass("active");
    $('#contact-carClick').removeClass("active");
    $('#contact-busClick').removeClass("active");
    $('#contact-bikeClick').removeClass("active");
    $('#contact-phoneClick').removeClass("active");

    $('#contact-mail').show();
    $("#contact-mailClick").addClass("active");
});
//google map
var map;
  function initialize() {
    var mapOptions = {
      zoom: 13,
      center: new google.maps.LatLng(23.7925, 90.4078),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
  }

  google.maps.event.addDomListener(window, 'load', initialize);


});