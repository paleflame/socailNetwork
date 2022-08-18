import s from './Wall.module.css';
import AddWallPost from "./AddWallPost/AddWallPost";
import WallPost from "./WallPost/WallPost";
import wallPostsData from "../../../index";


function Wall(props) {
    return (
        <section className={s.wall}>
            <AddWallPost />
            { wallPostsData.map((post)=> {
            return(
            <WallPost text={props.wallPostsData.text} imageLink={props.wallPostsData.imageUrl}  likes={props.wallPostsData.likes}/>
            )
        })}

        </section>



    )
}

export default Wall;