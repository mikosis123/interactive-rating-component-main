'use strict';
var rate;
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

function initApp() {
    addStars();

}


const addStars = function() {
    const stars = document.querySelectorAll('.numbers');
    const starsCont = document.querySelector('.footer_number');
    const result = document.querySelector('.selection');
    starsCont.addEventListener('click', function(e) {
        const clicked = e.target.closest('button');
        if (!clicked) return;
        rate = clicked.textContent;

        stars.forEach(btn => btn.style.removeProperty('background-color'));
        result.innerHTML = `<p id="answerStar" class="answer__stars">You selected ${rate} out of 5</p>`;
        clicked.style.backgroundColor = 'hsl(217, 12%, 63%)';
        clicked.style.color = 'hsl(0, 0%, 100%)';

    });
};



var myButton = document.getElementById("buttton");
var thanky = document.getElementById("tankyoucardbottom");
var mainwrap = document.getElementById("mainbody_wraper");
const changeToblock = function() {
    thanky.style.display = "block";
};
const changeTonone = function() {
    mainwrap.style.display = "none";
};
myButton.addEventListener("click", changeToblock);
myButton.addEventListener("click", changeTonone);