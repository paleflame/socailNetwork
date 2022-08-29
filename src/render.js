import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./components/App/App";
import Messages from "./components/Messages/Messages";
import ChatContent from "./components/Messages/ChatContent/ChatContent";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/commonComponents/NotFound/NotFound";
import ReactDOM from "react-dom/client";
import {addWallPostToState} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) =>{
    root.render(

        <React.StrictMode>
            <BrowserRouter>

                <Routes>

                    <Route path='/' element={<App  />}>
                        <Route path="messages" element={<Messages messagesItemsData={state.messagesItemsData} />} >
                            <Route index element={<p>Select a chat to start messaging</p>}/>
                            <Route path={":userID"} element={<ChatContent messagesItemsData={state.messagesItemsData}/>}/>


                        </Route>
                        <Route path="news" element={<News />} />
                        <Route path="friends" element={<Friends />} />
                        <Route path="profile" element={<Profile profileData={state.profileData}  addWallPostToState={addWallPostToState}  />} >




                        </Route>
                        <Route path={"*"} element={<NotFound/>} />


                    </Route>


                </Routes>

            </BrowserRouter>

        </React.StrictMode>
    );


}