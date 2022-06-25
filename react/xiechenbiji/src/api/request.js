import axios from 'axios'

export const getpersonInfo = () => 
    axios.get('https://www.fastmock.site/mock/4e2b6d3ecc173fb7425348f948f29f96/personInfo/personInfo')

export const getListInfo = () => 
    axios.get('https://www.fastmock.site/mock/4e2b6d3ecc173fb7425348f948f29f96/personInfo/listinfo')

export const getContent = () => 
    axios.get('https://www.fastmock.site/mock/4e2b6d3ecc173fb7425348f948f29f96/personInfo/content')
    