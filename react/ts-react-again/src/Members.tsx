import React, { useState, useEffect } from 'react'
import { MemberEntity } from './model'
import { getMembersCollection } from './api'

const Members = () => {
    // 自定义hooks
    const usememberCollection = () => {
        const [memberCollection, setMemberCollection] = useState<MemberEntity[]>([])
        const loadMemberCollection = async () => {
            const memberCollection = await getMembersCollection()
            setMemberCollection(memberCollection)
        }
        return {
            memberCollection,
            loadMemberCollection
        }
    }
    const { memberCollection, loadMemberCollection } = usememberCollection()
    useEffect(() => {
        loadMemberCollection()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        memberCollection.map(member => (
                            <MemberRow key={member.id} member={member} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
interface MemberRowProps {
    member: MemberEntity
}
const MemberRow:React.FC<MemberRowProps> = (props) => {
    const { member } = props
    return (
        <tr>
            <td>
                <img src={member.avatar_url} alt="" />
            </td>
            <td>
                <span>
                    {member.id}
                </span>
            </td>
            <td>
                <span>
                    {member.login}
                </span>
            </td>
        </tr>
    )
}

export default Members
