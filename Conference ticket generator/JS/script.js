let inputs = document.querySelectorAll('input') // img-FN-Email-User
let header = document.querySelector('header')
let container = document.querySelector('.container')
let pSize = document.querySelector('.size')
let btnImg = document.querySelector('.image img')


let errorPEmail = document.createElement('p')
let errorPFullName = document.createElement('p')
let errorPUsername = document.createElement('p')

errorPEmail.innerHTML = '&#9432; Please enter a valid email address.'

errorPEmail.classList.add('appear')
errorPEmail.classList.add('error')
errorPUsername.classList.add('appear')
errorPUsername.classList.add('error')
errorPFullName.classList.add('error')
errorPFullName.classList.add('appear')

errorPFullName.innerHTML = '&#9432; Please write Your Name.'
errorPUsername.innerHTML = "&#9432; Username can't be empty."


// Creating The Ticket //
let container2 = document.createElement('div')
container2.classList.add('container2', 'appear')

let header2 = document.createElement('header')
let logo = document.createElement('img')
logo.src = "images/logo-full.svg"

let text = document.createElement('div')
text.classList.add('text')
let textH1 = document.createElement('h1')
let textP = document.createElement('p')

let tickerContainer = document.createElement('div')
tickerContainer.classList.add('ticker-container')

let left = document.createElement('div')
left.classList.add('left')
let up = document.createElement('div')
up.classList.add('up')
let image2 = document.createElement('div')
image2.classList.add('image2')
let logoMark = document.createElement('img')
logoMark.src = "images/logo-mark.svg"

let textTicket = document.createElement('div')
textTicket.classList.add('text-ticket')
let ticketH1 = document.createElement('h1')
ticketH1.innerText = 'Coding Conf'
let ticketP = document.createElement('p')
ticketP.innerText = 'Jan 31, 2025 / Austin, TX'

let down = document.createElement('div')
down.classList.add('down')
let image3 = document.createElement('div')
image3.classList.add('image3')
let imgInput = document.createElement('img')

let textTicketDown = document.createElement('div')
textTicketDown.classList.add('text-ticket')
let ticketH2Down = document.createElement('h2')
let ticketPDown = document.createElement('p')


let num = document.createElement('div')
num.classList.add('num')
let numP = document.createElement('p')
numP.innerText = '\#036788'


container2.appendChild(header2)
header2.appendChild(logo)

container2.appendChild(text)
text.appendChild(textH1)
text.appendChild(textP)

container2.appendChild(tickerContainer)
tickerContainer.appendChild(left)
left.appendChild(up)
up.appendChild(image2)
up.appendChild(textTicket);
image2.appendChild(logoMark)

textTicket.appendChild(ticketH1)
textTicket.appendChild(ticketP)

left.appendChild(down)
down.appendChild(image3)
image3.appendChild(imgInput)

down.appendChild(textTicketDown)
textTicketDown.appendChild(ticketH2Down)
textTicketDown.appendChild(ticketPDown)

tickerContainer.appendChild(num)
num.appendChild(numP)


let regex = /\w+@\w+\.\w+/i
say = console.log

let uploadedImg
let check = false
inputs[0].addEventListener('change', function (e) {
    let maxSize = 500 * 1024;
    let file = e.target.files[0]
    if (file.size > maxSize) {
        e.target.files[0] = ''
        pSize.innerHTML = '&#9432; File is too large. Please upload a photo under 500kb.'
        pSize.style.color = 'hsl(7, 71%, 60%)'
        check = false
    }
    else {
        uploadedImg = URL.createObjectURL(file)
        btnImg.style.cssText = 'width: 100%;height: 100%;border-radius: 15px;'
        btnImg.src = URL.createObjectURL(file)
        pSize.innerHTML = '&#9432; Upload your photo (JPG or PNG, max size: 500KB).'
        pSize.style.color = 'hsl(252, 6%, 83%)'
        check = true
    }
})

document.forms[0].onsubmit = function (e) {
    let value = inputs[2].value
    let valueFN = inputs[1].value
    let valueUser = inputs[3].value

    if (valueFN === '') {
        inputs[1].after(errorPFullName)
    }
    if (valueFN !== '') {
        textH1.innerHTML = `Congrats, <span class = "s1">${valueFN}</span>! Your ticket is ready.`
        ticketH2Down.innerText = valueFN
    }

    if (valueUser === '') {
        inputs[3].after(errorPUsername)
    }
    if (valueUser !== '') {
        ticketPDown.innerText = valueUser
    }
    if (!value.match(regex)) {
        inputs[2].after(errorPEmail)
    }
    if (value.match(regex)) {
        errorPEmail.classList.remove('appear')
        errorPEmail.classList.add('fade')
        textP.innerHTML = `We've emailed your ticket to , <span class = "s2">${value}</span> and we will send updates in the run up to the event.`
    }

    if (check) {
        say('hhhh')
        imgInput.src = uploadedImg
        container.classList.add('fade')
        setTimeout(() => { container.style.display = 'none' }, 400)
        document.body.appendChild(container2)


    }
    e.preventDefault()
}
