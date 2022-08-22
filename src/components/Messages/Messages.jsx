import s from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";
import SearchField from "./SearchField/SearchField";



function Messages (props){
    return (
     <main className={`${s.messages}`}>



         <div>
             <SearchField/>

             <ol className={`${s.messages__list}`}>

                 {props.messagesItemsData.map(messageItem => {
                     return(
                         <MessagesItem personName={messageItem.personName} date={messageItem.lastMessageDate} messageText={messageItem.lastMessageText} personImageLink={messageItem.personAvatarLink}/>

                     );
                 } )
                 }


             </ol>

         </div>






         <section className={`${s.messages__chatWindow}`}>


         </section>

     </main>
    )
}

export default Messages;