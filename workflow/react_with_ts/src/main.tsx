import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app';
// 报错 ts好牛逼，ts 可以让 js 更安全
ReactDOM.render(
    <div>
        <App></App>
    </div>,
    document.getElementById('root')
)