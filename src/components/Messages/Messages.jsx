import s from './Messages.module.css';
import MessagesItem from "./MessagesItem/MessagesItem";


const messagesItemsData = [
    {
        id: 1,
        personName: "Ivan Kornilov",
        lastMessageDate: "yesterday",
        lastMessageText: "я гей",
        personAvatarLink: "https://sun3-8.userapi.com/impg/RHHYL_ZGktueb66u0YRpwh3glDDYhM42we5bcg/ljZQt1fYEww.jpg?size=1920x1920&quality=96&sign=a0db045925d93726fb3e5f5121b5af9c&type=album",

    },
    {
        id: 2,
        personName: "Ilya Dzida",
        lastMessageDate: "yesterday",
        lastMessageText: "я футбольный мячик",
        personAvatarLink: "https://sun3-13.userapi.com/impg/SMe19hPxbwZxYD7goJWzaouzWWrsAKqBMKStBw/5SXKHRAamk8.jpg?size=1440x2160&quality=96&sign=cd0dbf1ed27858abaaedb5ef5ce6c7bb&type=album",

    },
    {
        id: 3,
        personName: "Ruslan Zhorzh",
        lastMessageDate: "yesterday",
        lastMessageText: "На самом деле реально...",
        personAvatarLink: "https://sun9-81.userapi.com/impg/IdLN5CaIPmBww8j5iPuo79_DlshdQcK75qkgSA/mVVh2SvfY-A.jpg?size=1440x1440&quality=95&sign=325cf11cdb5d7b67e9215924e65c3d7e&type=album",

    },
]

const messagesItems = messagesItemsData.map(messageItem => {
    return(
        <MessagesItem personName={messageItem.personName} date={messageItem.lastMessageDate} messageText={messageItem.lastMessageText} personImageLink={messageItem.personAvatarLink}/>

    );
} )




function Messages (){
    return (
     <main className={`${s.messages}`}>


             <ol className={`wideColumn ${s.messages__list}`}>
                 {messagesItems}


             </ol>



         <section className={`${s.messages__chatWindow}`}>


         </section>

     </main>
    )
}

export default Messages;