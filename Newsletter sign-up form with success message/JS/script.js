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
say = console.log

let regex = /\w+@\w+\.\w+/g
let input = document.querySelector('[type="text"]')
let label = document.querySelector('label')
let center = document.querySelector('.center')
let oldContainer = document.querySelector('.container')

// Error
let pError = document.createElement('p')
pError.innerText = 'Valid email required'
pError.classList.add('error')
// New Container

let newContainer = document.createElement('div')
newContainer.classList.add('cont')

let imgCont = document.createElement('div')
let img = document.createElement('img')
img.src = "images/icon-success.svg"
img.style.width = '45px'
imgCont.appendChild(img)
newContainer.appendChild(imgCont)

let h1 = document.createElement('h1')
h1.innerText = 'Thanks for subscribing!'
newContainer.appendChild(h1)

let p = document.createElement('p')
newContainer.appendChild(p)

let button = document.createElement('button')
button.innerText = 'Dismiss message'
newContainer.appendChild(button)

document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    if (!input.value.match(regex)) {
        add(pError)
        label.appendChild(pError)
        input.classList.remove('input-right')
        input.classList.add('input-error')
    }
    else {
        remove(pError)
        input.classList.remove('input-error')
        input.classList.add('input-right')
        p.innerHTML = `A confirmation email has been sent to <span>${input.value}</span> . Please open it and click the button inside to confirm your subscription.`
        add(newContainer, 'fade-up', 'appear-down', 'block')
        remove(oldContainer)
        document.body.appendChild(newContainer)
    }

}
button.onclick = function () {
    remove(newContainer, 'fade-up', 'appear-down')
    add(oldContainer, fadeFunc = 'fade', appearFunc = 'appear', style = 'flex')

}