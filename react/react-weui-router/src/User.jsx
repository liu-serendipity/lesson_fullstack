import React from 'react'
import WeUI from 'react-weui'
import { Link } from 'react-router-dom'
const {
    Tab,
    TabBody,
    Cells,
    CellHeader,
    CellBody,
    Cell,
    CellFooter,
    Badge
} = WeUI
import IconUser from './assets/img/user.png'

const User = () => {
    // 页面，组件化思维
    return (
        <Tab>
            <TabBody>
                <div>
                    <Cells style={{marginTop: '0px'}}>
                        <Cell>
                            {/* react 行内样式 {驼峰式} */}
                            <CellHeader style={{position: 'relative', marginRight: '10px'}}>
                                {/* <img src={IconUser} style={{width: '50px', display: 'block'}} /> */}
                                <img src={IconUser} style={{width: '50px', display: 'block'}} />
                            </CellHeader>
                            <CellBody>
                                <p style={{fontSize: '13px', color: '#88888888'}}>光头强</p>
                                <p style={{fontSize: '13px', color: '#88888888'}}>欢迎来到图书漂流!</p>
                            </CellBody>
                        </Cell>
                        {/* react-weui 文档 props true*/}
                        <Cell access>
                            <CellBody style={{color: 'red'}}>
                                订单 <Badge preset="body">8</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'red'}}>
                                发出的申请 <Badge preset="body">5</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'red'}}>
                                收到的申请 <Badge preset="body">3</Badge>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody style={{color: 'red'}}>
                                收藏
                            </CellBody>
                            <CellFooter />
                        </Cell>
                        <Cell access>
                            <CellBody>
                                <Link to="./Address" style={{color: 'red'}}>地址</Link>
                            </CellBody>
                            <CellFooter />
                        </Cell>
                    </Cells>
                </div>
            </TabBody>
        </Tab>
    )
}

export default User