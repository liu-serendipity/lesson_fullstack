import React, { useState, useEffect, useRef, useCallback} from 'react';
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { getHotKeyWords } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group';
import { Container } from './style'

// useRef DOM 相关
// useCallback 性能优化

const Search = (props) => {
    // 搜索内容  redux 解决共享状态问题
    // 1. 搜索列表 api action redux
    const [query, setQuery] = useState('')
    const { hotList, songsCount } = props
    const { getHotKeyWordsDispatch } = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    useEffect(() => {
        setShow(true)
        if (!hotList.length) {
            getHotKeyWordsDispatch()
        }
    }, [])
    setTimeout(() => {
        setShow(false)
    }, 3000)
    return (
        // 当dom ready 组件挂载上去， 应用css transiiton效果 
        <CSSTransition
            in={show}
            timeout={300}
            appear={true}
            classNames="fly"
            unmountOnExit
            onExit={() => { navigate(-1) }}
        >
            {/* sc-evZas bAobGr fly-enter fly-enter-active */}
            <Container play={songsCount}>
                <div className="search_box_wrapper">

                </div>
            </Container>
        </CSSTransition>
    )
}

const mapStateToProps = (state) => {
    return {
        // api 请求  热搜索
        hotList: state.search.hotList,
        enterLoading: state.search.enterLoading,
        // 搜索建议  卖广告
        suggestList: state.search.suggestList,
        // 就为跨模块共享数据而来，共享好
        songsCount: state.player.playList.length,
        songsList: state.search.songsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHotKeyWordsDispatch() {
            dispatch(getHotKeyWords());
        },
        // changeEnterLoadingDispatch(data) {
        //     dispatch(changeEnterLoading(data))
        // },
        // getSuggestListDispatch(data) {
        //     dispatch(getSuggestList(data))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)