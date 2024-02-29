var scrollTimer = -1;
function scrollToPosition(val) {
    var container = document.getElementById('container');

    switch (val) {
        case 0:
            var y = 0;
            break;
        case 1:
            var y = document.getElementById("background").offsetTop;
            break;
        case 2:
            var y = document.getElementById("projects").offsetTop;
            break;
        case 3:
            var y = document.getElementById("cats").offsetTop;
            break;   
    } 
    container.scrollTo(0, y);
}

function scrolling() {
    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

      scrollTimer = window.setTimeout("scrollFinished()", 200);
}

function scrollFinished() {
    var container = document.getElementById('container');

    document.getElementById("navmain").style.textDecoration = "none";
    document.getElementById("navbackground").style.textDecoration = "none";
    document.getElementById("navprojects").style.textDecoration = "none";
    document.getElementById("navcats").style.textDecoration = "none";

    


    var ypos = container.scrollTop;
    if (ypos < 500) {
        document.getElementById("navmain").style.textDecoration = 'underline';
    } else if (ypos < 1500) {
        document.getElementById("navbackground").style.textDecoration = 'underline';
    } else if (ypos < 2900) {
        document.getElementById("navprojects").style.textDecoration = 'underline';
    } else {
        document.getElementById("navcats").style.textDecoration = 'underline';
    } 
}


    

    
