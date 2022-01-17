const root = document.querySelector(':root')
const storage = window.localStorage
const numToppings = JSON.parse(storage.getItem('toppings')).thing.length
root.style.setProperty('--num', numToppings)
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

function makeDivs(num) {
    for(i = 0; i < num; i++) {
        div = document.createElement('div')
        price = document.createElement('div')
        div.classList.add('toppingName')
        price.classList.add('toppingPrice')
        div.style.gridRow = 5  + i
        price.style.gridRow = 5 +i
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

makeDivs(numToppings)

const sides = document.querySelector('#sides')
const purchase = document.querySelector('#purchase')
const invis = document.querySelector('#invis')
purchase.style.gridRow = 6 + numToppings
invis.style.gridRow = 7 + numToppings

const totalPrice = document.querySelector('#totalPrice')
const total = document.querySelector('#total')
sides.style.gridRow = 6 + numToppings
totalPrice.style.gridRow = 5 +numToppings
total.style.gridRow = 5 + numToppings

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
    return cost
}

totalPrice.innerText = "$" + calcTotal()

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.location.href = ('../index.html')
})