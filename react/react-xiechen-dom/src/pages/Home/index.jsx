import React from 'react';
import Header from '../../components/Header'
import Tab from '../../components/Tab'
import Main from '../../components/Main'
import { HomeWrapper } from './style'

const Home = () => {
    return (
        <HomeWrapper>
            <Header />
            <Tab />
            <Main />
        </HomeWrapper>
    )
}

export default Home