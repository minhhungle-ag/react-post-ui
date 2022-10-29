import axiosClient from './axiosClient'

export const commentApi = {
  getAll(params) {
    return axiosClient.get('/comments', { params })
  },

  add(data) {
    return axiosClient.post('/comments', data)
  },
}
