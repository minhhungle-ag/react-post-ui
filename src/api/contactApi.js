import axiosClient from './axiosClient'

export const contactApi = {
  getAll(params) {
    return axiosClient.get('/contacts', { params })
  },

  add(data) {
    return axiosClient.post('/contacts', data)
  },
}
