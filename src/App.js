import './App.css';
import Header from "./components/Header";
import Profile from "./components/Profile";
import NavigationMenu from "./components/NavigationMenu";




function App() {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="container">
                <NavigationMenu />
                <Profile />

            </div>


        </div>
    );
}


export default App;
