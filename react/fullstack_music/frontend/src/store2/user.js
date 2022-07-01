let defaultState ={
    users: [
        {id: 1, name: 'John', bio: '加油'},
        {id: 2, name: 'll', bio: '加油123'}
    ],
    banners: [
        {id: 1, img: 'xx.jpg'},
        {id: 2, img: 'xx.jpg'}
    ],
    list: [
        {id: 1, img: 'xx.jpg', title: ''},
        {id: 2, img: 'xx.jpg', title: ''}
    ]
}

const reducer = (state=defaultState) => {
    return state
}

export default reducer