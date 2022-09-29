import { defineStore } from 'pinia'
import { ReqParams } from '../../api/user/model'

interface UserState {
    token: string;
    auths: string[];
}

// hooks
export const useUserStore = defineStore({
    id: 'app-user',
    state: (): UserState => ({
        token: '',
        auths: []
    }),
    actions: {
        async login(params: ReqParams) {
            // const res = await fetchApi.login()
        }
    }
})