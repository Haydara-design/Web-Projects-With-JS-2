function add(arg, fadeFunc = 'fade', appearFunc = 'appear', style = 'block') {
    arg.style.display = style
    arg.classList.remove(fadeFunc)
    arg.classList.add(appearFunc)
}
function remove(arg, fadeFunc = 'fade', appearFunc = 'appear') {
    arg.classList.remove(appearFunc)
    arg.classList.add(fadeFunc)
    setTimeout(() => { arg.style.display = 'none' }, 500);
}
function errors(class_, innerText) {
    let er = document.createElement('p')
    er.classList.add(class_)
    er.innerText = innerText
    return er
}
function dotSplit(arg) {
    let parts = arg.value.split('.')
    if (parts.length > 2)
        arg.value = parts[0] + '.' + parts.slice(1).join()
}
say = console.log

let marks = document.querySelectorAll('.mark')
let inputs = document.querySelectorAll('.mark input')
let test = document.querySelectorAll('.test')
let butns = document.querySelectorAll('button')

let tips = document.querySelectorAll('.grid p:not(.cont p)')
let customTip = document.querySelector('.cont')
let back = document.querySelector('.back')
let shape = document.querySelector('.shape')
let customInput = document.querySelector('.cont input')

let prices = document.querySelectorAll('.p1 span')

let value = 0

inputs.forEach((ele, ind) => {
    ele.onfocus = function () {
        marks[ind].style.borderColor = 'hsl(172, 67%, 45%)'
    }
});
inputs.forEach((ele, ind) => {
    ele.onblur = function () {
        marks[ind].style.borderColor = 'transparent'
    }
});

let pErrors = [errors('error', `can't be zero`), errors('error', `can't be zero`)]

butns[0].onclick = function () {
    inputs.forEach((ele, ind) => {
        ele.value === '' ?
            (add(pErrors[ind]), test[ind].appendChild(pErrors[ind]),
                marks[ind].style.borderColor = 'hsl(0, 100%, 66%)') :
            (remove(pErrors[ind]), marks[ind].style.borderColor = 'transparent');
    })
    if (inputs[0].value !== '' && inputs[1].value !== '') {
        prices[0].innerText = (parseFloat(inputs[0].value) * value / parseInt(inputs[1].value)).toFixed(2)
        prices[1].innerText = (parseFloat(inputs[0].value) / 5 + Number(prices[0].innerText)).toFixed(2)
    }
}
butns[1].onclick = function () {
    if (shape.classList.contains('rot')) {
        shape.style.transform = 'rotateY(0deg)'
        shape.classList.remove('rot')
    }
    prices.forEach(ele => ele.innerText = '0.00')
    for (let ind = 0; ind < 2; ind++) {
        remove(pErrors[ind])
        marks[ind].style.borderColor = 'transparent'
    }
    value = 0;
    customInput.value = '';
    tips.forEach(ele => ele.classList.remove('active'))
    inputs.forEach(ele => ele.value = '')
}

tips.forEach((ele) => {
    ele.onclick = function () {
        tips.forEach(e => { e.classList.remove('active') })
        this.classList.add('active')
        value = parseFloat(this.innerText) / 100;
        say(value)
        if (shape.classList.contains('rot')) {
            shape.style.transform = 'rotateY(0deg)'
            shape.classList.remove('rot')
        }
    }
})

customTip.onclick = function () {
    shape.style.transform = 'rotateY(-180deg)'
    shape.classList.add('rot')
    back.style.borderColor = 'hsl(172, 67%, 45%)'
    customInput.focus()
    tips.forEach(ele => ele.classList.remove('active'))
}

customInput.oninput = function () {
    this.value = this.value.replace(/[^0-9.]/gi, '')
    value = parseFloat(customInput.value) / 100;
    dotSplit(this)
}
inputs[0].oninput = function () {
    this.value = this.value.replace(/[^0-9.]/gi, '')
    dotSplit(this)

}
inputs[1].oninput = function () {
    this.value = this.value.replace(/[^0-9]/gi, '')
}