import React, { useState, useEffect } from 'react';
// import { } from './style'
import CitySelect from './CitySelect'
import { useSearchParams } from 'react-router-dom'
import { getBanners } from '../../api/request'
import Banners from './Banners'

const Home = () => {
    const [search] = useSearchParams()
    const cityName = search.get('name') || ''
    // console.log(cityName);
    const [banners, setBanners] = useState([])
    useEffect(() => {
        (async () => {
            let { data } = await getBanners()
            setBanners(data)
        })()
    })
    return (
        <div>
            <CitySelect cityName={cityName}/>
            {/* banner业务 */}
            <Banners banners={banners}/>
        </div>
    )
}

export default Home