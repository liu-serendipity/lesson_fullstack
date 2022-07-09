import React, { useState, useEffect, useRef, useCallback} from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
    getHotKeyWords,
    changeEnterLoading,
    getSuggestList
    } from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import Scroll from '@/components/common/Scroll'
import SearchBox from '@/components/common/search-box'
import Loading from '@/components/common/loading'
import { 
    Container,
    ShortcutWrapper,
    HotKey
    } from './style'

import { 
    EnterLoading, 
    List, 
    ListItem 
    } from './../Singers/style'
import Lazyload, { forceCheck } from 'react-lazyload'
import singerImg from './singer.png'

// useRef DOM 相关
// useCallback 性能优化

const Search = (props) => {
    // 搜索内容  redux 解决共享状态问题
    // 1. 搜索列表 api action redux
    const [query, setQuery] = useState('')
    const { 
        hotList, 
        songsCount, 
        enterLoading,
        suggestList
    } = props
    const { 
        getHotKeyWordsDispatch, 
        changeEnterLoadingDispatch,
        getSuggestListDispatch
    } = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(true)
        if (!hotList.length) {
            getHotKeyWordsDispatch()
        }
    }, [])

    const searchBack = useCallback(() => {
        setShow(false)
    }, [])

    const handleQuery = (q) => {
        setQuery(q)
    }

    useEffect(() => {
        if (query.trim()) {
            // 有必要去请求
            changeEnterLoadingDispatch(true)
            getSuggestListDispatch(query)
        }
    }, [query])

    const renderHotKey = () => {
        let list = hotList ? hotList : [];
        return (
            <ul>
                {
                    list.map(item =>  {
                        return (
                            <li className="item" key={item.first}>
                                <span>{item.first}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    const renderSingers = () => {
        let singers = suggestList.artists;
        if (!singers || !singers.length) return;
        console.log(singers);
        return (
            <List>
                <h1 className="title">相关歌手</h1>
                {
                    singers.map((item, index) => {
                        return (
                            <ListItem key={item.accountId + "" + index}>
                                <div className="img_wrapper">
                                    <Lazyload 
                                        placeholder={<img 
                                            width="100%" 
                                            height="100%"/>}
                                        src={singerImg}
                                    >
                                        <img 
                                            src={item.picUrl} 
                                            alt="music" 
                                            width="100%" 
                                            height="100%"
                                        />
                                    </Lazyload>
                                </div>
                                <span className="name">歌手：{item.name}</span>
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }
    
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
                    <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>
                </div>
                <ShortcutWrapper show={!query}>
                    <Scroll>
                        <div>
                            <HotKey>
                                <h1 className="title">热门搜索</h1>
                                { renderHotKey() }
                            </HotKey>
                        </div>
                    </Scroll>
                </ShortcutWrapper>
                <ShortcutWrapper show={query}>
                    <Scroll onScroll={forceCheck}>
                        <div>
                            <HotKey>
                                { renderSingers() }
                            </HotKey>
                        </div>
                    </Scroll>
                </ShortcutWrapper>
                { enterLoading && <EnterLoading><Loading></Loading></EnterLoading>}
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
        changeEnterLoadingDispatch(data) {
            dispatch(changeEnterLoading(data))
        },
        getSuggestListDispatch(data) {
            dispatch(getSuggestList(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))