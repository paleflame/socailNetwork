import s from './Profile.module.css';
import WallPost from "./Wall/WallPost/WallPost";
import ProfilePictureBlock from "./ProfilePictureBlock/ProfilePictureBlock";
import Wall from "./Wall/Wall";
import ProfileInfo from "./ProfileInfo/ProfileInfo";




function Profile(props) {
    return (


        <main className={`${s.profile}`}>


            <div className={`narrowColumn column`}>
              <ProfilePictureBlock />


            </div>


            <div className={`wideColumn column`}>

                <ProfileInfo />


                <Wall wallPostsData={props.wallPostsData} />

            </div>


        </main>


    )
}

export default Profile;