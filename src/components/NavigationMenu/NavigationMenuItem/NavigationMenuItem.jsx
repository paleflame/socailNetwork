import s from './NavigationMenuItem.module.css';
import {Link} from "react-router-dom";
import  ChooseSVG from '../../ChooseSVG/ChooseSVG'


function NavigationMenuItem (props){
    return (
                <li className={`${s.navigationMenu__item}`}>
                    <Link to={props.address} className={`${s.navigationMenu__link}`} >

                        <ChooseSVG SVGName={props.SVGName}/>
                        <span
                             className={`${s.navigationMenu__caption}`}>{props.caption}</span>

                    </Link>
                </li>





    )
}

export default NavigationMenuItem;