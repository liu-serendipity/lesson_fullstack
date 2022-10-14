import React, { useState, useEffect, useReducer, useContext, useRef } from 'react'
// useReducer -> 表单校验工作
import AuthContext from '../../store/auth-context'
// 最古老的react css 模块化的写法
// css 模块化解决组件样式污染全局或被其他样式影响 hash类名
// .jsx + .css 文件架构
// styled-components 高级些，UI语义化
import classes from './Login.module.css'
import Card from '../UI/Card/Card'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
// useReducer 负责校验和标准化操作，交给context共享
const emailReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return { value: action.val, isValid: action.val.includes('@') }
        case 'INPUT_BLUR':
            return { value: state.value, isValid: state.value.includes('@') }
        default:
            return { value: '', isValid: false }
    }
}

const passwordReducer = (state, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            return { value: action.val, isValid: action.val.trim().length > 6 }
        case 'INPUT_BLUR':
            return { value: state.value, isValid: state.value.trim().length > 6 }
        default:
            return { value: '', isValid: false }
    }
}

const Login = props => {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const authCtx = useContext(AuthContext)

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })

    const {isValid: emailIsValid} = emailState
    const {isValid: passwordIsValid} = passwordState

    const emailChangeHandler = event => {
        dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
    }
    const validateEmailHandler = () => {
        dispatchEmail({ type: 'INPUT_BLUR'})
    }

    const passwordChangeHandler = event => {
        dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
    }
    const validatePasswordHandler = () => {
        dispatchPassword({ type: 'INPUT_BLUR'})
    }

    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        setFormIsValid(emailIsValid && passwordIsValid)
    }, [emailIsValid, passwordIsValid])

    const submitHandler = event => {
        event.preventDefault()
        if (formIsValid) {
            authCtx.onLogin(emailState.value, passwordState.value)
        } else if (!formIsValid) {
            emailInputRef.current.focus()
        } else {
            passwordInputRef.current.focus()
        }
    }

    return (
        // 挺别扭
        // styled-components 可以封装 div+css
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input 
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input 
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <div className={classes.actions}>
                    <Button type="submit" classname={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default Login