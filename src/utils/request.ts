import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { getToken, setToken } from './cookie'
import type { Data } from '@/types/request'
const server = axios.create({
  baseURL: 'https://api-hmzs.itheima.net/v1',
  timeout: 10000
})

// 请求拦截器
server.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    setToken(
      'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2tleSI6ImIxZmMxNDVhLTY4NmUtNDQ2ZS04ZjRhLWVmNmU3MTFhNGQ4OSJ9.TboCQ2WbaJ7CGIU_DWpNNyBA1EyiH1zSle-WqmJXnsWdpVhSzfeGuczS7RzijxGULPeV0tmtg0F4VQTVMsa5LA'
    )
    //请求头发送
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data
  },
  (error) => {
    return Promise.reject(error)
  }
)
const request = <T>(url: string, method: Method, submitData?: object) => {
  return server.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}

export default request
