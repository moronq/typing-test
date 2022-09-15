import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://baconipsum.com/api/',
})

export const textAPI = {
  getText() {
    return instance.get<String[]>('?type=all-meat&paras=1')
  },
}
