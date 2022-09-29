const items = [{
        name:'Первый зал',
        img: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg'
    },
    {
        name:'Второй зал',
        img: 'https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/142467830/original/1d3a089a3f8abbe617b52c05c4031dbb3a722f7d/create-high-quality-hotel-speciality-restaurant.jpg'
    },
    {
        name:'Третий зал',
        img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80'
    },
    {   
        name:'Четвертый зал',
        img: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?cs=srgb&dl=pexels-pixabay-260922.jpg&fm=jpg'
    }
]


const modalFunc = (items) => {
    const button = document.querySelector('.cover__button')
    const modalCloseButton = document.querySelector('.modalCloseButton')
    const modal = document.querySelector('.modal')
    const backdrop = document.querySelector('.backdrop')
    const content = document.querySelector('.modalContent')

    button.addEventListener('click', () => {
        modal.classList.add('modalActive')
        backdrop.classList.add('backdropActive')
        showContent(items)
    })

    const removeClasses = () => {
        content.innerHTML = ''
        modal.classList.remove('modalActive')
        backdrop.classList.remove('backdropActive')
    }

    modalCloseButton.addEventListener('click', removeClasses)

    backdrop.addEventListener('click', removeClasses)

    modal.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    const showContent = (images) => {
        images.forEach(el => {
            const img = document.createElement('div')
            const text = document.createElement('p')
            img.className = 'contentImg'
            text.className = 'contentText'
            img.style.backgroundImage = `url('${el.img}')`
            text.textContent = `${el.name}`
            content.append(img,text)
        })
    }

}
modalFunc(items)



// const timer = () =>{
//     alert('timer has started');
// }
// setTimeout(timer,4000)