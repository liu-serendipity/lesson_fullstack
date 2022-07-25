import { Video } from '@/models/index'

// const videos:Video[] = [
//     {
//         id: 1,
//         name: 'api后端服务的单点入口文件 src/main.tsx',
//         pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
//     },
//     {
//         id: 2,
//         name: 'api后端服务的单点入口文件 src/main.tsx',
//         pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
//     },
//     {
//         id: 3,
//         name: 'api后端服务的单点入口文件 src/main.tsx',
//         pic: 'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg'
//     }
// ]

export const getVideosRequest = ():Promise<Video[]> => {
    const p = new Promise<Video[]>((resolve, reject) => {
        // setTimeout(() => {
        //     resolve(videos)
        // }, 1000)
        fetch('http://localhost:3300/getVideos')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    })
    return p
}

export const getHotwordRequest = ():Promise<any[]> => {
    const p = new Promise<any[]>((resolve, reject) => {
        fetch('http://localhost/search/hotword')
            .then(data => data.json())
            .then(data => {
                console.log(data);
                resolve(data)
            })
    })
    return p
}