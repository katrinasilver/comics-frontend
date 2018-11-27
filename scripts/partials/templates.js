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
              <i class="tiny material-icons">favorite</i> Ratings
            </a>
          </li>
          <li>
            <a href="./add-ratings.html">
              <i class="tiny material-icons">add</i> Add New
            </a>
          </li>
        </ul>
      </div>
    </nav>`
}

const footer = () => {
  return `
    <div class="container footer-copyright">
      <p>
        <strong>&copy; 2018 ComicScore</strong> by <a href="https://katrina.surge.sh" target="_blank">Katrina Agustin</a>
      </p>
    </div>`
}

const form = () => {
  return `
    <form id="form" class="form col s12 m8">
      <h3>Love it? Hate it? Rate it!</h3>

      <div class="input-field">
        <input id="title" type="text" data-length="50" class="validate" required>
        <label for="title">Title</label>
        <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
      </div>

      <div class="input-field">
        <input id="image_url" type="url" pattern="^(http|https):([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" required>
        <label for="image_url">Image URL</label>
        <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
      </div>

      <label>
        <input name="ratings" value="5" type="radio" checked/>
        <span> <i class="medium material-icons">sentiment_very_satisfied</i> Great</span>
      </label>
      <label>
        <input name="ratings" value="4" type="radio"/>
        <span> <i class="medium material-icons">sentiment_satisfied</i> Good</span>
      </label>
      <label>
        <input name="ratings" value="3" type="radio"/>
        <span> <i class="medium material-icons">sentiment_neutral</i> Okay</span>
      </label>
      <label>
        <input name="ratings" value="2" type="radio"/>
        <span> <i class="medium material-icons">sentiment_dissatisfied</i> Meh...</span>
      </label>
      <label>
        <input name="ratings" value="1" type="radio"/>
        <span> <i class="medium material-icons">sentiment_very_dissatisfied</i> Awful!</span>
      </label>

      <div class="input-field">
        <textarea id="review_comment" class="materialize-textarea" rows="5" required></textarea>
        <label for="review_comment">Rating Comment/Review</label>
      </div>

      <div class="input-field">
        <input class="submit btn indigo" type="submit">
        <input class="reset btn red" type="reset">
      </div>
      <p class="hidden notice teal white-text center-align"></p>
    </form>
    <div class="comic-image valign-wrapper col s12 m4">
      <img src="https://imgplaceholder.com/450x600/ffffff/eeeeee/fa-image" alt="Cover Image">
    </div>`
}

const carouselCover = ({ id, title, url, rating, review }) => {
  return `
  <div class="card carousel-item" data-id=${ id }>
    <div class="card-image">
      <img src="${ url }" alt="${ title }">
    </div>
    <span class="rating green btn-floating btn-large halfway-fab">${ rating }/5</span>
  </div>`
}

const moreReviews = ({ id, title, url, rating, review }) => {
  return `
  <div class="item col s12 m6 l3">
    <div class="card hoverable" data-id="${ id }">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${ url }" alt="${ title }">
      </div>
      <div class="card-content">
        <span class="card-title activator">${ starRating(rating) }<i class="material-icons right">more_vert</i></span>
      </div>
      <div class="card-reveal">
        <span class="card-title">${ title } <i class="material-icons indigo-text right">close</i></span>
        <p>${ review }</p>
      </div>
    </div>
  </div>`
}

const collection = ({ id, title, url, rating, review }) => {
  return `
    <div class="collection-item row" data-id="${ id }">
      <div class="valign-wrapper col s12 m2">
        <img src="${ url }" alt="${ title }">
      </div>
      <div class="details col s12 m9">
        <h4>${ title }</h4>
        <p>${ starRating(rating) }</p>
        <p>${ review.slice(0, 100) }...</p>
      </div>
      <a href="./review.html?id=${ id }"class="btn waves-effect waves-light green detail">Details</a>
      <a class="btn waves-effect waves-light red delete">Delete</a>
    </div>`
}

const one = ({ id, title, url, rating, review }) => {
  return `
  <div class="row" data-id="${ id }">
    <div class="valign-wrapper col s12 m4">
      <img class="z-depth-1" src="${ url }" alt="${ title }">
    </div>
    <div class="col s12 m8">
      <h3>${ title }</h3>
      <p>${ starRating(rating) }</p>
      <p>${ review }</p>
      <a class="btn waves-effect waves-light indigo" href="./ratings.html">Back</a>
      <a href="./review.html?id=${ id }" class="btn waves-effect waves-light green edit">Edit</a>
    </div>
  </div>`
}

const editReview = ({ id, title, url, rating, review }) => {
  return `
  <div class="editing" data-cid=${ id }>
    <form id="edit-form" class="form col s12 m8">
      <h4>Editing ${ title }</h4>

      <div class="input-field">
        <label for="title">Title</label>
        <input id="title" name="title" type="text" data-length="50" class="validate" value="${ title }" required>
        <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
      </div>

      <div class="input-field">
        <input id="url" name="url" type="url" pattern="^(http|https):([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" value="${ url }" required>
        <label for="url">Image URL</label>
        <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
      </div>

      <div class="input-field">
        <input id="rating" name="rating" type="number" data-length="1" class="validate" value="${ rating }" required>
        <label for="rating">Rating</label>
      </div>

      <div class="input-field">
        <textarea id="review" name="review" class="materialize-textarea" rows="5" required>${ review }</textarea>
        <label for="review">Rating Comment/Review</label>
      </div>
      <div class="input-field">
        <input class="btn indigo waves-effect waves-light" type="submit">
        <a class="btn waves-effect waves-light red" href="./ratings.html">Cancel</a>
      </div>
    </form>
    <div class="comic-image col s12 m4"><img src="${ url }" alt="${ title }"></div>
  </div>`
}

module.exports = {
  header,
  footer,
  form,
  carouselCover,
  moreReviews,
  collection,
  one,
  editReview
}
