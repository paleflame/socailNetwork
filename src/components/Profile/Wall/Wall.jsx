import s from './Wall.module.css';
import AddWallPost from "./AddWallPost/AddWallPost";
import WallPost from "./WallPost/WallPost";



function Wall(props) {


    return (
        <section className={s.wall}>
            <AddWallPost newPostText={props.newPostText} addWallPostToState={props.addWallPostToState}/>
            {
                props.wallPostsData.slice(0).reverse().map((post)=> {

            return(
            <WallPost text={post.text} imageLink={post.imageUrl}  likes={post.likes}/>
            )
        })}

        </section>



    )
}

export default Wall;