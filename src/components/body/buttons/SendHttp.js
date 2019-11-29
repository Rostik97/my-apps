import React from 'react'
import s from "./SendHttp.module.css";

class ButtonSendRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props
        }
    }
    render() {
        return (
            <button onClick={this.handleClick}>
            </button>
        );
    }
}

// const ButtonSend = (props) => {
//     return (
//         <div>
//             <button className={s.myButton} onClick={send(props.data)}>
//                 SEND
//             </button>
//         </div>
//     )
// };
// let send = (data) => {
//     console.log(data);
//     console.log("test");
// };

export default ButtonSendRequest;