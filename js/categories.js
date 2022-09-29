const categoriesGlobal = () => {

    // const obj = {
    //     burgers:[{},{}],
    //     pizzas:[{},{}],
    //     drinks:[{},{}]
    // }


    const data = {
        burgers: [{
                name: 'super burger',
                img: 'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg',
                price: 100
            },
            {
                name: 'pro burger',
                img: 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg',
                price: 87
            },
            {
                name: 'extra burger',
                img: 'https://mcdonalds.com.au/sites/mcdonalds.com.au/files/MCD_Category_Burgers_375x268.png',
                price: 123
            },
        ],
        pizzas: [{
                name: 'italian pizza',
                img: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg',
                price: 147
            },
            {
                name: 'meat pizza',
                img: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg',
                price: 164
            },

        ],
        drinks: [{
                name: 'pivo',
                img: 'https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg',
                price: 100
            },
            {
                name: 'vino',
                img: 'https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg',
                price: 152
            },
            {
                name: 'vodka',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU',
                price: 2030
            },
            {
                name: 'tequila',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FnYASy60LXK2iwxu01N6oBpKKEwJ4d6DKg&usqp=CAU',
                price: 3004
            },
        ]
    }

    const burgers = data.burgers

    const pizzas = data.pizzas

    const drinks = data.drinks

    const all = [...burgers, ...pizzas, ...drinks]



    const categories = (data) => {
        const output = document.querySelector('.output')
        output.innerHTML = ''
        data.forEach(el => {
            const col = document.createElement('div')
            const box = document.createElement('div')
            const img = document.createElement('img')
            const name = document.createElement('p')
            const price = document.createElement('p')

            col.className = 'col-4'
            box.className = 'categories__box'


            img.src = el.img
            name.textContent = el.name



            box.append(img, name, price)
            col.append(box)
            output.append(col)
        })
    }


    categories(all)

    const butttonsClickRender = () => {
        const buttons = document.querySelectorAll('.btn')
        buttons.forEach(el => {
            el.addEventListener('click', () => {
                if (el.classList.contains('burger')) {
                    categories(burgers)
                } else if (el.classList.contains('pizza')) {
                    categories(pizzas)
                } else if (el.classList.contains('drinks')) {
                    categories(drinks)

                } else {
                    categories(all)

                }

            })
        })


    }

    const colorButtons = () => {
        const buttons = document.querySelectorAll('.btn')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                buttons.forEach((el, index) => {
                    if (i === index) {
                        el.classList.add('btn__active')
                    } else {
                        el.classList.remove('btn__active')
                    }
                })
            })
        }
    }



    // const modalPrice = () => {
       
    //     const img = document.querySelector('.output')
    //     const modalCloseButton = document.querySelector('.modalCLoseButton')
    //     const modal = document.querySelector('.modal')
    //     const backdrop = document.querySelector('.backdrop')
    //     const content = document.querySelector('.modalContent')


    //     img.addEventListener('click', () => {
    //         modal.classList.add('modalActive')
    //         backdrop.classList.add('backdropActive')
    //     })

    //     const removeClasses = () => {
    //         content.innerHTML = ''
    //         modal.classList.remove('modalActive')
    //         backdrop.classList.remove('backdropActive')

    //     }

    //     // modalCloseButton.addEventListener('click', () => {
    //     //     removeClasses()
    //     // })

    //     // backdrop.addEventListener('click', () => {
    //     //     removeClasses()
    //     // })
        
    //     modal.addEventListener('click', (e) => {
    //         e.stopPropagation()
    //     })

    //     const showContent = () => {
    //         const values = Object.values(data)
    //         console.log(values);
    //     }


    // }








    // modalPrice()

    colorButtons()

    butttonsClickRender()



}







categoriesGlobal()