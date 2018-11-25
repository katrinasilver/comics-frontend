const { renderHomepage, renderRatings, addForm } = require('./partials/render')
const { create, read } = require('./partials/reviews')
const { notify, eventListener } = require('./partials/utils')

const addRating = document.querySelector('.add-rating')
if (addRating) addForm(addRating)

const form = document.querySelector('#form')
if (form) {
  eventListener('#image_url', 'input', (e) => {
    const img = document.querySelector('.comic-image img')
    img.setAttribute('src', `${e.target.value}`)
  })

  eventListener('#form', 'submit', (e) => {
    e.preventDefault()

    const review = {
      title: e.target.title.value,
      url: e.target.image_url.value,
      rating: e.target.ratings.value,
      review: e.target.review_comment.value
    }

    create(review)
      .then(read)
      .then(response => notify('.notice', 'Your review has been added! Hooray!', 1500))
      .catch(error => notify('.notice', 'All Fields are Required', 2000)) // NEED TO FIX
    e.target.reset()
  })
}

const carousel = document.querySelector('.carousel')
if (carousel) read().then(response => renderHomepage(carousel, response.data))

const collections = document.querySelector('.collection')
if (collections) read().then(response => renderRatings(collections, response.data))
