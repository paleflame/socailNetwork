import './App.css';
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Messages from "../Messages/Messages";
import {Route, Routes} from "react-router-dom";
import News from "../News/News";
import Friends from "../Friends/Friends";
import NotFound from "../NotFound/NotFound";





function App() {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="container">
                <NavigationMenu />

                <Routes>
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path={"*"} element={<NotFound/>}/>

                </Routes>




            </div>


        </div>
    );
}


export default App;
