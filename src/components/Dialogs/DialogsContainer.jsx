import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let addMessage = () => {
                    store.dispatch(addMessageCreator());
                }

                let onMessageChange = (text) => {
                    let action = updateNewMessageTextCreator(text);
                    store.dispatch(action);
                }
                return <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} dialogsPage={state}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;