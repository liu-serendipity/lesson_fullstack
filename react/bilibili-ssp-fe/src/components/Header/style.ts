import styled from 'styled-components'
import { px2rem } from '@/assets/global-style'
// 44px 苹果 tabar的高度
export const HeaderWrapper = styled.div`
    height: ${px2rem(28)};
    padding: ${px2rem(8)};
    background-color: #fff;
    .logo {
        display: inline-block;
        width: ${px2rem(62)};
        margin-left: ${px2rem(18)};
    }
    .avatar {
        float: right;
        width: ${px2rem(24)};
        height: ${px2rem(24)};
        margin-right: ${px2rem(12)};
        svg {
            border-radius: 50%;
        }
    }
    .search-icon {
        float: right;
        font-size: ${px2rem(24)};
        margin-right: ${px2rem(24)};
    }
`