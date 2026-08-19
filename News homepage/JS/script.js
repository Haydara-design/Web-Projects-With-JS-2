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
function bithday(year, month, day) {
    const today = new Date()
    let diffY = today.getFullYear() - year
    let diffM = today.getMonth() - month
    let diffD = today.getDate() - day

    if (diffD < 0) {
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        diffD += prevMonth.getDate()
    }

    if (diffM < 0) {
        diffY--
        diffM += 12
    }
    return [diffY, diffM, diffD]
}
say = console.log

let image = document.querySelector('.image1 img')
let shape = document.querySelector('.shape')
let overLayer = document.querySelector('.over-layer')
let lista = document.querySelector('.lista')
let xMark = document.querySelector('.lista i')

if(window.matchMedia('(max-width:450px)').matches)
    image.src="images/image-web-3-mobile.jpg"

else
    image.src="images/image-web-3-desktop.jpg"

shape.onclick = function(){
    overLayer.style.display = 'block'
    add(lista, fadeFunc = 'fade', appearFunc = 'appear', style = 'flex')
}
xMark.onclick = function(){
    setTimeout(() => {overLayer.style.display = 'none'}, 300);
    remove(lista)
}
