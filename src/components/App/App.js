import './App.css';
import Header from "../Header/Header";
import Profile from "../Profile/Profile";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Messages from "../Messages/Messages";
import {Outlet} from "react-router-dom";
import News from "../News/News";
import Friends from "../Friends/Friends";
import NotFound from "../NotFound/NotFound";





function App(props) {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="container">
                <NavigationMenu />

               <Outlet />



            </div>


        </div>
    );
}


export default App;
