const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.open('../index.html')
})

const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')

card1.addEventListener('click', () => {
    window.open('../menu/pizza')
})

card2.addEventListener('click', () => {
    window.open('../menu/toppings')
})

card3.addEventListener('click', () => {
    window.open('../menu/sides')
})