import { defineStore } from 'pinia'
import { ResponseApi } from '../@types'
// import instance from '../services/api'

interface State {
  loginId: string
}

export const useLoginStore = defineStore('login', {
  state: (): State => ({
    loginId: 'loginId',
  }),

  getters: {},

  actions: {
    // async signIn(
    //   email: string,
    //   senha: string,
    // ): Promise<{ accessToken?: string; errors?: string[] }> {
    //   const result = await instance.request({
    //     url: '/entrar',
    //     method: 'POST',
    //     data: {
    //       email,
    //       senha,
    //     },
    //   })

    //   if (result.data && result.data.accessToken) {
    //     this.setLoginID(result.data.accessToken)
    //   }

    //   return {
    //     ...result.data,
    //     status: result.status,
    //   }
    // },

    async signIn(
      email: string,
      senha: string,
    ): ResponseApi<{ accessToken: string }> {
      this.setLoginID('loginId')

      console.log('email', email)
      console.log(' senha', senha)

      return {
        ...{ accessToken: 'accessToken' },
        status: 200,
      }
    },

    setLoginID(loginId: string) {
      this.loginId = loginId
    },
  },
})
