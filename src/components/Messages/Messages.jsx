import s from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";
import SearchField from "./SearchField/SearchField";
import {Outlet} from "react-router-dom";
import {returnMessagesItemsData} from "../../redux/state";


function Messages (props){

    return (
     <main className={`${s.messages}`}>



         <div className={s.messagesPeople}>
             <SearchField/>


             <ol className={`${s.messages__list}`}>

                 {props.messagesItemsData.map(messageItem => {
                     return(
                         <MessagesItem personName={messageItem.personName} date={messageItem.lastMessageDate} messageText={messageItem.lastMessageText} personImageLink={messageItem.personAvatarLink} id={messageItem.id}/>

                     );
                 } )
                 }


             </ol>

         </div>

         <section className={`${s.messages__chatWindow}`}>
             <Outlet />

         </section>

     </main>
    )
}

export default Messages;