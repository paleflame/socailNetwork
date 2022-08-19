import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

const wallPostsData = [
    {
        id: 1,
        text: "каракалы тоже замечательные",
        imageUrl: "https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png",
        likes: 1488,
    },
    {
        id: 2,
        text: "посмотрите на эту рыську",
        imageUrl: "https://blog.nature.org/science/files/2020/01/tnc_42185468_preview.jpg",
        likes: 12,
    },
    {
        id: 2,
        text: "В одном из городов Югры на улице заметили рысь!",
        imageUrl: "https://ugra-news.ru/upload/iblock/5c0/483583.jpg",
        likes: 12,
    }
];

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
];



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <BrowserRouter>




          <Routes>

              <Route path='/' element={<App  />}>
                  <Route path="messages" element={<Messages messagesItemsData={messagesItemsData} />} />
                  <Route path="news" element={<News />} />
                  <Route path="friends" element={<Friends />} />
                  <Route path="profile" element={<Profile wallPostsData={wallPostsData}  />} >


                  </Route>
                  <Route path={"*"} element={<NotFound/>} />


              </Route>


          </Routes>

      </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
export {messagesItemsData};

export {wallPostsData};

