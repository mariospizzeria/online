const storage = window.localStorage
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.open('../../index.html')
})

document.querySelectorAll('.topping').forEach(topping => {
    topping.addEventListener('click', () => {
        if(topping.classList.contains('redify')) {
            topping.classList.toggle('redify')
        } else {
            topping.classList.toggle('redify')
        }
    })
})