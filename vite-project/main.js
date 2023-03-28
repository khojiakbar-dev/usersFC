import axios from "axios"


let container = document.querySelector('.container')
let userND = document.querySelector('.userName')
let dataUs = document.querySelector('.dataUser')


axios.get("http://localhost:3000/users")
  .then(res => {
    if (res.status === 200 || res.status === 201) {
      reload(res.data)
    }
  })


function reload(arr) {
  for (let item of arr) {
    let itemBox = document.createElement('div')
    let name = document.createElement('h2')
    let data = document.createElement('div')
    let company = document.createElement('span')
    let web = document.createElement('span')
    let phone = document.createElement('span')
    let button = document.createElement('button')


    itemBox.classList.add('itemBox')
    name.classList.add('name')
    company.classList.add('company')
    web.classList.add('web')
    phone.classList.add('phone')
    button.classList.add('button')
    data.classList.add('data')

    name.innerHTML = item.name
    company.innerHTML = `Company: ${item.company.name}`
    web.innerHTML = `Website ${item.website}`
    phone.innerHTML = `Phone ${item.phone}`
    button.innerHTML = 'Подробнее'

    container.append(itemBox)
    data.append(company, web, phone)
    itemBox.append(name, data, button)


    button.onclick = () => {
      window.location.assign("/pages/user.html")
    }

    // userND.innerHTML = `User: ${item.id} - ${item.name}`
  }
}







