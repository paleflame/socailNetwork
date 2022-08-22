import s from './NavigationMenuItem.module.css';
import {NavLink} from "react-router-dom";
import  ChooseSVG from '../../commonComponents/ChooseSVG/ChooseSVG'


function NavigationMenuItem (props){
    return (
                <li className={`${s.navigationMenu__item}`}>
                    <NavLink to={props.address} className={({ isActive }) => {
                        if (isActive){
                            return s.navigationMenu__link_active
                        }else {
                            return s.navigationMenu__link
                        }
                    }
                    }>
                        <ChooseSVG SVGName={props.SVGName}/>
                        <span
                             className={`${s.navigationMenu__caption}`}>{props.caption}</span>

                    </NavLink>
                </li>





    )
}

export default NavigationMenuItem;