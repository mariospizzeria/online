//menu button
const storage = window.localStorage
const menu = document.querySelector('#order')
menu.addEventListener('click', () => {
    storage.clear()
    window.location.href = ('./menu/index.html')
})