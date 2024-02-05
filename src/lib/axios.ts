import axios from 'axios'

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  headers: {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${import.meta.env.VITE_GH_TOKEN}`,
    'X-GitHub-Api-Version': '2022-11-28',
  },
})

export { instance as axios }