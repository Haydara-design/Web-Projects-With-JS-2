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

let inputsDiv = document.querySelector('.inputs')
let inputs = document.querySelectorAll('input')
let labels = document.querySelectorAll('label')
let btn = document.querySelector('button')
let spans = document.querySelectorAll('.data span')

// Error
let pError = []
for (let i = 0; i < 3; i++) {
    pError.push(document.createElement('p'))
    pError[i].classList.add('error')
    pError[i].innerText = 'This field is required'
    pError[i].style.gridColumn = `${i + 1}`
}


btn.onclick = function () {
    inputs.forEach((ele, ind) => {
        if (ele.value === '') {
            add(pError[ind])
            inputsDiv.appendChild(pError[ind])
            ele.classList.add('inp-error')
            labels[ind].style.color = 'hsl(0, 100%, 67%)'
        }
        else {
            remove(pError[ind])
            ele.classList.remove('inp-error')
            labels[ind].style.color = 'hsl(0, 1%, 44%)'
        }
        if (ind === 0 && ele.value > 31) {

        }
    })
    if ([...inputs].every((e) => e.vlaue !== '')) {
        say('pass')
        let v = bithday(Number(inputs[2].value), Number(inputs[1].value) - 1, Number(inputs[0].value))
        say(v)
        spans.forEach((element, index) => {
            element.innerText = v[index]
        })
    }
}
inputs.forEach((ele, ind) => {
    ele.oninput = function () {
        if (ind === 0 || ind === 1) {
            if (ele.value.length > 2) {
                ele.value = ele.value.slice(0, 2)
            }
        }
        else {
            if (ele.value.length > 4) {
                ele.value = ele.value.slice(0, 4)
            }
        }
    }
})