import React, { useState, useEffect } from 'react';
import { Wrapper } from './style'
import { AddOutline, CheckOutline } from 'antd-mobile-icons'

const Header = () => {
    const [addguanzhu, setAddguanzhu] = useState(false)
    const onadd = () => {
        setAddguanzhu(!addguanzhu)
    }
    return (
        <Wrapper>
            <div className="user_info_wrap">
                <div className="user_head_img_wrap">
                    <img src="https://dimg04.c-ctrip.com/images/0Z83p120009gcozr9F4B5_C_180_180.jpg" alt="" className="user_head_img" />
                    <img src="https://dimg04.c-ctrip.com/images/0104h1200082xud8qB94B.png" alt="" className="user_head_vicon" />
                </div>
                <div className="user_text_wrap">
                    <div className="user_name_and_tag">
                        <span className="user_text_name">佩奇青春环游记~</span>
                    </div>
                    <div className="user_text_job">
                        <div className="user_text_job_name">酒店名宿体验师</div>
                        <div className="user_text_describe">268人关注了TA</div>
                    </div>
                </div>
                {
                    !addguanzhu &&
                    <div className="user_btn_wrap" onClick={() => onadd()}>
                        <AddOutline style={{width:10, height:10, marginRight: 4}} />
                        <span className="btn_follow_text">关注</span>
                    </div>
                }
                {
                    addguanzhu &&
                    <div className="user_btn_wrap" onClick={() => onadd()} >
                        <CheckOutline style={{width:8, height:8, marginRight: 3}} />
                        <span className="btn_follow_text" style={{fontSize:1}}>已关注</span>
                    </div>
                }
            </div>
        </Wrapper>
    )
}

export default Header