const { header, footer, form, carouselCover, collection, moreReviews, editRating } = require('./templates')
const { notify, eventListener, starRating } = require('./utils')
const { set, get, reset } = require('./edit')
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

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  const cards = document.querySelectorAll('.card')
  if (!isMobile) M.Carousel.init(container)
  else cards.forEach(c => c.classList.remove('carousel-item'))
}


const renderRatings = (container, reviews) => {
  // let collected = reviews.map(r => collection(r)).reverse()
  let collected = reviews.map(r => r.id === get() ? editRating(r) : collection(r)).reverse()
  container.innerHTML = ''
  container.innerHTML = collected.join('\n')

  eventListener('.delete', 'click', (e) => {
    e.preventDefault()
    let id = e.target.parentElement.getAttribute('data-id')
    remove(id)
      .then(read)
      .then(response => renderRatings(container, response.data))
      // .catch(error => notify('.notice', 'Post cannot be deleted!', 2000)) NEED TO FIX
  })

  // eventListener('.edit-post', 'click', (e) => {
  //   e.preventDefault()
  //   let id = e.target.parentElement.getAttribute('data-id')
  //   set(id)
  //   read().then(response => renderPost(response.data))
  // })


  // eventListener('article > form', 'submit', (e) => {
  //   e.preventDefault()
  //   const id = e.target.parentElement.getAttribute('data-id')
  //   const title = e.target.title.value
  //   const url = e.target.author.value
  //   const review = e.target.article.value

  //   update(id, title, url, rating, review)
  //     .then((response) => {
  //       reset()
  //       return read()
  //     })
  //     .then(response => renderPost(response.data))
  //     .catch(error => notify('#notice', 'exceeded character limit', 2000))
  // })

  // eventListener('.post-link .link', 'click', (e) => {
  //   e.preventDefault()
  //   const id = e.target.parentElement.getAttribute('data-pid')
  //   readOne(id)
  //     .then(response => renderPost(response.data))
  //     .then(response => {
  //       let button = document.createElement('button')
  //       button.classList.add('button', 'view-all')
  //       button.textContent = 'View all posts'
  //       postList.appendChild(button)

  //       eventListener('.view-all', 'click', () => window.location.reload(true))
  //     })
  //     .catch(error => notify('#notice', 'Post not found', 2000))
  // })
}

module.exports = {
  renderHomepage,
  renderRatings,
  addForm
}
