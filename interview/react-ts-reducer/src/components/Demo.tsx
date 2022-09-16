import React from "react"

interface UserState {
    name: string;
    lastname: string
}

interface Action {
    type: string;
    data: any
}

const actionIds = {
    setName: "setName",
    setLastname: "setLastname"
}

const userInfoReducer = (state:UserState, action:Action):UserState => {
    switch(action.type) {
        case actionIds.setName:
            return {
                ...state,
                name: action.data
            }
        case actionIds.setLastname:
            return {
                ...state,
                lastname: action.data
            }
        default:
            return state
    }
}

interface Props {
    name: string;
    dispatch: React.Dispatch<Action>
}

const EditUsername:React.FC<Props> = React.memo((props) => {
    return (
        <input
            value={props.name}
            onChange={(e) => props.dispatch({type: actionIds.setName, data: e.target.value})}
        />
    )
})

// 消费数据
// redux reducer  useReducer 函数式编程
const Demo = () => {
    // 读的状态
    // dispatch 能力
    // 初始值
    const [userInfo, dispatch] = React.useReducer(userInfoReducer, {
        name: "john",
        lastname: "Doe"
    })
    return (
        <div>
            <h3>
                {userInfo.name} {userInfo.lastname}
                <EditUsername name={userInfo.name} dispatch={dispatch} />
                <input 
                    value={userInfo.lastname}
                    onChange={(e) => dispatch({type: actionIds.setLastname, data: e.target.value})}
                />
            </h3>
        </div>
    )
}

export default Demo