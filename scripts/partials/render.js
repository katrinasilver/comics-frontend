const { header, footer, form, carouselCover, collection, one, editReview, moreReviews } = require('./templates')
const { notify, eventListener } = require('./utils')
const { read, readOne, remove, update } = require('./reviews')

const nav = document.querySelector('header')
const bottom = document.querySelector('footer')
nav.innerHTML = header()
bottom.innerHTML = footer()

const addForm = (container) => container.innerHTML = form()

const swapImg = (selector) =>
  eventListener('#image_url', 'input', (e) => {
    const img = document.querySelector(selector)
    img.setAttribute('src', `${e.target.value}`)
  })

const renderHomepage = (container, reviews) => {
  let carouselItems = reviews.map(r => carouselCover(r))
  container.innerHTML = ''
  container.innerHTML = carouselItems.reverse().slice(0, 5).join('\n')

  const review = document.querySelector('.more-reviews')
  let reviewContents = reviews.map(r => moreReviews(r))
  review.innerHTML = ''
  review.innerHTML = reviewContents.reverse().slice(5).join('\n')

  setTimeout(() => { M.Carousel.init(container) }, 1000)
}

const renderRatings = (container, reviews) => {
  let collected = reviews.map(r => collection(r)).reverse()
  container.innerHTML = ''
  container.innerHTML = collected.join('\n')

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

const renderEdits = (container) => {

  const params = window.location.search.slice(1)
    .split('&').map(e => e.split('='))
    .reduce((i, e) => ({ ...i, [e[0]]: e[1] }), {})

  readOne(params.id)
    .then(response => {
      container.innerHTML = one(response.data)

      eventListener('.edit', 'click', (e) => {
        e.preventDefault()
        container.innerHTML = editReview(response.data)

        swapImg('.comic-image img')

        eventListener('#edit-form', 'submit', (e) => {
          e.preventDefault()
          const title = e.target.title.value
          const url = e.target.image_url.value
          const rating = e.target.ratings.value
          const review = e.target.review.value

          update(params.id, title, url, rating, review)
          readOne(params.id)
            .then(response => renderEdits(container, response.data))
            .catch(error => error)
        })
      })
    })
    .catch(error => error)
}

module.exports = {
  renderHomepage,
  renderRatings,
  addForm,
  renderEdits,
  swapImg
}
