const { starRating } = require('./utils')

const header = () => {
  return `
    <nav class="indigo">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          ComicScore
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="./ratings.html">
              <i class="tiny material-icons">folder_special</i> Current Ratings
            </a>
          </li>
          <li>
            <a href="./add-ratings.html">
              <i class="tiny material-icons">star</i> Add Your Rating
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `
}

const footer = () => {
  return `
    <div class="container footer-copyright">
      <p>
        <strong>&copy; 2018 ComicScore</strong> by <a href="https://katrina.surge.sh" target="_blank">Katrina Agustin</a>
      </p>
    </div>
  `
}

const form = () => {
  return `
    <form id="form" class="form is-hidden">
      <div class="field">
        <label for="post-title" class="label is-1">Title (60 chars. max):
          <input id="post-title" class="input post-title" type="text" name="title" placeholder="What is this about?">
        </label>
        <label for="post-author" class="label is-1">Author (30 chars. max):
          <input id="post-author" class="input author" type="text" name="author" placeholder="Who are you?">
        </label>
        <label for="article" class="label is-1"> Content:
          <textarea id="article" class="textarea post-body" name="article" placeholder="What's on your mind?"></textarea>
        </label>
        <div class="control">
          <input type="submit" class="save button is-link" value="Add Post">
          <input type="button" class="cancel-post button is-link" value="Nevermind!">
        </div>
        <hr>
      </div>
    </form>
  `
}

const carouselCover = ({ id, title, url, rating, review }) => {
  return `
    <div class="card horizontal carousel-item" data-id=${ id }>
      <div class="card-image">
        <img src="${ url }" alt="${ title }">
      </div>
      <div class="card-stack">
        <div class="card-content white">
        <span class="card-title activator">${ title }</span>
        </div>
        <div class="card-action">
          <span class="rating red btn-floating btn-large halfway-fab">${ rating }/5</span>
          <p>${ review }</p>
        </div>
      </div>
    </div>
  `
}

const moreReviews = ({ id, title, url, rating, review }) => {
  return `
  <div class="col s12 m3">
    <div class="card" data-id="${ id }">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${ url }" alt="${title }">
      </div>
      <div class="card-content">
        <span class="card-title activator">${ title }<i class="material-icons right">more_vert</i></span>
        <p>${ starRating(rating) }</p>
      </div>
      <div class="card-reveal">
        <span class="card-title">The Verdict<i class="material-icons right">close</i></span>
        <p>${ review }</p>
      </div>
    </div>

    </div>`
}

const collection = ({ id, title, url, rating, review }) => {
  return `
    <li class="collection-item avatar row" data-id="${ id }">
      <div class="col s12 m1">
        <img src="${ url}" alt="${title }">
      </div>
      <div class="details col s12 m9">
        <span class="title">${ title }</span>
        <p>${ review }</p>
        <p>${ starRating(rating) }</p>
      </div>
      <div class="actions col s12 m1">
        <a href="#" class="edit"><i class="material-icons">edit</i></a>
        <a href="#" class="delete"><i class="material-icons">delete</i></a>
      </div>
    </li>
  `
}

const editRating = ({ id, author, title, content }) => {
  return `
    <article class="post" data-id="${ id }">
      <form class="form">
        <div class="field">
          <label for="title" class="label is-1">Title (60 chars. max):
            <input id="title" class="input post-title" type="text" name="title" value="${ title }" required>
          </label>
          <label for="author" class="label is-1">Author (30 chars. max):
            <input id="author" class="input author" type="text" name="author" value="${ author }" required>
          </label>
          <label for="edit-article" class="label is-1"> Content:
            <textarea id="edit-article" name="article" class="textarea post-body" required>${ content }</textarea>
          </label>
          <div class="control">
            <input type="submit" class="edit button is-link" value="Update Post">
            <input type="button" class="cancel button is-link" value="Nevermind!">
          </div>
          <hr>
        </div>
      </form>
    </article>
  `
}

module.exports = {
  header,
  footer,
  form,
  carouselCover,
  moreReviews,
  collection,
  editRating
}
