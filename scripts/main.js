const { renderHomepage, renderRatings, addForm } = require('./partials/render')
const { create, read } = require('./partials/reviews')
const { notify, eventListener } = require('./partials/utils')

const collections = document.querySelector('.collection')
const carousel = document.querySelector('.carousel')

const addRating = document.querySelector('.add-rating')
if (addRating) addForm(addRating)

eventListener('#image_url', 'input', (e) => {
  const img = document.querySelector('.comic-image img')
  img.setAttribute('src', `${e.target.value}`)
  console.log(img)
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
    .then(response => notify('.notice', 'Your review has been added! Hooray!', 1500))
    .catch(error => notify('.notice', 'All Fields are Required', 2000))
  e.target.reset()
})
eventListener('.reset', 'click', () => window.location.reload(true))

// const foo = document.querySelector('#edit-form')

// if (foo) {
//   foo.addEventListener('submit', (e) => {
//     e.preventDefault()
//     console.log(`success`)
//     const id = e.target.parentElement.getAttribute('data-id')
//     const title = e.target.comic_title.value
//     const url = e.target.image_url.value
//     const rating = e.target.review.value
//     const review = e.target.comment.textContent

//     update(id, title, url, rating, review)
//     // readOne(id).then(response => renderRatings(container, response.data))
//     read().then(response => renderRatings(collections, response.data))
//     // .catch(error => notify('.notice', 'exceeded character limit', 2000))
//   })
// }


if (carousel) read().then(response => renderHomepage(carousel, response.data))
if (collections) read().then(response => renderRatings(collections, response.data))
