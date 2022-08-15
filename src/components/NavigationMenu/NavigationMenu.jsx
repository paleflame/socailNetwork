import s from './NavigationMenu.module.css';
import NavigationMenuItem from "./NavigationMenuItem/NavigationMenuItem";


function NavigationMenu() {
    return (
        <aside className={`${s.navigationMenu}`}>


            <ul className={`${s.navigationMenu__list}`}>

                <NavigationMenuItem address={"/"} caption={"Profile"} SVGName={"profile"}/>
                <NavigationMenuItem address={"/news"} caption={"News"} SVGName={"news"}/>
                <NavigationMenuItem address={"/messages"} caption={"Messages"} SVGName={"messages"}/>
                <NavigationMenuItem address={"/friends"} caption={"Friends"} SVGName={"friends"}/>

            </ul>


        </aside>
    )
}

export default NavigationMenu;