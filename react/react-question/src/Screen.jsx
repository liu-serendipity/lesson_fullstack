import { useState } from 'react'
// props 不是自己的，是传过来的
function Screen({logo, showContent}) {
    // console.log(props);
    return (
        <div>
            Screen{logo} {showContent}
        </div>
    )
}

export default Screen