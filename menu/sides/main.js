const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const card3 = document.querySelector('#card3')
const topCards = document.querySelector('#topCards')
const main = document.querySelector('#main')
const titleName = document.querySelector('#titleName')
const image = document.querySelector('#image')
const specials = document.querySelector('#specials')
const sides = {
    soup: ['Broccoli Cheddar', 'Tomato Bisque', 'Minestrone'],
    salad: ['Caesar Salad', 'House Salad'],
    fruit: ['Eggplant', 'Melon', 'Peaches', 'Banana'],
    soupId: ['broccoliCheddar', 'tomatoBisque', 'minestrone'],
    saladId: ['caesarSalad', 'houseSalad'],
    fruitId: ['eggplant', 'melon', 'peaches', 'banana']
}
const back = document.querySelector('#back')
const add = document.querySelector('#customize')
const sidesList = {
    soup: [],
    salad: [],
    fruit: []
}
const checkout = document.querySelector('#checkout')
const storage = window.localStorage

checkout.addEventListener('click', () => {
    jsonString = JSON.stringify(sidesList)
    storage.setItem('sides', jsonString)
    window.location.href = ('../checkout')
})

back.addEventListener('click', () => {
    topCards.classList.toggle('slideBackIn')
    main.classList.toggle('slideBackOut')
    setTimeout(() => {
        Array.from(document.getElementsByClassName("option")).forEach(element => {
            element.remove()
        });
        topCards.style.transform = 'translateX(0%)'
        main.style.transform = 'translateX(100%)'
        topCards.classList.toggle('slideBackIn')
        main.classList.toggle('slideBackOut')
    }, 1000);
})

add.addEventListener('click', () => {
    selected = document.querySelector('.grayfill')
    if(titleName.innerText == 'Soup') {
        sidesList.soup.push(selected.innerText)
    } else if (titleName.innerText == 'Salad') {
        sidesList.salad.push(selected.innerText)
    } else if (titleName.innerText == 'Fruit') {
        sidesList.fruit.push(selected.innerText)
    }
    console.log(sidesList)
})

card1.addEventListener('click', () => {
    topCards.classList.toggle('slideOut')
    main.classList.toggle('slideIn')
    setTimeout(() => {
        topCards.style.transform = 'translateX(-120%)'
        main.style.transform = 'translateX(0%)'
        topCards.classList.toggle('slideOut')
        main.classList.toggle('slideIn')
    }, 1000);
    setTimeout(() => {
        broccoliCheddar = document.querySelector('#broccoliCheddar')
        tomatoBisque = document.querySelector('#tomatoBisque')
        minestrone = document.querySelector('#minestrone')

        broccoliCheddar.addEventListener('click', () => {
            broccoliCheddar.classList.add('grayfill')
            tomatoBisque.classList.remove('grayfill')
            minestrone.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932533498571534416/broccoli-cheddar-soup-quiznos-soups-bowl-dish-meal-food-transparent-png-2927392.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })
    
        tomatoBisque.addEventListener('click', () => {
            tomatoBisque.classList.add('grayfill')
            broccoliCheddar.classList.remove('grayfill')
            minestrone.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932547113571737660/PngItem_215132.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })

        minestrone.addEventListener('click', () => {
            minestrone.classList.add('grayfill')
            broccoliCheddar.classList.remove('grayfill')
            tomatoBisque.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932536623336423444/minestrone.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })
    }, 1500);
    titleName.innerText = 'Soup'
    image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932533498571534416/broccoli-cheddar-soup-quiznos-soups-bowl-dish-meal-food-transparent-png-2927392.png'
    makeDivs('soup')
})
card2.addEventListener('click', () => {
    topCards.classList.toggle('slideOut')
    main.classList.toggle('slideIn')
    setTimeout(() => {
        topCards.style.transform = 'translateX(-120%)'
        main.style.transform = 'translateX(0%)'
        topCards.classList.toggle('slideOut')
        main.classList.toggle('slideIn')
    }, 1000);
    setTimeout(() => {
        caesarSalad = document.querySelector('#caesarSalad')
        houseSalad = document.querySelector('#houseSalad')

        caesarSalad.addEventListener('click', () => {
            caesarSalad.classList.add('grayfill')
            houseSalad.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932548412971319296/Grilled-Chicken-Caesar-Salad-PNG.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })
    
        houseSalad.addEventListener('click', () => {
            houseSalad.classList.add('grayfill')
            caesarSalad.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932549504052375552/2019_Side_HouseSalad.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })

    }, 1500);
    titleName.innerText = 'Salad'
    image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932548412971319296/Grilled-Chicken-Caesar-Salad-PNG.png'
    makeDivs('salad')
})
card3.addEventListener('click', () => {
    topCards.classList.toggle('slideOut')
    main.classList.toggle('slideIn')
    setTimeout(() => {
        topCards.style.transform = 'translateX(-120%)'
        main.style.transform = 'translateX(0%)'
        topCards.classList.toggle('slideOut')
        main.classList.toggle('slideIn')
    }, 1000);
    titleName.innerText = 'Fruit'
    image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932550613529657424/152-1522875_aubergine-png-image-eggplant-png.png'
    makeDivs('fruit')
    setTimeout(() => {
        eggplant = document.querySelector('#eggplant')
        melon = document.querySelector('#melon')
        peaches = document.querySelector('#peaches')
        banana = document.querySelector('#banana')

        eggplant.addEventListener('click', () => {
            eggplant.classList.add('grayfill')
            banana.classList.remove('grayfill')
            melon.classList.remove('grayfill')
            peaches.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932550613529657424/152-1522875_aubergine-png-image-eggplant-png.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })
    
        melon.addEventListener('click', () => {
            melon.classList.add('grayfill')
            banana.classList.remove('grayfill')
            eggplant.classList.remove('grayfill')
            peaches.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932551516064198766/5f3d80d4baddaf43286a5c7a_00296578000003-glamor-glamor7-2020-07-30t17-42-06-iphone-x-quality-90-1-21-1-user-5984ad42a967f880524de2c4-hrux-624478.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })

        peaches.addEventListener('click', () => {
            peaches.classList.add('grayfill')
            banana.classList.remove('grayfill')
            eggplant.classList.remove('grayfill')
            melon.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932552655019053106/7-2-peach-png-pic.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })

        banana.addEventListener('click', () => {
            banana.classList.add('grayfill')
            peaches.classList.remove('grayfill')
            eggplant.classList.remove('grayfill')
            melon.classList.remove('grayfill')
            image.classList.toggle('fade')
            setTimeout(() => {
                image.src = 'https://cdn.discordapp.com/attachments/926567728846864427/932552943012565082/banana_PNG827.png'
                setTimeout(() => {
                    image.classList.toggle('fade')
                }, 250);
            }, 250);
        })
    }, 1500);
})

function makeDivs(item) {
    if(item == 'soup') {
        for(i = 0; i < 3; i++) {
            div = document.createElement('div')
            div.id = sides.soupId[i]
            div.innerText = sides.soup[i]
            if(sides.soupId[i] == 'broccoliCheddar') {
                div.classList.add('grayfill')
            }
            div.classList.add('option')
            specials.appendChild(div)
        }
    } else if (item == 'salad') {
        for(f = 0; f < 2; f++) {
            div = document.createElement('div')
            div.id = sides.saladId[f]
            div.innerText = sides.salad[f]
            if(sides.saladId[f] == 'caesarSalad') {
                div.classList.add('grayfill')
            }
            div.classList.add('option')
            specials.appendChild(div)
        }
    } else if (item == 'fruit') {
        for(j = 0; j < 4; j++) {
            div = document.createElement('div')
            div.id = sides.fruitId[j]
            div.innerText = sides.fruit[j]
            if(sides.fruitId[j] == 'eggplant') {
                div.classList.add('grayfill')
            }
            div.classList.add('option')
            specials.appendChild(div)
        }
    }
}