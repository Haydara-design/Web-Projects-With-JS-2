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

let btn = document.querySelector('header button')
let divs = document.querySelectorAll('.noti')
let circle = document.querySelectorAll('.circle')

btn.onclick = function(){
    divs.forEach(ele=>{
        ele.classList.add('white')
    })
    circle.forEach(ele=>{ele.style.display = 'none'})
}