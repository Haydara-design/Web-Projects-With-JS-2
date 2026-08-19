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
function cr(ele, cla, inner, att) {
    let r = document.createElement(ele)
    r.innerHTML = inner
    if (cla)
        r.className = cla
    if (att)
        for (let [key, value] of Object.entries(att))
            r.setAttribute(key, value)
    return r
}
function creat(elements, classes, innerHTMLs, atteributes) {
    let arr = []
    for (let i = 0; i < elements.length; i++) {
        arr.push(document.createElement(elements[i]))
        if (classes[i])
            arr[i].className = classes[i]
        if (innerHTMLs[i])
            arr[i].innerHTML = innerHTMLs[i]
        if (atteributes[i])
            for (let [key, value] of Object.entries(atteributes[i]))
                arr[i].setAttribute(key, value)
    }
    return arr
}
function appened(...lista) {
    for (let k = 0; k < lista.length; k++)
        for (let i = 0; i < lista[k][1].length; i++)
            lista[k][0].appendChild(lista[k][1][i])
    return lista[0][0]
}
say = console.log
let btnLeft = document.querySelector('.buttons button:first-child')
let btnRight = document.querySelector('.buttons button:last-child')
let img = document.querySelector('img')

let texts = document.querySelectorAll('p')

btnLeft.disabled = true

let inner = [
    [`“ I’ve been interested in coding for a while but never taken the jump, until now. 
I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
excited about the future. ”`,
        `<p><span>Tanya Sinclair </span> UX Engineer</p>`],
    [`“ If you want to lay the best foundation possible I’d recommend taking this course. 
The depth the instructors go into is incredible. I now feel so confident about 
starting up as a professional developer. ”`,
        `<p><span>John Tarkpor </span> Junior Front-end Developer</p>`]]

let srcs = ["images/image-tanya.jpg", "images/image-john.jpg"]

function disappear(btn1, btn2, src, inner) {
    texts.forEach(ele => { ele.style.opacity = 0 })

    for (let i = 0; i < 2; i++)
        setTimeout(() => { texts[i].innerHTML = inner[i], texts[i].style.opacity = 1 }, 510)

    img.style.opacity = 0
    setTimeout(() => { img.src = src, img.style.opacity = 1 }, 510)

    btn1.disabled = true
    btn2.disabled = false
}


btnLeft.onclick = function () {
    disappear(btnLeft, btnRight, srcs[0], inner[0])
}
btnRight.onclick = function () {
    disappear(btnRight, btnLeft, srcs[1], inner[1])
}