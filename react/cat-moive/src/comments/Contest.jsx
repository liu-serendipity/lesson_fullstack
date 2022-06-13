import react from 'react'
import { ContestWrapper, Tab, TabItem } from '../style'

const Contest = ({data}) => {
    return (
        // 切页面
        <ContestWrapper>
            <h2>热门赛事</h2>
            <Tab>
                {
                    data.map(item => <TabItem key={item.id}>
                        <span>{item.title}</span>
                    </TabItem>)
                }
            </Tab>
        </ContestWrapper>
    )
}

export default Contest