import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    .header {
        display: flex;
        width: 363px;
        height: 44px;
        padding-left: 12px;
        z-index: 99;
        top: 0;
        left: 0;
        right: 0;
        margin: 0;
        position: fixed;
        align-items: center;
        .header-sousuo {
            position: relative;
            .header-sousuo i {
                position: absolute;
                
            }
            .header-sousuo span {
                position: absolute;
            }
        }
    }
`