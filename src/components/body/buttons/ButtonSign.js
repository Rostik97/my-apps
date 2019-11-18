import React from 'react'
import s from "./ButtonSign.module.css"

const ButtonSign = () => {
    return (
        <button className={s.myButton} onClick={some}>
            SIGN
            DOCUMENT
        </button>
    )};
let some = () => {
  alert("Sign success!!")
};
export default ButtonSign;
