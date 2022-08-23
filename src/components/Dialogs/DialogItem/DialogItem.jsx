import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

let setDialog = ({isActive}) => isActive ? s.active : undefined;

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={setDialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;