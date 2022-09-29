const telegramApply = () => {

    const form = document.querySelector('#form')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let message = document.querySelector('#inputMessage')
        let number = document.querySelector('#inputNumber')
        let bot = {
            TOKEN: '5686768977:AAHzKg9yZeH1Oej_VCN7pJCL7xAHWThAat8',
            chatID: '-615018646'
        }

        const telegramFetch = () => {
            const sendTelegram = `Имя: ${message.value} и Телефон: ${number.value}`


            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`, {
                method: 'GET'

            }).then(response => {
                alert('Message Success')
            }, error => {
                alert('ERROR')
            })
        }

        if (message.value.length > 1 && number.value.length > 8 && message.value.length < 15 && number.value.length < 15) {

            telegramFetch()
        } else {
            alert('Validation error(name -> min:2 symbol, number -> min: 9 symbols)')
        }
    })

}

telegramApply()






const franchiseApply = () => {
    const feedBack = document.querySelector('#feedBack')

    feedBack.addEventListener('submit', (e) => {
        e.preventDefault()
        let company = document.querySelector('#inputCompany')
        let email = document.querySelector('#inputEmail')
        let phone = document.querySelector('#inputPhone')

        let bot = {
            TOKEN: '5686768977:AAHzKg9yZeH1Oej_VCN7pJCL7xAHWThAat8',
            chatID: '-677556896'
        }

        const telegramFetch = () => {
            const sendTelegram = `Название компании: ${company.value}  Телефон: ${phone.value} Почта: ${email.value}`


            fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendTelegram}`, {
                method: 'GET'

            }).then(response => {
                alert('Message Success')
            }, error => {
                alert('ERROR')
            })
        }

        if (company.value.length > 1 && phone.value.length > 8 && company.value.length < 15 && phone.value.length < 15) {

            telegramFetch()
        } else {
            alert('Validation error(name -> min:2 symbol, number -> min: 9 symbols)')
        }

    })

}

franchiseApply()
// 1)Создать новую группу 
// 2)использовать того же бота
// 3)Сообщения с инпутов должны приходить в новую группу
// 4)Стилизовать блок для заявок, сделать красотулю