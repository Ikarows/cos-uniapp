import { defineStore } from 'pinia'

export interface UserInfo {
  id: number
  name: string
  phone: string
  org_id: number
  org_name: string
  department_id: number
  department: string
  avatar_url: string
  role: string
}

export const companyInfo = {
  name: 'xxx科技有限公司',
  shortName: '智能手环',
  phone: '400-888-9999',
  email: 'xxx@example.com',
  privacyEmail: 'privacy@example.com',
  address: '深圳市南山区科技园南区数字大厦18层',
  postcode: '518000',
  copyrightYear: '2026',
  copyrightText: ''
}

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: uni.getStorageSync('token') || '',
      userInfo: (uni.getStorageSync('userInfo') || null) as UserInfo | null
    }
  },

  getters: {
    isLoggedIn: state => !!state.token
  },

  actions: {
    setToken(token: string) {
      this.token = token
      uni.setStorageSync('token', token)
    },

    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
      uni.setStorageSync('userInfo', JSON.stringify(userInfo))
    },

    logout() {
      this.token = ''
      this.userInfo = null
      uni.removeStorageSync('token')
      uni.removeStorageSync('userInfo')
      uni.reLaunch({ url: '/pages/login/login' })
    }
  }
})
