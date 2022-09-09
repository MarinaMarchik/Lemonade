import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";

let newMessage = React.createRef();

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(el => (<DialogItem name={el.name} id={el.id}/>));
    let messagesElements = props.state.messages.map(el => (<Message message={el.message}/>));
    let newMessageText = props.state.newMessageText;

    let addMessage = () => {
        props.dispatch(addMessageCreator());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messages_area}>{messagesElements}</div>
                <div className={s.input}>
                    <div>
                        <textarea className={s.area} onChange={onMessageChange} value={newMessageText} ref={newMessage} placeholder='Message' cols="42" rows="3"></textarea>
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