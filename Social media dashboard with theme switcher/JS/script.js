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

let darkLight = document.querySelector('[type="checkbox"]')
let text = document.querySelector('.switch p')

let darkColors = {
    '--backgroundColor': 'hsl(230, 17%, 14%)',
    '--cardBackground': 'hsl(228, 28%, 20%)',
    '--ballBackground': 'hsl(228, 28%, 20%)',
    '--h1Color': 'white',
    '--pColor': 'hsl(230, 22%, 74%)',
    '--hoverCard': 'hsl(228, 26%, 27%)'
}
let lightColors = {
    '--backgroundColor': 'hsl(0, 100%, 100%)',
    '--cardBackground': 'hsl(227, 47%, 96%)',
    '--ballBackground': 'white',
    '--h1Color': 'black',
    '--pColor': 'hsl(228, 12%, 44%)',
    '--hoverCard': 'hsl(232, 33%, 91%)'
}
darkLight.onclick = function () {
    if (darkLight.checked) {
        for (let [key, value] of Object.entries(lightColors))
            document.documentElement.style.setProperty(key, value)
        text.innerText = 'Light mode'
    }
    else {
        for (let [key, value] of Object.entries(darkColors))
            document.documentElement.style.setProperty(key, value)
        text.innerText = 'Dark mode'
    }
}