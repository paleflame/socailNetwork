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
import NotFound from "./components/commonComponents/NotFound/NotFound";
import {state, addWallPostToState} from "./redux/state";
import ChatContent from "./components/Messages/ChatContent/ChatContent";



const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(

  <React.StrictMode>
      <BrowserRouter>

          <Routes>

              <Route path='/' element={<App  />}>
                  <Route path="messages" element={<Messages messagesItemsData={state.messagesItemsData} />} >
                        <Route index element={<p>Select a chat to start messaging</p>}/>
                        <Route path={":userID"} element={<ChatContent/>}/>


                  </Route>
                  <Route path="news" element={<News />} />
                  <Route path="friends" element={<Friends />} />
                  <Route path="profile" element={<Profile wallPostsData={state.wallPostsData} addWallPostToState={addWallPostToState}  />} >


                  </Route>
                  <Route path={"*"} element={<NotFound/>} />


              </Route>


          </Routes>

      </BrowserRouter>

  </React.StrictMode>
);

reportWebVitals();
