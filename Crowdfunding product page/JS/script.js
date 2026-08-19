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
function creat(elements, classes, innerTexts, atteributes) {
    let arr = []
    for (let i = 0; i < elements.length; i++) {
        arr.push(document.createElement(elements[i]))
        if (classes[i])
            arr[i].className = classes[i]
        if (innerTexts[i])
            arr[i].innerHTML = innerTexts[i]
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

let cardBtns = document.querySelectorAll('.card button')

cardBtns[2].disabled = true

let test = creat(
    ['div', 'div', 'img', 'h3', 'p', 'button'],
    ['check', 'logo', false, false, false, false],
    [false, false, false, 'Thanks for your support!',
        'Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.',
        'Got it!'],
    [false, false, { 'src': "images/icon-check.svg" }, false, false, false])

let check = appened([test[0], test.slice(1)])

let c =
    `                <div class="head-close">
                <div class="text4">
                    <h4>Back this project</h4>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                </div>
                <div class="logo"><img src="images/icon-close-modal.svg" alt=""></div>
            </div>

            <div class="card2">

                <div class="padding">
                    <input type="radio" name="os" id="1">
                    <div class="text5">
                        <label for="1" class="black-green">Pledge with no reward</label>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to receive product updates via email.</p>
                    </div>
                </div>

                <div class="down">
                    <div class="flex2">
                        <p>Enter your pledge</p>
                        <div class="input-btn">
                            <div class="marker">
                                <span>$</span>
                                <input type="text">
                            </div>
                            <button>Continue</button>
                        </div>
                    </div>
                </div>

            </div>

            <div class="card2">

                <div class="padding">
                    <input type="radio" name="os" id="2">
                    <div class="text5">

                        <label for="2">
                            <span class="black-green">Bamboo Stand</span>
                            <span class="only-green">Pledge $25 or more</span>
                            <span class="left-cont">101 <span> left</span> </span>
                        </label>
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional
                            campaign, and you’ll be added to a special Backer member list.</p>
                    </div>
                </div>

                <div class="down">
                    <div class="flex2">
                        <p>Enter your pledge</p>
                        <div class="input-btn">
                            <div class="marker">
                                <span>$</span>
                                <input type="text">
                            </div>
                            <button>Continue</button>
                        </div>
                    </div>
                </div>


            </div>

            <div class="card2">

                <div class="padding">
                    <input type="radio" name="os" id="3">
                    <div class="text5">

                        <label for="3">
                            <span class="black-green">Black Edition Stand</span>
                            <span class="only-green">Pledge $75 or more</span>
                            <span class="left-cont">64 <span> left</span> </span>
                        </label>
                        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to
                            our Backermember list. Shipping is included.</p>
                    </div>
                </div>

                <div class="down">
                    <div class="flex2">
                        <p>Enter your pledge</p>
                        <div class="input-btn">
                            <div class="marker">
                                <span>$</span>
                                <input type="text">
                            </div>
                            <button>Continue</button>
                        </div>
                    </div>
                </div>


            </div>

            <div class="card2">

                <div class="padding">
                    <input type="radio" name="os" id="4">
                    <div class="text5">

                        <label for="4">
                            <span class="black-green">Mahogany Special Edition</span>
                            <span class="only-green">Pledge $200 or more</span>
                            <span class="left-cont">0 <span> left</span> </span>
                        </label>
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you.
                            You’ll be addedto our Backer member list. Shipping is included.</p>
                    </div>
                </div>

            </div>`

let v = cr('div', 'q1', c, false)

let overLayer = document.querySelector('.over-layer')

let card2 = v.querySelectorAll('.card2')
let radio = v.querySelectorAll('.card2 [type="radio"]')
let xMark = v.querySelector('.q1 .logo')
let checkBtn = check.querySelector('button')
let flex2 = v.querySelectorAll('.flex2')
let Continuebtn = v.querySelectorAll('.q1 button')
let inputs = v.querySelectorAll('[type="text"]')
let bookmark = document.querySelector('.flex p')
let bookmarkFlag = document.querySelector('.flex .bm')

radio[3].disabled = true

xMark.onclick = function () {
    remove(v);
    deleteOverLayer()
}
checkBtn.onclick = function () {
    remove(check, 'fade-up', 'appear-down')
    deleteOverLayer()
}

function actionDwon(ele) {
    ele.style.maxHeight = '300px';
    ele.style.opacity = '1';
}
function actionUp(ele) {
    ele.style.maxHeight = '0px';
    ele.style.opacity = '0';
}
function deleteOverLayer() {
    overLayer.style.backgroundColor = 'transparent'
    overLayer.style.zIndex = '-1'
    overLayer.style.opacity = '0'
}
function addOverLayer() {
    overLayer.style.backgroundColor = 'rgba(0, 0, 0, 0.559)'
    overLayer.style.zIndex = '1000'
    overLayer.style.opacity = '1'
}
function borderColor(ind) {
    for (let i = 0; i < 3; i++) {
        i === ind ? card2[ind].style.borderColor = ' hsl(176, 50%, 47%)' : card2[i].style.borderColor = ' #b1b1b1'
    }
}
radio.forEach((ele, ind) => {
    ele.onclick = function () {
        ind === 0 ? (actionDwon(flex2[0]), actionUp(flex2[1]), actionUp(flex2[2]), borderColor(ind)) :
            ind === 1 ? (actionDwon(flex2[1]), actionUp(flex2[0]), actionUp(flex2[2]), borderColor(ind)) :
                (actionDwon(flex2[2]), actionUp(flex2[0]), actionUp(flex2[1]), borderColor(ind))
    }
})

Continuebtn.forEach((ele, ind) => {
    ele.onclick = function () {
        if (inputs[ind].value !== '') {
            remove(v)
            overLayer.appendChild(check)
            add(check, 'fade-up', 'appear-down');
        }
    }
})
cardBtns.forEach((ele) => {
    ele.onclick = function () {
        addOverLayer()
        overLayer.appendChild(v)
        add(v)
    }
})

bookmark.onclick = function () {
    this.classList.toggle('js-green-p')
    bookmarkFlag.classList.toggle('js-green')
}
let aside = document.querySelector('aside')
let humburger = document.querySelector('.hamburger')
let xClose = document.querySelector('.hamburger img')

let boolean = true
humburger.onclick = function (e) {
    e.stopPropagation()
    if (boolean) {
        remove(xClose)
        setTimeout(() => { xClose.src = "images/icon-close-menu.svg" }, 300);
        setTimeout(() => { add(xClose) }, 510);
        addOverLayer()
        overLayer.style.top = '100px'
        overLayer.appendChild(aside)
        add(aside,'disappear','appear-s')
        boolean = false
    }
    else {
        remove(xClose)
        setTimeout(() => { xClose.src = "images/icon-hamburger.svg" }, 300);
        setTimeout(() => { add(xClose) }, 510);
        boolean = true
        deleteOverLayer()
        overLayer.style.top = '0px'
        remove(aside,'disappear','appear-s')
    }

}