import React from 'react'
import s from "./ButtonSign.module.css"
import FileZoneUpLoad from "../upload/FileZoneUpLoad";
import {NavLink} from "react-router-dom";

const ButtonSign = () => {
    return (

        <NavLink to='/file'>
            <button className={s.myButton}>
                SIGN DOCUMENT
            </button>
        </NavLink>
    )
};

export default ButtonSign;
