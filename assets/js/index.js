

function topfn(){

    var topHeader = document.querySelector('.top-header');
        var timer = null;
        timer = setInterval(function () {
            topHeader.style.opacity -= 0.1;
            if (topHeader.style.opacity<0){
                topHeader.style.display="none";
                clearInterval(timer);
            }
        },50);
    }
