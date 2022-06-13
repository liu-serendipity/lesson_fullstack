import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 400px;
    height: 500px;
    .ul {
        display: flex;
    }
    .tab {
        display: inline-block;
        width: 100px;
        flex: 1;
    }
    a{ 
        text-decoration:none !important;
        color:black !important; 
    }
    .current {
        border-bottom: 3px solid red
    }
`