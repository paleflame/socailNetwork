import s from './ChatContent.module.css';
import { useParams } from "react-router-dom";
import SendButton from "./SendButton/SendButton";
import Message from "./Message/Message";

const ChatContent = (props)=>{
    debugger;
    const params = useParams();
    console.log(params);
    return(

        <div className={s.chatContent}>
            <div className={s.chatContent__messages}>
                <h1>{params.userID}</h1>


                {/*{*/}
                {/*    for (let i = 0; i < 10; i++){*/}
                {/*    <Message/>}*/}
                {/*    */}
                {/*}*/}

               



            </div>


            <div className={s.chatContent__input}>

                <textarea name="" id="" cols="30" rows="1">

            </textarea>
                <SendButton />


            </div>

        </div>
    )
}

export default ChatContent;