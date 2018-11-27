const axios = require('axios')
const url = 'https://comicscore.herokuapp.com/comics/'

const create = (review) => axios.post(url, review)
const read = () => axios.get(url)
const readOne = (id) => axios.get(url + id)
const remove = (id) => axios.delete(url + id)

const update = (id, title, imgurl, rating, review) => {
  const entry = { title, imgurl, rating, review }
  return axios.patch(url + id, entry)
}

module.exports = { create, read, readOne, update, remove }
