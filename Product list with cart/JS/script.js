let btns = document.querySelectorAll('.btn-container button')
let shapes = document.querySelectorAll('.shape')
let pInBackBtns = document.querySelectorAll('.back p')
let plusInBackBtns = document.querySelectorAll('.back .plus')
let minusInBackBtns = document.querySelectorAll('.back .minus')
let images = document.querySelectorAll('.big')
let h4Text = document.querySelectorAll('.text h4')
let priceText = document.querySelectorAll('.text h4+p')
let numInRightSide = document.querySelector('.right-side span')
let rightSide = document.querySelector('.right-side')
let pRightSide = document.querySelector('.right-side p')
let imgRightSide = document.querySelector('.right-side img')
let darkLayer = document.querySelector('.over-layer')

let thumbnailImgs = [
    "images/image-waffle-thumbnail.jpg", "images/image-creme-brulee-thumbnail.jpg", "images/image-macaron-thumbnail.jpg",
    "images/image-tiramisu-thumbnail.jpg", "images/image-baklava-thumbnail.jpg", "images/image-meringue-thumbnail.jpg",
    "images/image-cake-thumbnail.jpg", "images/image-brownie-thumbnail.jpg", "images/image-panna-cotta-thumbnail.jpg"]

let orderLista = [];
let totalValue = 0;

for (let i = 0; i < 9; i++) {
    let chartDiv = document.createElement('div')
    chartDiv.classList.add('chart')
    let chartText = document.createElement('div')
    let chartButton = document.createElement('button')
    let btnImage = document.createElement('i')
    btnImage.className = "fa-solid fa-xmark"
    let chartTextH4 = document.createElement('h4')
    let chartTextP = document.createElement('p')

    chartDiv.appendChild(chartText)
    chartDiv.appendChild(chartButton)
    chartText.appendChild(chartTextH4)
    chartText.appendChild(chartTextP)
    chartButton.appendChild(btnImage)
    orderLista.push(chartDiv)
}

let orderContainer = document.createElement('div')

let valueDiv = document.createElement('div')
let valueP = document.createElement('p')
valueP.innerText = 'Order Total'
let valueH2 = document.createElement('h2')

valueDiv.appendChild(valueP)
valueDiv.appendChild(valueH2)
valueDiv.classList.add('value')

let carbonNutral = document.createElement('div')
let pCarbonNutral = document.createElement('p')
pCarbonNutral.innerHTML = 'This is a <span>carbon-neutral</span> delivery'
carbonNutral.classList.add('carbon-nutral')
let imgCarbonNutral = document.createElement('img')
imgCarbonNutral.src = "images/icon-carbon-neutral.svg"

carbonNutral.appendChild(imgCarbonNutral)
carbonNutral.appendChild(pCarbonNutral)

let confirmOrder = document.createElement('button')
confirmOrder.classList.add('confirm-order')
confirmOrder.innerText = 'Confirm Order'

let btnCopy = confirmOrder.cloneNode(true)
btnCopy.innerText = 'Start new order'

orderContainer.appendChild(valueDiv)
orderContainer.appendChild(carbonNutral)
orderContainer.appendChild(confirmOrder)
orderContainer.classList.add('appear', 'order-container')

let overLayerContainer = document.createElement('div')
overLayerContainer.classList.add('over-layer-container')

let overLayerCheck = document.createElement('img')
overLayerCheck.src = "images/icon-order-confirmed.svg"
overLayerContainer.appendChild(overLayerCheck)

let overLayerH1 = document.createElement('h1')
overLayerH1.innerText = 'Order Confirmed'
overLayerContainer.appendChild(overLayerH1)

let overLayerP = document.createElement('p')
overLayerP.innerText = 'We hope yiu enjoy your food!'
overLayerContainer.appendChild(overLayerP)

let overLayerInDiv = document.createElement('div')
overLayerInDiv.classList.add('over-layer-in-div')
overLayerContainer.appendChild(overLayerInDiv)


confirmOrder.onclick = function () {
    overLayerContainer.style.display = 'block'
    let copy = valueDiv.cloneNode(true)
    copy.classList.add('copy')

    orderLista.forEach(function (ele, ind) {

        if (ele.querySelector('h4').innerText !== '') {

            let div = document.createElement('div')
            div.classList.add('test')

            let holder = document.createElement('div')
            holder.classList.add('holder')
            div.appendChild(holder)

            let overLayerInImgCont = document.createElement('div')
            overLayerInImgCont.classList.add('img-cont')
            let overLayerInImg = document.createElement('img')
            overLayerInImgCont.appendChild(overLayerInImg)
            holder.appendChild(overLayerInImgCont)

            let text = document.createElement('div')
            text.classList.add('text-in')
            holder.appendChild(text)

            let overLayerInh5 = document.createElement('h5')
            overLayerInh5.innerText = ele.querySelector('h4').innerText
            text.appendChild(overLayerInh5)

            let overLayerInP1 = document.createElement('p')
            overLayerInP1.innerHTML = `<span class="s1">${pInBackBtns[ind].innerText}x</span> <span class="s2">@${priceText[ind].innerText}</span>`
            text.appendChild(overLayerInP1)

            let overLayerInP2 = document.createElement('p')
            overLayerInP2.innerHTML = `<span class="s3">$${(parseFloat(priceText[ind].innerText.slice(1)) * Number(pInBackBtns[ind].innerText)).toFixed(2)}</span>`
            div.appendChild(overLayerInP2)

            overLayerInImg.src = thumbnailImgs[ind]
            overLayerInDiv.appendChild(div)
        }

    })
    overLayerContainer.appendChild(copy)
    copy.after(btnCopy)
    overLayerContainer.classList.remove('spcial-fadding')
    overLayerContainer.classList.add('spcial-appearing')
    darkLayer.style.display = 'block'
    document.body.appendChild(overLayerContainer)
}



orderLista.forEach(function (ele, ind) {
    ele.querySelector('button').onclick = function () {
        ele.querySelector('h4').innerText = ''
        totalValue -= parseFloat(ele.querySelector('.s3').innerText.slice(1))
        valueH2.innerText = `$${totalValue.toFixed(2)}`
        numInRightSide.innerText = Number(numInRightSide.innerText) - Number(pInBackBtns[ind].innerText);
        pInBackBtns[ind].innerText = 0;
        shapes[ind].style.cssText = 'transform: rotateY(0deg)'
        images[ind].style.cssText = 'border-color: transparent'
        ele.classList.remove('appear')
        ele.classList.add('fade')
        void ele.offsetWidth;
        setTimeout(() => { ele.style.display = 'none' }, 500)
        if (numInRightSide.innerText != 0) {
            pRightSide.classList.remove('appear')
            imgRightSide.classList.remove('appear')
            setTimeout(()=>{pRightSide.style.display = 'none'})
            void pRightSide.offsetWidth
            void imgRightSide.offsetWidth
            pRightSide.classList.add('fade')
            imgRightSide.classList.add('fade')
        }
        else {
            pRightSide.style.display = 'block'
            pRightSide.classList.remove('fade')
            imgRightSide.classList.remove('fade')
            void pRightSide.offsetWidth
            void imgRightSide.offsetWidth
            pRightSide.classList.add('appear')
            imgRightSide.classList.add('appear')

            orderContainer.classList.remove('appear')
            void orderContainer.offsetWidth
            orderContainer.classList.add('fade')
            setTimeout(() => { orderContainer.style.display = 'none' }, 500)
        }

    }
})
btnCopy.addEventListener('click', function () {
    overLayerContainer.removeChild(overLayerContainer.querySelector('.copy'))
    overLayerContainer.classList.remove('spcial-appearing')
    overLayerContainer.classList.add('spcial-fadding')
    setTimeout(() => {
        overLayerContainer.style.display = 'none'; overLayerInDiv.innerHTML = '';
    }, 500)
    darkLayer.style.display = 'none'
    totalValue = 0;
    orderLista.forEach(function (ele, ind) {
        ele.querySelector('h4').innerText = ''
        pInBackBtns[ind].innerText = 0;
        shapes[ind].style.cssText = 'transform: rotateY(0deg)'
        images[ind].style.cssText = 'border-color: transparent'
        ele.classList.remove('appear')
        ele.classList.add('fade')
        void ele.offsetWidth;
        setTimeout(() => { ele.style.display = 'none' }, 500)
        numInRightSide.innerText = 0
        pRightSide.style.display = 'block'
        pRightSide.classList.remove('fade')
        imgRightSide.classList.remove('fade')
        void pRightSide.offsetWidth
        void imgRightSide.offsetWidth
        pRightSide.classList.add('appear')
        imgRightSide.classList.add('appear')

        orderContainer.classList.remove('appear')
        void orderContainer.offsetWidth
        orderContainer.classList.add('fade')
        setTimeout(() => { orderContainer.style.display = 'none' }, 500)
    })
})


btns.forEach(function (ele, ind) {
    ele.onclick = function () {
        rightSide.appendChild(orderLista[ind])
        shapes[ind].style.cssText = 'transform: rotateY(-180deg)'
        images[ind].style.cssText = 'border-color: hsl(14, 86%, 42%);'
        pInBackBtns[ind].innerText = Number(pInBackBtns[ind].innerText) + 1;
        numInRightSide.innerText = Number(numInRightSide.innerText) + 1;
        orderLista[ind].querySelector('h4').innerText = `${h4Text[ind].innerText}`
        orderLista[ind].querySelector('p').innerHTML = `<span class="s1">${pInBackBtns[ind].innerText}x</span> <span class="s2">@${priceText[ind].innerText}</span> <span class="s3">$${(parseFloat(priceText[ind].innerText.slice(1)) * Number(pInBackBtns[ind].innerText)).toFixed(2)}</span>`
        console.log(orderLista[ind].querySelector('.s3').innerText)
        orderLista[ind].style.display = 'flex'
        void orderLista[ind].offsetWidth;
        orderLista[ind].classList.remove('fade')
        orderLista[ind].classList.add('appear')
        totalValue += parseFloat(priceText[ind].innerText.slice(1))
        valueH2.innerText = `$${totalValue.toFixed(2)}`
        void orderContainer.offsetWidth

        if (!rightSide.contains(orderContainer) && orderContainer.style.display !== 'none') {
            void orderContainer.offsetWidth
            orderContainer.classList.add('appear')
        }
        else {
            void orderContainer.offsetWidth
            setTimeout(() => { orderContainer.classList.remove('appear') }, 500);
        }
        if (numInRightSide.innerText != 0) {
            pRightSide.classList.remove('appear')
            imgRightSide.classList.remove('appear')
            setTimeout(()=>{pRightSide.style.display = 'none'})
            void pRightSide.offsetWidth
            void imgRightSide.offsetWidth
            pRightSide.classList.add('fade')
            imgRightSide.classList.add('fade')

            orderContainer.style.display = 'block'
            orderLista[ind].after(orderContainer)
            orderContainer.classList.remove('fade')
            void orderContainer.offsetWidth
        }
        else {
            pRightSide.style.display = 'block'
            pRightSide.classList.remove('fade')
            imgRightSide.classList.remove('fade')
            void pRightSide.offsetWidth
            void imgRightSide.offsetWidth
            pRightSide.classList.add('appear')
            imgRightSide.classList.add('appear')

            orderContainer.classList.remove('appear')
            void orderContainer.offsetWidth
            orderContainer.classList.add('fade')
            setTimeout(() => { orderContainer.style.display = 'none' }, 500)
        }
    }
})

plusInBackBtns.forEach(function (ele, ind) {
    ele.onclick = function () {
        orderLista[ind].style.display = 'flex'
        void orderLista[ind].offsetWidth;
        orderLista[ind].classList.remove('fade')
        orderLista[ind].classList.add('appear')
        pInBackBtns[ind].innerText = Number(pInBackBtns[ind].innerText) + 1;
        numInRightSide.innerText = Number(numInRightSide.innerText) + 1;
        orderLista[ind].querySelector('p').innerHTML = `<span class="s1">${pInBackBtns[ind].innerText}x</span> <span class="s2">@${priceText[ind].innerText}</span> <span class="s3">$${(parseFloat(priceText[ind].innerText.slice(1)) * Number(pInBackBtns[ind].innerText)).toFixed(2)}</span>`
        totalValue += parseFloat(priceText[ind].innerText.slice(1))
        valueH2.innerText = `$${totalValue.toFixed(2)}`
    }
})

minusInBackBtns.forEach(function (ele, ind) {
    ele.onclick = function () {
        if (pInBackBtns[ind].innerText != '1') {
            orderLista[ind].style.display = 'flex'
            void orderLista[ind].offsetWidth;
            orderLista[ind].classList.remove('fade')
            pInBackBtns[ind].innerText = Number(pInBackBtns[ind].innerText) - 1;
            numInRightSide.innerText = Number(numInRightSide.innerText) - 1;
            orderLista[ind].querySelector('p').innerHTML = `<span class="s1">${pInBackBtns[ind].innerText}x</span> <span class="s2">@${priceText[ind].innerText}</span> <span class="s3">$${(parseFloat(priceText[ind].innerText.slice(1)) * Number(pInBackBtns[ind].innerText)).toFixed(2)}</span>`
            totalValue -= parseFloat(priceText[ind].innerText.slice(1))
            valueH2.innerText = `$${totalValue.toFixed(2)}`

            if (numInRightSide.innerText != 0) {
                pRightSide.classList.remove('appear')
                imgRightSide.classList.remove('appear')
                setTimeout(()=>{pRightSide.style.display = 'none'})
                void pRightSide.offsetWidth
                void imgRightSide.offsetWidth
                pRightSide.classList.add('fade')
                imgRightSide.classList.add('fade')
            }
            else {
                pRightSide.style.display = 'block'
                pRightSide.classList.remove('fade')
                imgRightSide.classList.remove('fade')
                void pRightSide.offsetWidth
                void imgRightSide.offsetWidth
                pRightSide.classList.add('appear')
                imgRightSide.classList.add('appear')

                orderContainer.classList.remove('appear')
                void orderContainer.offsetWidth
                orderContainer.classList.add('fade')
                setTimeout(() => { orderContainer.style.display = 'none' }, 500)
            }
        }

        else {
            orderLista[ind].querySelector('h4').innerText = ''
            totalValue -= parseFloat(priceText[ind].innerText.slice(1))
            valueH2.innerText = `$${totalValue.toFixed(2)}`
            pInBackBtns[ind].innerText = Number(pInBackBtns[ind].innerText) - 1;
            numInRightSide.innerText = Number(numInRightSide.innerText) - 1;
            shapes[ind].style.cssText = 'transform: rotateY(0deg)'
            images[ind].style.cssText = 'border-color: transparent'
            orderLista[ind].classList.remove('appear')
            orderLista[ind].classList.add('fade')
            void orderLista[ind].offsetWidth;
            setTimeout(() => { orderLista[ind].style.display = 'none' }, 500)
            orderLista[ind].querySelector('p').innerHTML = `<span class="s1">${pInBackBtns[ind].innerText}x</span> <span class="s2">@${priceText[ind].innerText}</span> <span class="s3">$${(parseFloat(priceText[ind].innerText.slice(1)) * Number(pInBackBtns[ind].innerText)).toFixed(2)}</span>`
            if (numInRightSide.innerText != 0) {
                pRightSide.classList.remove('appear')
                imgRightSide.classList.remove('appear')
                setTimeout(()=>{pRightSide.style.display = 'none'})
                void pRightSide.offsetWidth
                void imgRightSide.offsetWidth
                pRightSide.classList.add('fade')
                imgRightSide.classList.add('fade')
            }
            else {
                pRightSide.style.display = 'block'
                pRightSide.classList.remove('fade')
                imgRightSide.classList.remove('fade')
                void pRightSide.offsetWidth
                void imgRightSide.offsetWidth
                pRightSide.classList.add('appear')
                imgRightSide.classList.add('appear')
                orderContainer.classList.remove('appear')
                void orderContainer.offsetWidth
                orderContainer.classList.add('fade')
                setTimeout(() => { orderContainer.style.display = 'none' }, 500)
            }
        }
    }
})
