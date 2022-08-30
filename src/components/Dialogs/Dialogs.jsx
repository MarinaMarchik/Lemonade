import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

let newMessage = React.createRef();

let addMessage = () => {
    let newMessageElement = newMessage.current.value;
    alert(newMessageElement)
}

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => (<DialogItem name={el.name} id={el.id}/>));
    let messagesElements = props.state.messages.map(el => (<Message message={el.message}/>));

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.input}>
                    <div>
                        <textarea className={s.area} ref={newMessage} placeholder='Message' cols="42" rows="3"></textarea>
                    </div>
                    <div>
                        <button className={s.btn_message} onClick={addMessage}>S</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;