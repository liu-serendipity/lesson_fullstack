import styled from "styled-components";

export const Wrapper = styled.div`
    .main {
        padding-bottom: 20px;
        padding-top: 45px;
        .openCtrip_media {
            margin: 10px 12px 0;
            background: #f2f8fe;
            border-radius: 26px;
            border: 1px solid #2598f7;
            line-height: 47px;
            text-align: center;
            color: #0086f6;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            font-weight: 500;
        }
        .publish-button {
            width: 85px;
            height: 90px;
            position: fixed;
            z-index: 11;
            left: 50%;
            margin-left: -42px;
            bottom: 62px;
            background: url(https://pages.c-ctrip.com/you/livestream/lvpai_publish_new_btn.png) no-repeat;
            background-size: 85px 90px;
        }
    }
`