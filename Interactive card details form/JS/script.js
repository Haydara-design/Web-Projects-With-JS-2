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
say = console.log

let btn = document.querySelector('button')
let inputs = document.querySelectorAll('input')
let num = document.querySelector('.text p')
let spans = document.querySelectorAll('.text span')
let numCvv = document.querySelector('.num-cvv')
let info = document.querySelector('.info')

let under16 = errors('error', "This Can't be under 16 charcters")
let empty = []
for (let i = 0; i < 3; i++)
    empty.push(errors('error', "This Can't be empty"))


btn.onclick = function (e) {
    e.preventDefault()
    spans[0].innerText = inputs[0].value
    spans[1].innerText = `${inputs[2].value}/${inputs[3].value}`
    num.innerText = inputs[1].value
    numCvv.innerText = inputs[4].value

    if (inputs[2].value === '' || inputs[3].value === '') {
        add(empty[1])
        info.style.marginBottom = '0px'
        empty[1].style.gridColumnStart = 1
        info.appendChild(empty[1])
    }
    else {
        remove(empty[1])
        info.style.marginBottom = '20px'
    }
    inputs[2].style.outlineColor = inputs[2].value === '' ? 'hsl(0, 100%, 66%)' : 'hsl(278, 94%, 30%)';
    inputs[2].style.borderColor = inputs[2].value === '' ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';

    inputs[3].style.outlineColor = inputs[3].value === '' ? 'hsl(0, 100%, 66%)' : 'hsl(278, 94%, 30%)';
    inputs[3].style.borderColor = inputs[3].value === '' ? 'hsl(0, 100%, 66%)' : 'hsl(270, 3%, 87%)';
}
inputs[1].oninput = function () {
    inputs[1].value = inputs[1].value.replace(/[^0-9\s]/gi, '')
    switch (inputs[1].value.replaceAll(' ', '').length) {
        case 4:
            inputs[1].value = inputs[1].value + ' '
            break
        case 8:
            inputs[1].value = inputs[1].value + ' '
            break
        case 12:
            inputs[1].value = inputs[1].value + ' '
            break
    }
}
inputs[1].onblur = function () {
    if (inputs[1].value.replaceAll(' ', '').length < 16) {
        add(under16)
        inputs[1].style.marginBottom = '0px'
        inputs[1].after(under16)
        this.style.outlineColor = 'hsl(0, 100%, 66%)'
        this.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        remove(under16)
        inputs[1].style.marginBottom = '20px'
        this.style.outlineColor = 'hsl(278, 94%, 30%)'
        this.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}

inputs[0].onblur = function () {
    if (this.value === '') {
        add(empty[0])
        this.style.marginBottom = '0px'
        this.after(empty[0])
        this.style.outlineColor = 'hsl(0, 100%, 66%)'
        this.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        remove(empty[0])
        this.style.marginBottom = '20px'
        this.style.outlineColor = 'hsl(278, 94%, 30%)'
        this.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}
inputs[4].onblur = function () {
    if (this.value === '') {
        add(empty[2])
        info.style.marginBottom = '0px'
        empty[2].style.gridColumnStart = 2
        info.appendChild(empty[2])
        this.style.outlineColor = 'hsl(0, 100%, 66%)'
        this.style.borderColor = 'hsl(0, 100%, 66%)'
    }
    else {
        remove(empty[2])
        info.style.marginBottom = '20px'
        this.style.outlineColor = 'hsl(278, 94%, 30%)'
        this.style.borderColor = 'hsl(270, 3%, 87%)'
    }
}
inputs[2].oninput = function () {
    if (this.value.length >= 2)
        this.value = this.value.slice(0, 2)
}
inputs[3].oninput = function () {
    if (this.value.length >= 2)
        this.value = this.value.slice(0, 2)
}
inputs[4].oninput = function () {
    if (this.value.length >= 3)
        this.value = this.value.slice(0, 3)
}