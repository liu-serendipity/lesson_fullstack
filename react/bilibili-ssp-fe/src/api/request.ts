import { axiosInstance } from './config'
import { 
    PartitionType,
    createPartitionTypes
} from '@/models'
import {
    URL_PARTITION,
    URL_RANKING_PARTITIONS,
    URL_RANKING
} from './url'

export const getPartitionsRequest = ():Promise<PartitionType[]> => {
    const promise = new Promise<PartitionType[]>((resolve, reject) => {
        try {
            axiosInstance.get(URL_PARTITION).then(
                response => resolve(mapPartitionListToModel(response))
            )
        } catch (err) {
            reject(err)
        }
    })
    return promise
}

const mapPartitionListToModel = ({data}:any):PartitionType[] => {
    const partitions = data["0"];
    let oneLevels =  createPartitionTypes(partitions);
    oneLevels = oneLevels.filter((partition) => 
        [13, 23, 11, 177].indexOf(partition.id) === -1);
    return oneLevels;
}

export const getRankingPartitionsRequest = () => 
    axiosInstance.get(URL_RANKING_PARTITIONS)

export const getRankingRequest = (rId:string) => {
    let url = `${URL_RANKING}/${rId}`
    return axiosInstance.get(url)
}