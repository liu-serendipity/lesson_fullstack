import React, { useState, useEffect } from 'react'

const ContestTab = () => {
    const [currentTab, setCurrentTab] = useState('all')
    return (
        <>
            <h2>热门赛事</h2>
            <ul className="ul">
                <li className="tab"><a href="javascript:;" className={currentTab=='all' && "current"} onClick={() => setCurrentTab.bind(null, 'all')}>全部</a></li>
                <li className="tab"><a href="javascript:;" className={currentTab=='dj' && "current"}>电竞赛事</a></li>
                <li className="tab"><a href="javascript:;" className={currentTab=='sport' && "current"}>体育赛事</a></li>
            </ul>
        </>
    )
}

export default ContestTab