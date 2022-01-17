const storage = window.localStorage
const toppingsList = []

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.location.href = ('../../index.html')
})

document.querySelectorAll('.topping').forEach(topping => {
    topping.addEventListener('click', () => {
        if(topping.classList.contains('redify')) {
            topping.classList.toggle('redify')
            toppingsList.splice(toppingsList.indexOf(topping.innerText), 1)
            console.log(toppingsList)
        } else {
            topping.classList.toggle('redify')
            toppingsList.push(topping.innerText)
            console.log(toppingsList)
        }
    })
})

const pizzaImg = document.querySelector('#pizzaImg')
const pizza = document.querySelector('#pizza')

if(storage.getItem('pizzaType') == 'macncheese') {
    pizzaImg.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931800096364982302/mac_and_cheese_pizza_3-4_b.png'
    pizza.innerText = "Mac N' Cheese"
} else if (storage.getItem('pizzaType') == 'normal') {
    pizzaImg.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931799193616539708/new-york-style-pizza-and-subs.png'
    pizza.innerText = 'Normal'
}

const next = document.querySelector('#next')
next.addEventListener('click', () => {
    jsonToppings = {
        thing: toppingsList
    }

    jsonString = JSON.stringify(jsonToppings)
    storage.setItem('toppings', jsonString)
    window.location.href = ('../checkout')
})