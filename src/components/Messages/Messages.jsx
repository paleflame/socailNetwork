import s from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";



function Messages (props){
    return (
     <main className={`${s.messages}`}>


             <ol className={`wideColumn ${s.messages__list}`}>

                 {props.messagesItemsData.map(messageItem => {
                     return(
                         <MessagesItem personName={messageItem.personName} date={messageItem.lastMessageDate} messageText={messageItem.lastMessageText} personImageLink={messageItem.personAvatarLink}/>

                     );
                 } )
                 }


             </ol>



         <section className={`${s.messages__chatWindow}`}>


         </section>

     </main>
    )
}

export default Messages;