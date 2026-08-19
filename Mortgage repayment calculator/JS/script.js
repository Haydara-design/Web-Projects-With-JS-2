let inputs = document.querySelectorAll('[type="text"]')
let radios = document.querySelectorAll('[type="radio"]')
let spans = document.querySelectorAll('span')
let divs = document.querySelectorAll('label +div')
let radioDivs = document.querySelectorAll('.radio')
let submit = document.querySelector('button')
let rightSide = document.querySelector('.right')
let cont = document.querySelector('.container')
let clearAll = document.querySelector('header button')

// The New Container
let newRightSide = document.createElement('div')
newRightSide.classList.add('right')

let newText = document.createElement('div')

let h2Text = document.createElement('h2')
h2Text.innerText = 'Your results'
h2Text.style.color = 'white'
h2Text.style.textAlign = 'left';
newText.appendChild(h2Text)

let pText = document.createElement('p')
pText.innerText = 'Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.'
pText.style.textAlign = 'left';
pText.style.color = 'hsl(200, 26%, 54%)'
newText.appendChild(pText)
newRightSide.appendChild(newText)


let sContainer = document.createElement('div')
sContainer.classList.add('s-container')

let sP = document.createElement('p')
sP.innerText = 'Your monthly repayments'
sContainer.appendChild(sP)

let sH1 = document.createElement('h1')
sContainer.appendChild(sH1)

let hr = document.createElement('hr')
sH1.after(hr)

let finalP = document.createElement('p')
finalP.classList.add('final')
sContainer.appendChild(finalP)

newRightSide.appendChild(sContainer)

// The End Of New Container


let pError = []
for (let i = 0; i < 4; i++) {
    pError.push(document.createElement('p'))
    pError[i].innerText = 'This field is required'
    pError[i].classList.add('error')
}

clearAll.onclick = function () {
    inputs.forEach((ele) => { ele.value = '' })
    radios.forEach((ele) => { ele.checked = false })
    radioDivs.forEach((ele) => { ele.style.backgroundColor = 'white'; ele.style.borderColor = 'hsl(200, 26%, 54%)'; })
    if (cont.contains(newRightSide)) {
        rightSide.style.display = 'flex'
        rightSide.classList.remove('fade')
        newRightSide.classList.remove('appear')
        void rightSide.offsetWidth
        void newRightSide.offsetWidth
        rightSide.classList.add('appear')
        newRightSide.classList.add('fade')
        setTimeout(() => { cont.removeChild(newRightSide) }, 300);
    }
}

inputs.forEach(function (ele, ind) {

    ele.onfocus = function () {
        spans[ind].style.backgroundColor = 'hsl(61, 70%, 52%)'
        divs[ind].style.borderColor = 'hsl(61, 70%, 52%)'
    }
    ele.onblur = function () {
        spans[ind].style.backgroundColor = 'hsl(202, 86%, 94%)'
        spans[ind].style.color = 'hsl(200, 24%, 40%)'
        divs[ind].style.borderColor = 'hsl(200, 26%, 54%)'
        if (ind === 0)
            ele.value = Number(ele.value.replace(/[^0-9.]/g, '')).toLocaleString('en-US')
    }
})

radios.forEach((ele, ind) => {

    ele.onclick = function () {
        radioDivs.forEach((e, i) => {
            e.style.backgroundColor = i === ind ? 'hsla(61, 70%, 52%, 0.40)' : 'white'
            e.style.borderColor = i === ind ? 'hsl(61, 70%, 52%)' : 'hsl(200, 26%, 54%)'
        })
    }
})

document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    inputs.forEach((ele, ind) => {
        if (ele.value === '') {
            spans[ind].style.backgroundColor = 'hsl(4, 69%, 50%)'
            spans[ind].style.color = 'white'
            divs[ind].style.borderColor = 'hsl(4, 69%, 50%)'
            pError[ind].classList.remove('fade')
            pError[ind].classList.add('appear')
            divs[ind].after(pError[ind])
        }
        else {
            pError[ind].classList.remove('appear')
            pError[ind].classList.add('fade')
        }
    })
    if (!radios[0].checked && !radios[1].checked) {
        radioDivs[1].after(pError[3])
        pError[3].classList.remove('fade')
        pError[3].classList.add('appear')
        pError[3].style.marginBottom = '20px'
        radioDivs[1].style.marginBottom = '0px'
    }
    else {
        pError[3].classList.remove('appear')
        pError[3].classList.add('fade')
        pError[3].style.marginBottom = '0px'
        radioDivs[1].style.marginBottom = '20px'
    }
    if ([...inputs].every((ele) => ele.value !== '')) {
        if (radios[0].checked) {
            let value = Number(inputs[0].value.replaceAll(',', '')) * ((Number(inputs[2].value) / (1200)) * Math.pow((1 + Number(inputs[2].value) / 1200), Number(inputs[1].value) * 12) / (Math.pow((1 + Number(inputs[2].value / 1200)), Number(inputs[1].value) * 12) - 1))
            sH1.innerText = `£${Number(value.toFixed(2)).toLocaleString('en-US')}`
            finalP.innerHTML = `Total you'll repay over the term <br><span>£${Number((value * 12 * inputs[1].value).toFixed(2)).toLocaleString('en-US')}</span>`
            rightSide.classList.remove('appear')
            newRightSide.classList.remove('fade')
            rightSide.classList.add('fade')
            newRightSide.classList.add('appear')
            setTimeout(() => { rightSide.style.display = 'none' }, 300);
            setTimeout(() => { cont.appendChild(newRightSide) }, 300);
        }
        else {
            let value = Number(inputs[0].value.replaceAll(',', '')) * (Number(inputs[2].value) / (1200))
            sH1.innerText = `£${Number(value.toFixed(2)).toLocaleString('en-US')}`
            finalP.innerHTML = `Total you'll repay over the term <br><span>£${Number((value * 12 * inputs[1].value + 300000).toFixed(2)).toLocaleString('en-US')}</span>`
            rightSide.classList.remove('appear')
            newRightSide.classList.remove('fade')
            rightSide.classList.add('fade')
            newRightSide.classList.add('appear')
            setTimeout(() => { rightSide.style.display = 'none' }, 300);
            setTimeout(() => { cont.appendChild(newRightSide) }, 300);
        }
    }
}

inputs.forEach((ele, ind) => {
    ele.addEventListener('input', function () {
        ele.value = ele.value.replace(/[^0-9.]/g, '')
        const parts = ele.value.split('.')
        if (parts.length > 2)
            ele.value = parts[0] + '.' + parts.slice(1)
    })
})


