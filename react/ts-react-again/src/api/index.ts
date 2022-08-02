// 约束后台数据需要实现MemberEntity接口
import { MemberEntity } from '../model'
// AxiosResponse 类型声明 
import Axios, { AxiosResponse } from 'axios'

const githubURL = "https://api.github.com"
const githubMembersUrl = `${githubURL}/orgs/lemoncode/members`
// ts bug 驱动代码
// Promise 接口<T>
export const getMembersCollection = ():Promise<MemberEntity[]> => {
    const promise = new Promise<MemberEntity[]>((resolve, reject) => {
        try {
            Axios.get<MemberEntity[]>(githubMembersUrl).then(response => resolve(mapMemberListApiToModel(response)))
        } catch(e) {
            reject(e)
        }
    })
    return promise
}

const mapMemberListApiToModel = ({ data }:AxiosResponse<MemberEntity[]>) => data.map(githubMember => ({
    id: githubMember.id,
    login: githubMember.login,
    avatar_url: githubMember.avatar_url
}))

// baseURL
// 前端，沟通经验，接口地址和方法，更加的自信
// - 界面需要的数据，格式，前端是清楚的
// - 先使用fastmock等工具，mock一下，得到假数据
// - 不依赖于后端接口, 先把前端功能实现
// - url 切换成 后端开发完后 真正数据所在的url
// 前后端分离