import s from './MessagesItem.module.css';
import {Link, NavLink} from "react-router-dom";


function MessagesItem(props) {
    return (


            <li className={`${s.messagesItem}`}>

                <img className={`${s.personPicture}`}
                     src={props.personImageLink}
                     alt=""/>
                <div className={`${s.textWrapper}`}>
                    <p className={`${s.personName}`}>
                        {props.personName}
                    </p>

                    {/*<p className={`${s.lastMessageDate}`}>*/}
                    {/*    {props.date}*/}
                    {/*</p>*/}
                    {/*<p className={`${s.messageText}`}>*/}
                    {/*    {props.messageText}*/}
                    {/*</p>*/}
                </div>


            </li>

    )
}

export default MessagesItem;