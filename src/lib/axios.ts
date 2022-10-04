import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const apiPosts = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})
