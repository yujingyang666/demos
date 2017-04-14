define(['jquery','app/goTop','app/water','app/carousel'],function($,GoTop,Water,Carousel){
    GoTop.init()  //回到顶部
    Water.init($('.pb-content')) //瀑布流
    Carousel.init($('.carousel')) //轮播
})