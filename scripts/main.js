const { renderHomepage, renderEdits, renderRatings, addForm, swapImg } = require('./partials/render')
const { create, read, readOne } = require('./partials/reviews')
const { notify, eventListener } = require('./partials/utils')

const collections = document.querySelector('.collection')
const carousel = document.querySelector('.carousel')
const comic = document.querySelector('.edit-comic')
const addRating = document.querySelector('.add-rating')

if (addRating) {
  addForm(addRating)
  swapImg('.comic-image img')
}

eventListener('#form', 'submit', (e) => {
  e.preventDefault()
  const review = {
    id: '',
    title: e.target.title.value,
    url: e.target.image_url.value,
    rating: e.target.ratings.value,
    review: e.target.review_comment.value
  }
  create(review)
    .then(response => notify('.notice', 'Your review has been added! Hooray!', 1500))
    .catch(error => notify('.notice', 'All Fields are Required', 2000))

  e.target.reset()
  eventListener('.reset', 'click', () => window.location.reload(true))
})

if (comic) readOne(window.location.search.slice(-1)).then(() => renderEdits(comic))
if (carousel) read().then(response => renderHomepage(carousel, response.data))
if (collections) read().then(response => renderRatings(collections, response.data))
