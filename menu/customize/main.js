const storage = window.localStorage
const toppings = {}
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const title = document.querySelector('#name')
title.addEventListener('click', () => {
    window.open('../../index.html')
})

class topping {
    constructor(topping) {
        this.toppingName = topping
    }

    code(toppingName) {
        var code = []
        for (var i = 0; i < toppingName.split("").length; i++) {
            for(var j = 0; j < alphabet.length; j++) {
                if(toppingName.split("")[i] == alphabet[j]) {
                    code.push(j+1)
                }
            }
        }
        console.log(code.join(""))
    }
}

const thing = new topping('pineapple')
console.log(thing.code(thing.toppingName))