const root = document.querySelector(':root')
const storage = window.localStorage
const numToppings = JSON.parse(storage.getItem('toppings')).thing.length
if(JSON.parse(storage.getItem('sides'))) {
    var numSides = JSON.parse(storage.getItem('sides')).fruit.length + JSON.parse(storage.getItem('sides')).soup.length + JSON.parse(storage.getItem('sides')).salad.length
    var sidesList = JSON.parse(storage.getItem('sides'))
    root.style.setProperty('--num', numToppings + numSides)
} else {
    root.style.setProperty('--num', numToppings)
}


const main = document.querySelector('#main')

const pizzaImg = document.querySelector('#pizzaImg')
const pizza = document.querySelector('#pizza')
const pizzaCost = document.querySelector('#pizzaCost')

if(storage.getItem('pizzaType') == 'macncheese') {
    pizzaImg.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931800096364982302/mac_and_cheese_pizza_3-4_b.png'
    pizza.innerText = "Mac N' Cheese"
    pizzaCost.innerText = '$19.99'
} else if (storage.getItem('pizzaType') == 'normal') {
    pizzaImg.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931799193616539708/new-york-style-pizza-and-subs.png'
    pizza.innerText = 'Normal'
    pizzaCost.innerText = '$14.99'
}

const sides = document.querySelector('#sides')
sides.addEventListener('click', () => {
    window.location.href = '../sides/index.html'
})

function makeDivs(num) {
    for(i = 0; i < num; i++) {
            div = document.createElement('div')
            price = document.createElement('div')
            div.classList.add('toppingName')
            price.classList.add('toppingPrice')
            div.style.gridRow = 5  + i
            price.style.gridRow = 5 + i
            div.innerText = JSON.parse(storage.getItem('toppings')).thing[i]
            if(num <= 2) {
                price.innerText = 'Free'
            } else {
                if(i == 1 || i == 0) {
                    price.innerText = 'Free'
                } else {
                    price.innerText = "$1.99"
                }
            }
            main.appendChild(div)
            main.appendChild(price)
    }
}

function makeSoups(num) {
    for(i = 0; i < num; i++) {
            div = document.createElement('div')
            price = document.createElement('div')
            div.classList.add('toppingName')
            price.classList.add('toppingPrice')
            div.style.gridRow = 5  + i + numToppings
            price.style.gridRow = 5 + i + numToppings
            div.innerText = sidesList.soup[i]
            price.innerText = '$6.90'
            main.appendChild(div)
            main.appendChild(price)
    }
}

function makeSalads(num) {
    for(i = 0; i < num; i++) {
            div = document.createElement('div')
            price = document.createElement('div')
            div.classList.add('toppingName')
            price.classList.add('toppingPrice')
            div.style.gridRow = 5  + i + numToppings + sidesList.soup.length
            price.style.gridRow = 5 + i + numToppings + sidesList.soup.length
            div.innerText = sidesList.salad[i]
            price.innerText = '$10.00'
            main.appendChild(div)
            main.appendChild(price)
    }
}

function makeFruits(num) {
    for(i = 0; i < num; i++) {
            div = document.createElement('div')
            price = document.createElement('div')
            div.classList.add('toppingName')
            price.classList.add('toppingPrice')
            div.style.gridRow = 5  + i + numToppings + sidesList.salad.length + sidesList.soup.length
            price.style.gridRow = 5 + i + numToppings + sidesList.salad.length + sidesList.soup.length
            div.innerText = sidesList.fruit[i]
            price.innerText = '$3.50'
            main.appendChild(div)
            main.appendChild(price)
    }
}

const purchase = document.querySelector('#purchase')
const invis = document.querySelector('#invis')
const totalPrice = document.querySelector('#totalPrice')
const total = document.querySelector('#total')

if(JSON.parse(storage.getItem('sides'))) {
    makeFruits(sidesList.fruit.length)
    makeSalads(sidesList.salad.length)
    makeSoups(sidesList.soup.length)

    purchase.style.gridRow = 6 + numToppings + numSides
    invis.style.gridRow = 7 + numToppings + numSides
    sides.style.gridRow = 6 + numToppings + numSides
    totalPrice.style.gridRow = 5 +numToppings + numSides
    total.style.gridRow = 5 + numToppings + numSides
} else {
    purchase.style.gridRow = 6 + numToppings
    invis.style.gridRow = 7 + numToppings
    sides.style.gridRow = 6 + numToppings 
    totalPrice.style.gridRow = 5 +numToppings
    total.style.gridRow = 5 + numToppings
}
makeDivs(numToppings)

const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

function calcTotal() {
    cost = 0
    pizzaType = storage.getItem('pizzaType')
    toppings = JSON.parse(storage.getItem('toppings')).thing
    if(pizzaType == 'macncheese') {
        cost = cost + 19.99
    } else if (pizzaType == 'normal') {
        cost = cost + 14.99
    }
    
    if(toppings.length > 2) {
        cost = cost + ((toppings.length - 2) * 1.99)
    }

    if(JSON.parse(storage.getItem('sides'))) {
        cost = cost + (sidesList.soup.length * 6.9)
        cost = cost + (sidesList.salad.length * 10)
        cost = cost + (sidesList.fruit.length * 3.5)
    }
    return roundToHundredth(cost)
}

totalPrice.innerText = "$" + calcTotal()

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.location.href = '../../index.html'
})