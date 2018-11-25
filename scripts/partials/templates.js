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
            <a class="btn waves-effect waves-light red" href="./add-ratings.html">
              <i class="tiny material-icons">star</i> Start Rating
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
    <div class="comic-image col s12 m5">
      <img src="https://imgplaceholder.com/450x600/fafafa/eeeeee/fa-image" alt="Cover Image">
    </div>
    <form id="form" class="form col s12 m7">
      <h3>Love it? Hate it? Rate it!</h3>
      <p class="hidden notice amber center-align">Hello</p>

      <div class="input-field">
        <input id="title" type="text" data-length="50" class="validate" required>
        <label for="title">Title</label>
        <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
      </div>

      <div class="input-field">
        <input id="image_url" type="url" pattern="(http:)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" required>
        <label for="image_url">Image URL</label>
        <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
      </div>

      <label for="ratings">Rating</label>
      <select class="browser-default" id="ratings">
        <option value="5"selected>Awesome!!!</option>
        <option value="4">Great!</option>
        <option value="3">It's alright.</option>
        <option value="2">Could be better...</option>
        <option value="1">Just awful!!!</option>
      </select>
      <div class="input-field" required>
        <textarea id="review_comment" class="materialize-textarea" data-length="1000"></textarea>
        <label for="review_comment">Rating Comment/Review</label>
      </div>

      <div class="input-field">
        <input class="btn indigo" type="submit">
        <input class="btn red" type="reset">
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
    <div class="card hoverable" data-id="${ id }">
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
      <a class="btn waves-effect waves-light indigo edit">Edit</a>
      <a class="btn waves-effect waves-light red delete">Delete</a>
    </li>
  `
}

const editRating = ({ id, title, url, rating, review }) => {
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
