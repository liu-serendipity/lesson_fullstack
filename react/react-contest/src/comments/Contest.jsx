import React, { useState, useEffect } from 'react'
import ContestTab from './ContestTab';
import ContestList from './ContestList';
import { Wrapper } from './comment.style';
import 'weui'
import 'react-weui/build/dist/react-weui.css'
import WeUI from 'react-weui'
import axios from 'axios'

const {
    Toast
} = WeUI;

const Contest = () => {
    const [loading, setLoading] = useState(true);
    const [listAll, setListAll] = useState([]);
    // setTimeout(() => {
    //     setLoading(false);
    // }, 2000)
    useEffect(() => {
        // (async function() {
        //     const result = await fetch('https://www.fastmock.site/mock/cf60839e8e935ccf8e45c671a44a49a3/beers/all')
        //     const data = await result.json()
        //     console.log(data);
        //     const djdata = data.filter(item => item.type === 'dj');
        //     const sportdata = data.filter(item => item.type === 'sport');
        //     console.log(djdata);
            // console.log(sportdata);
        // })()
        axios
            .get('https://www.fastmock.site/mock/cf60839e8e935ccf8e45c671a44a49a3/beers/all')
            .then(res => {
            // console.log(res);
            if (res.data) { 
            setListAll(res.data)
            setLoading(false)
            } else {
            console.log('出问题了...');
            }
        })
    })
    return (
        <Wrapper>
            <ContestTab />
            { listAll.length > 0 && <ContestList listAll={listAll} /> }
            <Toast icon="loading" show={loading}>加载中</Toast>
        </Wrapper>
    )
}
export default Contest