import React, { useState } from "react"

interface Props {
    userName: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onNameUpdated: (newName: string) => void;
}

const NameEditComponent:React.FC<Props> = (props) => {
    const [editingName, setEditingName] = useState(props.userName)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // onNameUpdated
        setEditingName(e.target.value);
    }
    const onNameSubmit = () => {
        props.onNameUpdated(editingName)
    } 

    return (
        <>
            {/* vscode 是用ts写出来的 */}
            {props.userName}
            <input value={editingName} onChange={onChange} />
            <button onClick={onNameSubmit}>change</button>
        </>
    )
}

export default NameEditComponent