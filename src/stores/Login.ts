import { defineStore } from 'pinia'
import instance from '../services/api'

interface State {
  loginId: string
}

export const useLoginStore = defineStore('login', {
  state: (): State => ({
    loginId: 'loginId',
  }),
  getters: {
    getLoginId: (store) => {
      return store.loginId
    },
  },
  actions: {
    async signIn(
      email: string,
      senha: string,
    ): Promise<{ accessToken?: string; errors?: string[] }> {
      const result = await instance.request({
        url: '/entrar',
        method: 'POST',
        data: {
          email,
          senha,
        },
      })

      if (result.data && result.data.accessToken) {
        this.setLoginID(result.data.accessToken)
      }

      return {
        ...result.data,
        status: result.status,
      }
    },

    setLoginID(loginId: string) {
      this.loginId = loginId
    },
  },
})
