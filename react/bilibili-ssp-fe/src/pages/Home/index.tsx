import React, { useEffect } from 'react'
import Header from '@/components/Header'
import { getPartitionsRequest } from '@/api/request'

const Home = () => {
    useEffect(() => {
        getPartitionsRequest()
    })
    return (
        <div>
            <Header />
        </div>
    )
}

export default Home