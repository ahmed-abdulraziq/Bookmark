
const nav = document.querySelector('nav');
const headerInfo = document.getElementById('header-info');
const headerBe = document.querySelector('header .img .be');
const headerImg = document.querySelector('header .img img');

headerInfo.style.left = "-100px";
headerImg.style.transform = "translateX(100px)";

window.onload = () => {
    nav.style.opacity = "1"
    headerInfo.style.opacity = "1"
    headerInfo.style.left = "0"
    headerBe.style.opacity = "1"
    headerImg.style.opacity = "1"
    headerImg.style.transform = "translateX(0)";
}

// (show & close) manu 
function showManu() {
    document.getElementById('manu').style.display = "flex";
}
function closeManu() {
    document.getElementById('manu').style.display = "none";
}

// show features
function show(i) {

    const featuresButton = document.querySelectorAll('.features button');
    const featuresShow = document.querySelectorAll('.features .show');

    featuresButton.forEach((e) => {e.classList.remove("actie")});
    featuresShow.forEach((e) => {e.classList.remove("flex")});
    featuresButton[i].className = "actie";
    featuresShow[i].className += " flex";
}

// show questions
function showQuestions(e) {

    const QuestionsP = document.querySelectorAll('.Questions .card p');
    const QuestionsImg = document.querySelectorAll('.Questions .card img');

    QuestionsP.forEach((e) => {e.className = "height"});
    QuestionsImg.forEach((e) => {e.classList.remove("rotate")});
    QuestionsP[e].classList.remove("height");
    QuestionsImg[e].className = "rotate";
}

// test email
document.querySelector('.contact input').addEventListener('input', (e) => {

    const contactSpan = document.querySelector('.contact span');
    const contactImg = document.querySelector('.contact img');

    if (!(/\w+\@\w+\.\w+/i.test(e.target.value))) {
        e.target.style.border = "solid 2px var(--color-Red)";
        contactSpan.style.opacity = "1";
        contactImg.style.opacity = "1";
    }else {
        e.target.style.border = "solid 2px #fff";
        contactSpan.style.opacity = "0";
        contactImg.style.opacity = "0";
    }
});

// moving element
function mov(e) {
    const contact = document.getElementById(e);
    if (window.scrollY >= contact.offsetTop - 400) {
        contact.style.opacity = "1";
        contact.style.bottom = "0";
    }
}

window.onscroll = function () {
    mov('features');
    mov('extension');
    mov('Questions');
    mov('contact');
}