let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;

let btnPrevious = document.getElementById('btnPrevious');
let btnNext = document.getElementById('btnNext');
let switches = document.getElementById('switches');

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length) % slides.length; // данная формула учитывает циклический сдвиг при движении справа на лево и наоборот
    slides[currentSlide].className = 'slide showing';
}


function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

btnPrevious.onclick = function() {
    nextSlide();
}

btnNext.onclick = function() {
    previousSlide();
}

switches.onclick = function(e) {
    if (e.target.tagName == 'LI') {
        slides[currentSlide].className = 'slide';
        currentSlide = e.target.id; // по id элемента li присваиваем в переменную currentSlide и выводим или скрываем по индексу массива
        slides[currentSlide].className = 'slide showing';
    }
}
