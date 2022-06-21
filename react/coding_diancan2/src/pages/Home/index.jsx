import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
// import {} from './style'
import CitySelect from './CitySelect'
import Banners from './Banners'
import SetMeal from './SetMeal'
import StoreList from './StoreList'
import StoreInfo from './StoreInfo'
import { getBanners } from '@/api/request'
import { getRestaurants } from '@/api/request'

const Home = () => {
    const [restaurants, setRestaurants] = useState([])
    const [search] = useSearchParams()
    const cityName = search.get('name') || ''
    const [banners,setBanners] = useState([])
    useEffect(() => {
        (async () => {
            let { data:bannerData } = await getBanners()
            let { data:restaurantData } = await getRestaurants()
            setBanners(bannerData)
            setRestaurants(restaurantData)
        })()
    })

    return (
        <div>
            <CitySelect cityName={cityName}/>
            {/* banner业务 */}
            <Banners banners={banners} />
            <SetMeal />
            <StoreList />
            <StoreInfo restaurants={restaurants} />
        </div>
    )
}

export default Home

