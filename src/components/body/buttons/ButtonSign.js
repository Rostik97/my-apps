import React from 'react'
import s from "./ButtonSign.module.css"
import {Link} from "react-router-dom";
import FileZoneUpLoad from "../upload/FileZoneUpLoad";

const ButtonSign = () => {
    return (
        <div>
                <button className={s.myButton} onClick={FileZoneUpLoad}>
                    SIGN
                    DOCUMENT
                </button>

        </div>
    )
};

export default ButtonSign;
