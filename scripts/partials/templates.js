const header = () => {
  return `
    <nav class="indigo">
      <div class="nav-wrapper container">
        <a href="/" class="brand-logo">
          Comic<span class="bold">Score</span> <i class="material-icons">local_activity</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="./ratings.html">
              <i class="tiny material-icons">folder_special</i> See All Ratings
            </a>
          </li>
          <li class="active">
            <a href="./add-ratings.html">
              <i class="tiny material-icons">star</i> Add a Rating
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
        <strong>&copy; 2018 ComicScore</strong> by <a href="https://katrina.surge.sh" target="_blank">Katrina Banana</a>
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

const newRating = ({ id, date, author, title, content }) => {
  return `
    <article class="post" data-id="${ id }">
      <h2 class="title has-text-danger">${ title }</h2>
      <div class="date has-text-grey">date: ${ date }</div>
      <div class="author has-text-grey">posted by: ${ author }</div>
      <div class="content"><p>${ content }</p></div>
      <a class="edit-post has-text-primary">Edit</a>
      <a class="delete-post has-text-primary">Delete</a>
      <hr>
    </article>
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

const recentPost = ({ id, title }) =>
 ` <li class="post-link" data-pid="${ id }"><a class="link">${ title }</a></li>`

module.exports = { header, footer, form, newRating, editRating }
