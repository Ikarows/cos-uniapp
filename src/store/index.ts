import { defineStore } from 'pinia'

export const auth = defineStore('auth', {
  state: () => {
    return {
      todo: '111111111111',
      token: ''
    }
  },

  getters: {},

  actions: {}
})
