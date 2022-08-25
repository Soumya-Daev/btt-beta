let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let logiFormClose = document.querySelector('#form-close');

loginBtn.addEventListener('click', () => {
    loginForm.style.transition = '1s';
    loginForm.style.transform = 'translateY(200%)';
});

logiFormClose.addEventListener('click', () => {
    loginForm.style.transition = '1s';
    loginForm.style.transform = 'translateY(-200%)';
});

$(document).ready(function(){
    jQuery('#camera_wrap').camera({
        loader: false,
        pagination: false ,
        minHeight: '444',
        thumbnails: false,
        height: '48.375%',
        caption: true,
        navigation: true,
        fx: 'mosaic'
    });
    /*carousel*/
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            document.getElementById('google_translate_element').style.display = "none";
        }else{
            $('.navbar').removeClass("sticky");
            document.getElementById('google_translate_element').style.display = "block";
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

function addImages(){
    for (var i = 1; i <= 9; i++) {
        var img = document.createElement('img');
        img.src = 'images/' + i + '.jpg';
        document.getElementById('images').appendChild(img);
    }
}

let audioBGM = new Audio("home_BGM.mp3");
audioBGM.volume = 0.6;
audioBGM.play();
setInterval(() => {
    if(audioBGM.ended || audioBGM.currentTime === 0 || audioBGM.paused){
        audioBGM = new Audio("home_BGM.mp3");
        audioBGM.volume = 0.6;
        audioBGM.play();
    }
}, 1000);

function redirect_lr(place_name) 
{
    // alert("place_name: " + place_name);
    localStorage["place"] = place_name;
    window.location.href = "learnmore.html";
}
