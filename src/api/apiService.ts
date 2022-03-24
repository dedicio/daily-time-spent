import axios, { AxiosInstance, AxiosResponse } from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  // withCredentials: true,
})

const responseBody = (response: AxiosResponse) => response.data

const apiService = {
  get: (url: string) => axiosInstance.get(url).then(responseBody),
  post: (url: string, body: {}) => axiosInstance.post(url, body).then(responseBody),
  patch: (url: string, body: {}) => axiosInstance.patch(url, body).then(responseBody),
}

export default apiService