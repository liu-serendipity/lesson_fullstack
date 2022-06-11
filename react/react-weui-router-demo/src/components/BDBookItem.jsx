import React from 'react';
import WeUI from 'react-weui';
import Book1 from '../assets/images/book1.jpg'
import { useNavigate } from 'react-router-dom'

const {
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription
} = WeUI

const BDBookItem = () => {
    const navigate = useNavigate()
    const gotoDetail = () => {
        navigate('/detail')
    }
    return (
        <MediaBox type="appmsg" onClick={gotoDetail} > 
            <MediaBoxHeader><img src={Book1} /></MediaBoxHeader>
            <MediaBoxBody>
                <MediaBoxTitle>浪潮之巅</MediaBoxTitle>
                <MediaBoxDescription>
                    一本颠覆人们对信息时代的认识，对创新和创业的理解的好书
                </MediaBoxDescription>
            </MediaBoxBody>
        </MediaBox>
    )
}

export default BDBookItem