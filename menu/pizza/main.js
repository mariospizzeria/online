const macncheese = document.querySelector('#macncheese')
const none = document.querySelector('#none')
const pizza = document.querySelector('#pizza')
const storage = window.localStorage
const text = document.querySelector('#text')

macncheese.addEventListener('click', () => {
    macncheese.classList.add('grayfill')
    none.classList.remove('grayfill')
    pizza.classList.add('fade')
    text.classList.add('fade')
    setTimeout(() => {
        pizza.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931800096364982302/mac_and_cheese_pizza_3-4_b.png'
        text.innerText = "Our Mac N' Cheese special creates a perfect blend between Mac and Cheese and pizza. It has a white cheddar queso base and mozzarella blend. Our Mac N' Cheese is added generously and the pizza is topped off with crispy bacon and flavorful green onions. You can choose any toppings you want on the next page."
        setTimeout(() => {
            pizza.classList.remove('fade')
            text.classList.remove('fade')
        }, 250);
    }, 250);
})

none.addEventListener('click', () => {
    none.classList.add('grayfill')
    macncheese.classList.remove('grayfill')
    pizza.classList.add('fade')
    text.classList.add('fade')
    setTimeout(() => {
        pizza.src = 'https://cdn.discordapp.com/attachments/926567728846864427/931799193616539708/new-york-style-pizza-and-subs.png'
        text.innerText = "At Mike's Pizzeria, our signature pizza has a white sauce with a secret ingredient that has been passed down from generation to generation. On top, there is a thick layer of mozzarella cheese that compliments our sauce perfectly. You can choose any toppings you want on the next page."
        setTimeout(() => {
            pizza.classList.remove('fade')
            text.classList.remove('fade')
        }, 250);
    }, 250);
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
    window.location.href = '../customize'
})

const bigCircle = document.querySelector('#bigCircle')
setTimeout(() => {
    bigCircle.style.width = '0vw'
    bigCircle.style.height = '0vh'
    setTimeout(() => {
        bigCircle.remove()
    }, 200);
}, 1500);