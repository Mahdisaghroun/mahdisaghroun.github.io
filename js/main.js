$(function(){
    'use strict';
    var upperHeight=$('.upper-bar').innerHeight();
    var navHeight=$('.navbar').innerHeight();
    var windowHeight=$(window).height();
    $('.slider, .carousel-item').height(windowHeight-(navHeight+upperHeight));



});