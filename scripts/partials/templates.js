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
    <div class="comic-image valign-wrapper col s12 m5">
      <img src="https://imgplaceholder.com/450x600/ffffff/eeeeee/fa-image" alt="Cover Image">
    </div>
    <form id="form" class="form col s12 m7">
      <h3>Love it? Hate it? Rate it!</h3>

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
        <textarea id="review_comment" class="materialize-textarea" data-length="1000" required></textarea>
        <label for="review_comment">Rating Comment/Review</label>
      </div>

      <div class="input-field">
        <input class="submit btn indigo" type="submit">
        <input class="reset btn red" type="reset">
      </div>
      <p class="hidden notice teal white-text center-align"></p>
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
          <p>${ review.slice(0, 150) }... <a href="./ratings.html" class="red-text">Learn More</a></p>

        </div>
      </div>
    </div>
  `
}

const moreReviews = ({ id, title, url, rating, review }) => {
  return `
  <div class="item col s12 m6 l3">
    <div class="card hoverable" data-id="${ id }">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="${ url }" alt="${ title }">
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
    <div class="collection-item row" data-id="${ id }">
      <div class="valign-wrapper col s12 m2">
        <img src="${ url }" alt="${ title }">
      </div>
      <div class="details col s12 m9">
        <h4>${ title }</h4>
        <p>${ starRating(rating) }</p>
        <p>${ review.slice(0, 200) }...</p>
      </div>
      <a class="btn waves-effect waves-light green detail">Details</a>
      <a class="btn waves-effect waves-light indigo edit">Edit</a>
      <a class="btn waves-effect waves-light red delete">Delete</a>
    </div>
  `
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
        <a class="btn waves-effect waves-light green" href="./ratings.html">Back to Ratings</a>
      </div>
    </div>
  `
}

const editReview = ({ id, title, url, rating, review }) => {
  return `
    <div class="editing" data-id=${ id }>
      <div class="comic-image col s12 m5"><img src="${ url }" alt="${ title }"></div>
      <form id="edit-form" class="form col s12 m7">
        <h3>Editing ${ title }</h3>

        <div class="input-field">
          <label for="comic_title">Title</label>
          <input id="comic_title" type="text" data-length="50" class="validate" value="${ title }" required>
          <span class="helper-text" data-error="oops! something is wrong..." data-success="looking good!">example: Amazing Spiderman #1</span>
        </div>

        <div class="input-field">
          <input id="image_url" type="url" pattern="(http:)([/|.|\\w|\\s|-])*\\.(?:jpg|gif|png)" class="validate" value="${ url }" required>
          <label for="image_url">Image URL</label>
          <span class="helper-text" data-error="please use a valid image URL" data-success="looking good!"></span>
        </div>

        <div class="input-field">
          <input id="review" type="number" data-length="1" class="validate" value="${ rating }" required>
          <label for="review">Rating</label>
        </div>

        <div class="input-field">
          <textarea id="comment" class="materialize-textarea" data-length="1000" required>${ review }</textarea>
          <label for="comment">Rating Comment/Review</label>
        </div>

        <div class="input-field">
          <input class="btn indigo" type="submit">
        </div>
      </form>
    </div>
  `
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
