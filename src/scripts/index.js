import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../scripts/restaurant-list'
import data from '../DATA.json'

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const navLink = document.querySelectorAll('.nav-link')

hamburger.addEventListener('click', mobileMenu)
navLink.forEach((n) => n.addEventListener('click', closeMenu))

function mobileMenu() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
}

function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
}

const restaurantList = document.querySelector('.restaurant__list')
data.restaurants.forEach((restaurant) => {
  const element = document.createElement('restaurant-list')
  element.setAttribute('id', restaurant.id)
  element.setAttribute('name', restaurant.name)
  element.setAttribute('picture', restaurant.pictureId)
  element.setAttribute('location', restaurant.city)
  element.setAttribute('rating', restaurant.rating)
  element.setAttribute('description', restaurant.description)

  restaurantList.appendChild(element)
})
