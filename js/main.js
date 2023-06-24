$(document).ready(function(){
    $("ul#responsive-menu").hide();
    $("ul.responsive-sub-menu").hide();
    // $("ul.docs-submenu li.sub-item").hide();
    $(".navbar-toggle").click(function(){
        $("ul#responsive-menu").stop().slideToggle(500);
    });
    $(window).resize(function(){
        $("ul#responsive-menu").slideUp(500);
    });
    $(window).scroll(function(){
        $("ul#responsive-menu").slideUp(500);
    });
    $("ul#responsive-menu>li.menu-item>.menu-item-bar>.angle-down").click(function(){
        $("ul.responsive-sub-menu").stop().slideToggle(500);
    });
});