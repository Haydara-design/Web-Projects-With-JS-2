let counter = 0;
let s = document.querySelectorAll('.control-panel span')
let btnsRemove = document.querySelectorAll('.control-panel button')
let cards = document.querySelectorAll('.card')
let div = document.querySelectorAll('.switch')

let btnDarkLight = document.querySelector('.dark-light')
let btnAll = document.querySelector('.All')
let btnActive = document.querySelector('.Active')
let btnInactive = document.querySelector('.Inactive')

let btnDarkLightImg = document.querySelector('.dark-light img')

const variableNames = ['--darkColors', '--cardBackgroundDark', '--buttonsBackgroundDark', '--switchbackgroundDark', '--h1Color',
    '--btnsTextColorHover', '--btnsTextColor', '--h4Color', '--cardsPColor', '--cardsBtnBorder', '--btnDarkLight'];

const variableValues = ['linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)', '#fdfdff', '#fdfdff', '#c6c7c9', 'black', 'white',
    'black', 'black', '#5e5f62', 'hsl(217, 61%, 90%)', '#eeefed'];

const variableValues2 = ['linear-gradient(180deg, #040918 0%, #091540 100%)', 'hsl(223.64deg 26.19% 16.47%)', '#2f354b', 'hsl(226, 11%, 37%)',
    'white', 'hsl(227, 75%, 14%)', 'hsl(0, 0%, 78%)', 'white', 'hsl(0, 0%, 78%)', 'hsl(225deg 12.77% 36.86%)', '#2f354b'];
const localStorageObj = { ...localStorage };

// window.localStorage.clear()

if (Object.keys(window.localStorage).length > 0) {

    counter = parseInt(window.localStorage.getItem('counter')) + 1 || 0;
    console.log(localStorageObj)
    for (const [key, value] of Object.entries(localStorageObj)) {

        if (key.startsWith('--'))
            document.documentElement.style.setProperty(key, value)
        else if (key === 'img')
            btnDarkLightImg.src = value
        else if (value === 'true') {
            div.forEach(function (ele, ind) {
                if (key === s[ind].getAttribute('data-src')) {
                    cards[ind].classList.toggle('active')
                    ele.classList.add('change1')
                    s[ind].classList.add('change2')
                }
            })
        }
        else if (key.startsWith('task')) {
            cards.forEach(function (e) {
                if (value === e.getAttribute('data-src')) {
                    e.remove()
                }
            })
        }
    }
}

div.forEach(function (ele, ind) {
    ele.onclick = function () {
        this.classList.toggle('change1')
        s[ind].classList.toggle('change2')
        cards[ind].classList.toggle('active')

        if (s[ind].classList.contains('change2')) {
            window.localStorage.setItem(s[ind].getAttribute('data-src'), true)
        }
        else {
            window.localStorage.removeItem(s[ind].getAttribute('data-src'))
        }


    }
})

btnActive.onclick = function () {
    cards.forEach(function (ele) {
        if (!ele.classList.contains('active')) {
            ele.classList.remove('appear')
            ele.classList.add('fade')
            setTimeout(() => { ele.style.display = 'none' }, 400)
        }
        else {
            ele.classList.remove('fade')
            ele.classList.add('appear')
            setTimeout(() => { ele.style.display = 'flex' }, 400)
        }
    })
}

btnInactive.onclick = function () {
    cards.forEach(function (ele) {
        if (ele.classList.contains('active')) {
            ele.classList.add('fade')
            ele.classList.remove('appear')
            setTimeout(() => { ele.style.display = 'none' }, 400)
        }
        else {
            ele.classList.remove('fade')
            ele.classList.add('appear')
            setTimeout(() => { ele.style.display = 'flex' }, 400)
        }
    })
}

btnAll.onclick = function () {
    cards.forEach(function (ele) {
        ele.style.display = 'flex'
        ele.classList.remove('fade')
        ele.classList.remove('appear')
        void ele.offsetWidth
        ele.classList.add('appear')

    })
}

btnsRemove.forEach(function (ele, ind) {
    ele.onclick = function () {
        const target = ele.getAttribute('data-src')
        cards.forEach(function (e) {
            if (target === e.getAttribute('data-src')) {
                e.classList.add('fade-up')
                console.log(counter)
                window.localStorage.setItem(`task${counter}`, e.getAttribute('data-src'))
                setTimeout(() => { e.remove() }, 400);
                window.localStorage.setItem('counter', counter)
                ++counter
            }
        })
    }
})

btnDarkLight.onclick = function () {
    if (btnDarkLightImg.src === "http://127.0.0.1:5500/images/icon-sun.svg") {
        btnDarkLightImg.src = "images/icon-moon.svg"
        for (let i = 0; i < variableNames.length; i++) {
            document.documentElement.style.setProperty(variableNames[i], variableValues[i])
            window.localStorage.setItem(variableNames[i], variableValues[i])
        }

        window.localStorage.setItem('img', "images/icon-moon.svg")
    }
    else {
        btnDarkLightImg.src = "images/icon-sun.svg"
        for (let i = 0; i < variableNames.length; i++) {
            document.documentElement.style.setProperty(variableNames[i], variableValues2[i])
            window.localStorage.setItem(variableNames[i], variableValues2[i])
        }
        window.localStorage.setItem('img', "images/icon-sun.svg")
    }
}

