const accordion = () => {
    const accordion = document.querySelectorAll('.accordion__box__menu')
    const stopProp = document.querySelectorAll('.accordion__menu__content')


    stopProp.forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation()
        })
    })
    for (let i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', () => {
            accordion.forEach((el, index) => {
                if (i === index) {
                    el.classList.toggle('accordion__active')
                } else {
                    el.classList.remove('accordion__active')
                }
            })
        })
    }

}
accordion()


const secondAcc = () => {
    const accordion = document.querySelectorAll('.accordion__box')

    accordion.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('accordion__active')

        })
    })

}

secondAcc()