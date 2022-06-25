import React from 'react';
import { Wrapper } from './style'

const Content = ({content}) => {
    // console.log(content);
    let contents = [].concat(...content.map(item => item.contents));
    // console.log(contents);
    return (
        <Wrapper>
            <div className="content detail_content_wrap"></div>
        </Wrapper>
    )
}

export default Content