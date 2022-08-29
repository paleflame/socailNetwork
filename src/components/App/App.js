import './App.css';
import Header from "../Header/Header";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import {Outlet} from "react-router-dom";

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
