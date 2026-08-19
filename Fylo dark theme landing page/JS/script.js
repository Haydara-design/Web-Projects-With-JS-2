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

let humShape = document.querySelector('.hum')
let hum = document.querySelector('.hum i')
let aside = document.querySelector('aside')

let classNames = ["fa-bars", "fa-xmark"]

hum.onclick = function () {
    if (hum.classList.contains("fa-bars")) {
        remove(humShape)
        setTimeout(() => {
            hum.classList.remove(classNames[0])
            hum.classList.add(classNames[1])
            add(humShape)
        }, 510)
        add(aside, 'fade-up', 'appear-down')
    }
    else {
        remove(humShape)
        setTimeout(() => {
            hum.classList.add(classNames[0])
            hum.classList.remove(classNames[1])
            add(humShape)
        }, 510)
        remove(aside, 'fade-up', 'appear-down')
    }
}
