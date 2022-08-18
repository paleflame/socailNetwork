import s from './Wall.module.css';
import AddWallPost from "./AddWallPost/AddWallPost";
import WallPost from "./WallPost/WallPost";



//const wallPostsArray = wallPostsData.map((wallPost) => <WallPost likes={wallPost.likes} text={wallPost.text} imageLink={wallPost.imageUrl}/>);



function Wall() {
    return (
        <section className={s.wall}>
            <AddWallPost />
            {/*{wallPostsArray}*/}

        </section>



    )
}

export default Wall;