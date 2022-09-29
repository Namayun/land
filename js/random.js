
const output = document.querySelector('#outputRandom')
const userRandom = 'https://randomuser.me/api/?results='


const randomAPI = async () => {
    try {
        const url = `${userRandom}${generateRandomUser(2,6)}`
        const request = await fetch(url)
        const response = await request.json()
        renderRandom(response.results);

    } catch (e) {
        alert('error')
    }

}

const renderRandom = (data) => {

    data.forEach(el => {
        const img = document.createElement('img')
        const name = document.createElement('p')
        const age = document.createElement('p')
        const col = document.createElement('div')
        const box = document.createElement('div')
        box.className = 'box'
        box.classList.add('boxRandom')
        col.className = 'col-6'
        img.className = 'imgRandom'
        img.src = `${el.picture.large}`
        name.textContent = `${el.name.title} ${el.name.first} ${el.name.last}`
        age.textContent = `AGE: ${el.dob.age}`

        box.append(img, name, age)
        col.append(box)
        output.append(col)
    })

}

const generateRandomUser = (min,max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
}


setInterval(() => {
    output.innerHTML = ''
    randomAPI()
},10000)