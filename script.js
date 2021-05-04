const hamburger = document.getElementById('hamburger');
const navHorizontal = document.getElementById('navbar');
const close = document.getElementById('close');


hamburger.addEventListener('click',() => {
    navHorizontal.classList.add('show');
    navHorizontal.classList.remove('hide');

});

close.addEventListener('click',() => {
    navHorizontal.classList.add('hide');
    navHorizontal.classList.remove('show');
})
