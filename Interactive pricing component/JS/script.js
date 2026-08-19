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
function creat(elements, classes, innerTexts, atteributes) {
    let arr = []
    for (let i = 0; i < elements.length; i++) {
        arr.push(document.createElement(elements[i]))
        if (classes[i])
            arr[i].className = classes[i]
        if (innerTexts[i])
            arr[i].innerHTML = innerTexts[i]
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

let shape = document.querySelector('.shape')
let num = document.querySelector('.s1')
let range = document.querySelector('[type="range"]')
let month = document.querySelector('.month')
let discount = document.querySelector('.s2')
let triangles = document.querySelector('.tri')

let x = ((range.offsetWidth - 40) / 50) * range.value + 4;
triangles.style.transform = `translate(${x}px, -50%)`

shape.onclick = function () {
    shape.classList.toggle('active')
    shape.classList.contains('active') ? num.innerText = '$' + range.value * 0.75 : num.innerText = '$' + range.value;
}

range.oninput = function () {
    shape.classList.contains('active') ? num.innerText = '$' + range.value * 0.75 : num.innerText = '$' + range.value;
    let percent = range.value * 2;
    range.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${percent}%, hsl(224, 65%, 95%) ${percent}%, hsl(224, 65%, 95%) 100%)`;
    let x = ((range.offsetWidth - 40) / 50) * range.value + 4;
    triangles.style.transform = `translate(${x}px, -50%)`
};

if (window.matchMedia('(max-width:700px)').matches) {
    range.after(month)
    discount.innerText = '-25%'
}