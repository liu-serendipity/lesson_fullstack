import React, { useState, useEffect } from 'react'

const ContestList = ({listAll}) => {
    // console.log(list);
    return (
        listAll.map(item => <li key={item.id}>{item.name}-{item.type}</li>)
    )
}

export default ContestList