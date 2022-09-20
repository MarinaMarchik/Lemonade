import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextCreator(text);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} dialogsPage={state}/>
    )
}

export default DialogsContainer;