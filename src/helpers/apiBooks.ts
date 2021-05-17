import axios from 'axios'

// const baseURL = 'https://www.googleapis.com/books/v1/volumes?q='
const baseURL = 'https://www.googleapis.com/books/v1'

export const api = axios.create({
  baseURL,
})
