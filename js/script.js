document.querySelector('.promo__see-autos').onclick = function () {
    document.querySelector('#cars').scrollIntoView({behavior: "smooth"});
}

let bookButtons = document.querySelectorAll('.autopark__book');

for(let i = 0; i < bookButtons.length; i++) {
    bookButtons[i].onclick = function () {
        document.querySelector('#book').scrollIntoView({behavior: "smooth"});
    }
}

document.querySelector('.booking-form__get-price').onclick =
    function () {
        isEmpty(document.querySelector('#name'));
        isEmpty(document.querySelector('#phone'));
        isEmpty(document.querySelector('#car'));
        fieldsFilled();
    }

function isEmpty (arg) {
    if (arg.value === '') {
        alert('Заполните поле ' + arg.placeholder);
    }
}

function fieldsFilled () {
    if (document.querySelector('#name').value && document.querySelector('#phone').value && document.querySelector('#car').value) {
        console.log(document.querySelector('#name').value);
        alert('Спасибо за заявку, мы свяжемся с вами в ближайшее время')
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.booking-form__img');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});