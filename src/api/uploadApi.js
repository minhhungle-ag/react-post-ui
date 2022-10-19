import axiosClient from './axiosClient'

export const postApi = {
  add(formData) {
    return axiosClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
