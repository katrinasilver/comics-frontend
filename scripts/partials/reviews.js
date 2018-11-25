const axios = require('axios')
const url = 'https://comicscore.herokuapp.com/comics/'

const create = (review) => axios.post(url, review)
const read = () => {
  // if (limit > 0)
    return axios.get(url)
  // else return axios.get(url + `?limit=${limit}`)
}
const readOne = (id) => axios.get(url + id)
const remove = (id) => axios.delete(url + id)

const update = (id, title, url, rating, review) => {
  const entry = { id, title, url, rating, review }
  return axios.patch(url + id, entry)
}

module.exports = { create, read, readOne, update, remove }
