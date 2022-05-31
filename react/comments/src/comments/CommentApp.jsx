import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
// import './comment.css';
import { Wrapper } from './comment.style';

function CommentApp() {
    return (
        <Wrapper>
            CommentApp
            <CommentInput/>
            <CommentList/>
        </Wrapper>
    )
}

export default CommentApp