// // // add class navbarDark on navbar scroll
// // const header = document.querySelector('.navbar');
window.onscroll = function () {
    var top = window.scrollY;
    if (top >= 100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


