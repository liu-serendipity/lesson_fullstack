import React, { useState } from 'react'
import Editor from './Editor'
import _ from 'lodash'
import moment from 'moment'  // 时间库
import 'moment/src/locale/zh-cn'
moment.locale('zh-CN')

const Note = (props) => {
    const [open, setOpen] = useState(false);  // 自有 外面不用
    const { entity, destoryEntity } = props;
    const { body, meta } = entity;
    const updated = () => {
        // 1. 拿到 entity 里的 meta 里面的 created | updated
        // 2. 格式化  时间戳变成可读性更好的时间
        return moment(meta.updated || meta.created).fromNow();
    }
    const header = () => {
        // 不多于30个字
        return _.truncate(body, {length: 30}) || '新建笔记'
    }
    const toggle = () => {
        setOpen(!open);
    }
    const updateEntity = (event) => {
        console.log(event, '--------');
    }
    const words = () => {
        return body.length
    }

    return (
        <div className="item">
            <div className="meta">
                {/* 最后更新的时间 */}
                { updated() }
            </div>
            <div className="content">
                <div className="header" onClick={toggle}>
                    { header() }
                </div>
            </div>
            <div className="extra">
                {
                    open &&
                    <Editor
                        entity={ entity }
                        updateEntity={ updateEntity }
                    />
                }
                { words() }字
                {
                    open && 
                    <i 
                        className="right floated trash outline icon"
                        onClick={ () => destoryEntity(entity) }
                    />
                }
            </div>
        </div>
    )
}

export default Note