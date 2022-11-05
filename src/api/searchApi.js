import axiosClient from './axiosClient'

export const searchApi = {
  getAll(params) {
    return axiosClient.get('/search', { params })
  },
}
