import s from './ChatContent.scss';
import { useParams } from "react-router-dom";

const ChatContent = ()=>{
    const params = useParams();
    return(

        <div>
            <h1>{params.userID}</h1>
            <p>Привет</p>
            <p>Как дела?</p>
            <p>У меня хорошо. Как у тебя?</p>
            <p>Замечательно.</p>
        </div>
    )
}

export default ChatContent;