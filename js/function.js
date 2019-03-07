$(function(){
    var page=0;
    var lastPage =parseInt($("#slide img").length-1);
        $("#slide img").css("display","none");
        $("#slide img").eq(page).css("display","block");
    function changePage(){
        $("#slide img").fadeOut(1000);
        $("#slide img").eq(page).fadeIn(1000);
    };
    var Timer;
    function startTimer(){
    Timer =setInterval(function(){
                if(page === lastPage){
                            page = 0;
                            changePage();
                    }else{
                            page ++;
                            changePage();
                };
            },5000);
    }
    function stopTimer(){
    clearInterval(Timer);
    }
    startTimer();
    
    var scrollAnimationElm = document.querySelectorAll('.sa');
    var scrollAnimationFunc = function() {
    for(var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 200;
        var elm = scrollAnimationElm[i];
        var showPos = 0;
        if(elm.dataset.sa_margin != null) {
        triggerMargin = parseInt(elm.dataset.sa_margin);
        }
        if(elm.dataset.sa_trigger) {
        showPos = document.querySelector(elm.dataset.sa_trigger).getBoundingClientRect().top + triggerMargin;
        } else {
        showPos = elm.getBoundingClientRect().top + triggerMargin;
        }
        if (window.innerHeight > showPos) {
        elm.classList.add('show');
        }
    }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});