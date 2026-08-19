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

let images = document.querySelectorAll('.image2 img')
let icons = document.querySelector('.icons')
let footerUl = document.querySelector('footer .up ul')
let hum = document.querySelector('.hum')
let aside = document.querySelector('aside')
let xMark = document.querySelector('.x-mark img')

say(images)
let diskSrc = ["images/desktop/image-deep-earth.jpg","images/desktop/image-night-arcade.jpg","images/desktop/image-soccer-team.jpg",
    "images/desktop/image-grid.jpg","images/desktop/image-from-above.jpg","images/desktop/image-pocket-borealis.jpg",
    "images/desktop/image-curiosity.jpg","images/desktop/image-fisheye.jpg"]

let mobSrc = []
diskSrc.forEach(ele=>mobSrc.push(ele.replace('desktop','mobile')))


hum.onclick = function(){
    add(aside)
}
xMark.onclick = function(){
    remove(aside)
}


if(window.matchMedia('(max-width:960px)').matches){
    footerUl.after(icons)
}
if(window.matchMedia('(max-width:650px)').matches){
    say(55)
    images.forEach((ele,ind)=>{ele.src = mobSrc[ind]})
}