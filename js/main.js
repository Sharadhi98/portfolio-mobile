$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click event on toggle */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    /*text animation*/
    var typed = new Typed(".typing",{
        strings: ["UX Designer", "Front-End Designer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    /* Owl carousel */
    // $('.owl-carousel').owlCarousel({
    //     loop:true,
    //     autoplay:true,
    //     autoplayTimeout: 3000,
    // });

    

});
