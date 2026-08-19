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

let aside = document.querySelector('aside')
let overLayer = document.querySelector('.over-layer')

let shape = document.querySelector('.shape')
let xMark = document.querySelector('.x1')
let allImg = document.querySelectorAll('img:not(.logo *, .icons *, .grid-down *, header *)');


shape.onclick = function () {
    add(aside)
    overLayer.style.display = 'block'
    setTimeout(() => { overLayer.style.opacity = '0.5' }, 50);

}
xMark.onclick = function () {
    remove(aside)
    setTimeout(() => { overLayer.style.display = 'none' }, 500);
    overLayer.style.opacity = '0'
}
window.matchMedia('(max-width: 950px)').addEventListener('change', (e) => {
    if (e.matches) {
        allImg.forEach(ele => {
            if (ele.src.includes('desktop')) {
                ele.src = ele.src.replace('desktop', 'mobile');
            }
        });
    } else {
        allImg.forEach(ele => {
            if (ele.src.includes('mobile')) {
                ele.src = ele.src.replace('mobile', 'desktop');
            }
        });
    }
});