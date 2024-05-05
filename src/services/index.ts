import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  params: {
    inc: 'name,email,phone,gender,picture,location,nat',
  },
})

export default instance
