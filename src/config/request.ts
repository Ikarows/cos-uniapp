import axios from 'axios'
import qs from 'qs'
import './http'

// 封装get方法
export function get(url: string, params: any) {
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中...'
    })
    axios
      .get(url, { params })
      .then(res => {
        resolve(res)
        uni.hideLoading()
      })
      .catch(err => {
        reject(err)
        uni.hideLoading()
      })
  })
}
// 封装post方法
export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中...'
    })
    axios
      .post(url, qs.parse(params))
      .then(res => {
        resolve(res)
        uni.hideLoading()
      })
      .catch(err => {
        reject(err)
        uni.hideLoading()
      })
  })
}

// 封装 put方法
export function put(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then(res => {
        resolve(res)
        uni.hideLoading()
      })
      .catch(err => {
        reject(err)
        uni.hideLoading()
      })
  })
}
