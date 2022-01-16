const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.open('../index.html')
})

const btn = document.querySelector('#makePizza')
btn.addEventListener('click', () => {
    btn.classList.toggle('fill')
    setTimeout(() => {
        btn.innerText = ''
    }, 50);
    setTimeout(() => {
        window.open('../menu/pizza')
    }, 2500);
})