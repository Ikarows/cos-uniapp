import axios from 'axios'
import { useAuthStore } from '@/store'

axios.defaults.baseURL =
  (process.env.NODE_ENV === 'development' ? 'https://xxx.com' : 'https://xxx.com') +
  '/api'

axios.interceptors.request.use(
  (config: any) => {
    const token = uni.getStorageSync('token')
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res: any) => {
    if (res.data) {
      if (res.data.code === 401) {
        const authStore = useAuthStore()
        authStore.logout()
        return Promise.reject(res.data)
      }
      if (res.data.code === 0 || res.data.code === 200) {
        return res.data
      }
      uni.showToast({ title: res.data.message || '请求失败', icon: 'none' })
      return Promise.reject(res.data)
    }
    return Promise.reject(res.data)
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          uni.reLaunch({ url: '/pages/login/login' })
          break
        case 403:
          uni.showToast({ title: '暂无权限', icon: 'none' })
          break
        case 500:
          uni.showToast({ title: '服务器异常', icon: 'none' })
          break
        default:
          uni.showToast({ title: error.response.data?.message || '网络错误', icon: 'none' })
      }
    } else {
      uni.showToast({ title: '网络连接失败', icon: 'none' })
    }
    return Promise.reject(error)
  }
)

axios.defaults.adapter = function (config: any) {
  return new Promise((resolve, reject) => {
    let url = config.baseURL + config.url
    if (config.params) {
      const query = Object.keys(config.params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(config.params[key])}`)
        .join('&')
      url += (url.includes('?') ? '&' : '?') + query
    }

    const token = uni.getStorageSync('token')
    const header: any = { ...config.headers }
    if (token) {
      header['Authorization'] = `Bearer ${token}`
    }

    uni.request({
      method: config.method.toUpperCase(),
      url: url,
      header: header,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function (response: any) {
        const res = {
          data: response.data,
          status: response.statusCode,
          statusText: response.errMsg,
          header: response.header,
          config: config,
          request: response
        }
        if (!res.status || res.status < 200 || res.status >= 300) {
          const error: any = new Error('Request failed with status code ' + res.status)
          error.response = res
          error.config = config
          reject(error)
        } else {
          resolve(res)
        }
      }
    })
  })
}

export default axios
