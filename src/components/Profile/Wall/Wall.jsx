import s from './Wall.module.css';
import AddWallPost from "./AddWallPost/AddWallPost";
import WallPost from "./WallPost/WallPost";



function Wall(props) {
    return (
        <section className={s.wall}>
            <AddWallPost />
            { props.wallPostsData.map((post)=> {
            return(
            <WallPost text={post.text} imageLink={post.imageUrl}  likes={post.likes}/>
            )
        })}

        </section>



    )
}

export default Wall;