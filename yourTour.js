
const submit = document.querySelector('.button-submit')
const form = document.querySelector('.form')
const reset = document.querySelector('.button-reset')
const select = document.querySelector('#select')
const header = document.querySelector('.header__navigation')
const logo = document.querySelector('.logo')
const logoBlack = document.querySelector('.black-logo')
const tel = document.getElementById('tel')

function mask(event) {
    event.keyCode && (keyCode = event.keyCode);
    let pos = this.selectionStart;
    if (pos < 3) event.preventDefault()
    let matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        newValue = matrix.replace(/[_\d]/g, function (a) {
            return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
        });
    i = newValue.indexOf("_");
    if (i != -1) {
        i < 5 && (i = 3);
        newValue = newValue.slice(0, i);
    }
    let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
            return "\\d{1," + a.length + "}";
        }).replace(/[+()]/g, "\\$&");
    reg = new RegExp("^" + reg + "$");
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
    if (event.type == "blur" && this.value.length < 5) this.value = "";
}

tel.addEventListener("input", mask, false);
tel.addEventListener("focus", mask, false);
tel.addEventListener("blur", mask, false);
tel.addEventListener("keydown", mask, false);


submit.addEventListener('click', function (e) {
    e.preventDefault()
})

reset.addEventListener('click', function () {
    form.reset()
})

window.addEventListener('scroll', function () {
    if (window.scrollY > 450) {
        header.classList.add('header_fixed')
        logo.classList.add('black-logo')
        logoBlack.classList.add('logo')
        logoBlack.classList.remove('black-logo')
    }
    else {
        header.classList.remove('header_fixed')
        logo.classList.remove('black-logo')
        logoBlack.classList.remove('logo')
        logoBlack.classList.add('black-logo')
    }
})

