const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.location.href = ('../index.html')
})

const btn = document.querySelector('#makePizza')
btn.addEventListener('click', () => {
    btn.classList.toggle('fill')
    setTimeout(() => {
        btn.innerText = ''
    }, 50);
    setTimeout(() => {
        window.location.href = ('../menu/pizza')
    }, 2500);
})