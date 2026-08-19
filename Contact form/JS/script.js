function add(arg, fadeFunc = 'fade', appearFunc = 'appear') {
    arg.style.display = 'block'
    arg.classList.remove(fadeFunc)
    arg.classList.add(appearFunc)
}
function remove(arg, fadeFunc = 'fade', appearFunc = 'appear') {
    arg.classList.remove(appearFunc)
    arg.classList.add(fadeFunc)
    setTimeout(() => { arg.style.display = 'none' }, 300);
}


say = console.log

let FLNMsg = document.querySelectorAll('#FN,#LN,#msg')
let emailInput = document.querySelector('#email')
let queryInput = document.querySelectorAll('[type="radio"]')
let checkboxInput = document.querySelector('[type="checkbox"]')
let checkDive = document.querySelector('.check')
let queryDiv = document.querySelector('.test')
let smallCont = document.querySelectorAll('.small-cont2')


// P Errors
let emptyError = []
for (let i = 0; i < 3; i++) {
    emptyError.push(document.createElement('p'))
    emptyError[i].innerText = 'This field is required'
    emptyError[i].classList.add('error')
}
say(emptyError[0])
let regex = /\w+@\w+\.\w+/g
let pEmail = document.createElement('p')
pEmail.innerText = 'Please enter a valid email address'
pEmail.classList.add('error')

let pQuery = document.createElement('p')
pQuery.innerText = 'Please select a query type'
pQuery.classList.add('error')

let pCheckbox = document.createElement('p')
pCheckbox.innerText = 'To submit this form,Please consent to be contacted by the team'
pCheckbox.classList.add('error')
// End Of P Errors

let popMsg = document.createElement('div')
popMsg.classList.add('pop-msg')

let popMsgP1 = document.createElement('p')
popMsgP1.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!'
popMsg.appendChild(popMsgP1)

let popMsgP2 = document.createElement('p')
popMsgP2.innerText = "Thanks for completing the form.We'll be in touch soon!"
popMsg.appendChild(popMsgP2)



document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    FLNMsg.forEach((ele, ind) => {
        if (ele.value === '') {
            add(emptyError[ind])
            ele.after(emptyError[ind])

        }
        else {
            remove(emptyError[ind])
        }
    })

    if (!emailInput.value.match(regex)) {
        add(pEmail)
        emailInput.after(pEmail)
    }
    else
        remove(pEmail)

    if (!checkboxInput.checked) {
        add(pCheckbox)
        checkDive.after(pCheckbox)
    }
    else
        remove(pCheckbox)

    if (!queryInput[0].checked && !queryInput[1].checked) {
        add(pQuery)
        queryDiv.after(pQuery)
    }
    else
        remove(pQuery)
    if ([...FLNMsg].every(ele => ele !== '') && [...queryInput].some(ele => ele !== '') && checkboxInput.checked) {
        add(popMsg, 'fade-up', 'appear-down')
        document.body.appendChild(popMsg)
        setTimeout(() => { remove(popMsg, 'fade-up', 'appear-down') }, 2000);
        FLNMsg.forEach((ele) => { ele.value = '' })
        emailInput.value = ''
        queryInput.forEach((ele) => { ele.checked = false })
        checkboxInput.checked = false
        smallCont.forEach((e, i) => {
            e.style.backgroundColor = 'white';
            e.style.borderColor = 'hsl(186, 15%, 59%)';
        })
    }
}
FLNMsg.forEach((ele, ind) => {
    if (ind !== 2)
        ele.addEventListener('input', function () {
            ele.value = ele.value.replace(/[^a-z]/gi, '')
        })
})
queryInput.forEach((ele, ind) => {
    ele.onclick = function () {
        smallCont.forEach((e, i) => {
            e.style.backgroundColor = i === ind ? 'hsl(148, 38%, 91%)' : 'white';
            e.style.borderColor = i === ind ? 'hsl(169, 82%, 27%)' : 'hsl(186, 15%, 59%)';
        })
    }
})
FLNMsg.forEach((ele) => {
    ele.onfocus = function () {
        ele.style.outlineColor = 'hsl(169, 82%, 27%)';
    }
})
emailInput.onfocus = function () {
    emailInput.style.outlineColor = 'hsl(169, 82%, 27%)';
}

