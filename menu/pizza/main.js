const macncheese = document.querySelector('#macncheese')
const none = document.querySelector('#none')
const pizza = document.querySelector('#pizza')
const storage = window.localStorage

macncheese.addEventListener('click', () => {
    macncheese.classList.add('grayfill')
    none.classList.remove('grayfill')
    pizza.classList.add('fade')
    setTimeout(() => {
        pizza.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931800096364982302/mac_and_cheese_pizza_3-4_b.png'
        setTimeout(() => {
            pizza.classList.remove('fade')
        }, 250);
    }, 250);
})

none.addEventListener('click', () => {
    none.classList.add('grayfill')
    macncheese.classList.remove('grayfill')
    pizza.classList.add('fade')
    setTimeout(() => {
        pizza.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931799193616539708/new-york-style-pizza-and-subs.png'
        setTimeout(() => {
            pizza.classList.remove('fade')
        }, 250);
    }, 250);
})

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.open('../../index.html')
})

const customize = document.querySelector('#customize')
customize.addEventListener('click', () => {
    if (none.classList.contains('grayfill')) {
        storage.setItem('pizzaType', 'normal')
        console.log(storage.getItem('pizzaType'))
    } else {
        storage.setItem('pizzaType', 'macncheese')
        console.log(storage.getItem('pizzaType'))
    }
    window.open('../customize')
})