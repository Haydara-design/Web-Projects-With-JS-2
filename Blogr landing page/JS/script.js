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

let lis = document.querySelectorAll('.up li')
let i = document.querySelectorAll('li i')
let same = document.querySelectorAll('.same')
let ul = document.querySelector('.up ul')

let aside = document.querySelector('aside')
let shape = document.querySelector('.shape')
let shapeImg = document.querySelector('.shape img')


aside.appendChild(ul.cloneNode(true))
aside.appendChild(document.createElement('hr'))
aside.appendChild(document.querySelector('.buttons').cloneNode(true))
let lisClone = document.querySelectorAll('aside li')
let iAside = document.querySelectorAll('aside li i')
let sameAside = document.querySelectorAll('aside .same')

let change = document.querySelectorAll('.change')

say(aside.innerHTML)

function actionDown(ind, ele) {
    i[ind].style.transform = "rotate(-180deg)"
    add(same[ind], 'fade-up', 'appear-down')
    ele.style.color = 'white';
}
function actionUp(ind, ele) {
    iAside[ind].style.transform = "rotate(0deg)"
    remove(same[ind], 'fade-up', 'appear-down')
    ele.style.color = '#ffdeda';
}

function asideActionDown(ind, ele) {
    iAside[ind].style.transform = "rotate(-180deg)"
    sameAside[ind].style.maxHeight = '500px'
    ele.style.color = 'black';
}
function asideActionUp(ind, ele) {
    iAside[ind].style.transform = "rotate(0deg)"
    sameAside[ind].style.maxHeight = '0px'
    ele.style.color = 'hsl(208, 49%, 24%)';
}

let check0 = false
let check1 = false
let check2 = false

lis.forEach((ele, ind) => {
    ele.onclick = function (e) {
        e.stopPropagation()
        switch (ind) {
            case 0:
                actionDown(ind, ele)
                check0 = true
                if (check1)
                    actionUp(1, lis[1]);
                if (check2)
                    actionUp(2, lis[2]);
                break;
            case 1:
                actionDown(ind, ele)
                check1 = true
                if (check0)
                    actionUp(0, lis[0]);
                if (check2)
                    actionUp(2, lis[2]);
                break;
            case 2:
                actionDown(ind, ele)
                check2 = true
                if (check0)
                    actionUp(0, lis[0]);
                if (check1)
                    actionUp(1, lis[1]);
                break;
        }
    }
})

lisClone.forEach((ele, ind) => {
    ele.onclick = function (e) {
        e.stopPropagation()
        switch (ind) {
            case 0:
                asideActionDown(ind, ele)
                check0 = true
                if (check1)
                    asideActionUp(1, lisClone[1]);
                if (check2)
                    asideActionUp(2, lisClone[2]);
                break;
            case 1:
                asideActionDown(ind, ele)
                check1 = true
                if (check0)
                    asideActionUp(0, lisClone[0]);
                if (check2)
                    asideActionUp(2, lisClone[2]);
                break;
            case 2:
                asideActionDown(ind, ele)
                check2 = true
                if (check0)
                    asideActionUp(0, lisClone[0]);
                if (check1)
                    asideActionUp(1, lisClone[1]);
                break;
        }
    }
})

document.body.onclick = function () {
    if (check0) {
        actionUp(0, lis[0])
        asideActionUp(0, lisClone[0])
    }

    if (check1) {
        actionUp(1, lis[1])
        asideActionUp(1, lisClone[1])
    }
    if (check2) {
        actionUp(2, lis[2])
        asideActionUp(2, lisClone[2])
    }
}
let shapeCheck = false
shape.onclick = function () {
    if (!shapeCheck) {
        add(aside, 'fade-up', 'appear-down')
        shapeCheck = true
        remove(shapeImg)
        setTimeout(() => { shapeImg.src = "images/icon-close.svg" }, 500);
        setTimeout(() => { add(shapeImg) }, 510);

    }
    else {
        remove(aside, 'fade-up', 'appear-down')
        shapeCheck = false
        remove(shapeImg)
        setTimeout(() => { shapeImg.src = "images/icon-hamburger.svg" }, 500);
        setTimeout(() => { add(shapeImg) }, 510);
    }
}

if (window.matchMedia('(max-width: 950px)').matches) {
    change.forEach(ele => {
        if (ele.src.includes('desktop')) {
            ele.src = ele.src.replace('desktop', 'mobile');
            say(55)
        }
    });
} else {
    change.forEach(ele => {
        if (ele.src.includes('mobile')) {
            ele.src = ele.src.replace('mobile', 'desktop');
        }
    });
}
