const { header, footer, form, carouselCover, collection, one, editReview, moreReviews } = require('./templates')
const { notify, eventListener } = require('./utils')
const { get, set, reset } = require('./edit')
const { read, readOne, remove, update } = require('./reviews')

const addForm = (container) => container.innerHTML = form()

const nav = document.querySelector('header')
const bottom = document.querySelector('footer')
nav.innerHTML = header()
bottom.innerHTML = footer()

const renderHomepage = (container, reviews) => {
  let carouselItems = reviews.map(r => carouselCover(r))
  container.innerHTML = ''
  container.innerHTML = carouselItems.reverse().slice(0, 3).join('\n')

  const review = document.querySelector('.more-reviews')
  let reviewContents = reviews.map(r => moreReviews(r))
  review.innerHTML = ''
  review.innerHTML = reviewContents.reverse().slice(3).join('\n')

  M.Carousel.init(container)
}

const renderRatings = (container, reviews) => {
  let collected = reviews.map(r => collection(r)).reverse()
  // let collected = reviews.map(r => r.id === get() ? editReview(r) : collection(r)).reverse()
  container.innerHTML = ''
  container.innerHTML = collected.join('\n')

  eventListener('.detail', 'click', (e) => {
    e.preventDefault()
    let id = e.target.parentElement.getAttribute('data-id')
    readOne(id).then(response => container.innerHTML = one(response.data))
  })

  eventListener('#edit-form', 'submit', (e) => {
    e.preventDefault()
    const id = e.target.parentElement.getAttribute('data-id')
    const title = e.target.comic_title.value
    const url = e.target.image_url.value
    const rating = e.target.review.value
    const review = e.target.comment.textContent

    update(id, title, url, rating, review)
      .then((response) => {
        reset()
        return read()
      })
      .then(response => renderRatings(response.data))
    console.log(`this function is firing`);
    // read().then(response => renderRatings(collections, response.data))
    // .catch(error => notify('.notice', 'exceeded character limit', 2000))
  })


  eventListener('.delete', 'click', (e) => {
    e.preventDefault()
    let id = e.target.parentElement.getAttribute('data-id')
    remove(id)
      .catch(error => notify('.notice', 'Rating cannot be deleted!', 2000))
      .finally(() => {
        read().then(response => renderRatings(container, response.data))
      })
  })
}

module.exports = {
  renderHomepage,
  renderRatings,
  addForm
}
