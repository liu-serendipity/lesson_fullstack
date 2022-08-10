import { axiosInstance } from './config'

export const addComment = () => {
    const p = axiosInstance.post('/test/comment')
    return p
}