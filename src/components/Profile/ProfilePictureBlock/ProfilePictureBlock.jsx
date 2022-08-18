import s from './ProfilePictureBlock.module.css';



function ProfilePictureBlock() {
    return (

        <section className={`${s.profilePictureBlock} content-block`}>

            <img className={`${s.profilePictureBlock__picture}`}
                 src="https://www.scenichudson.org/wp-content/uploads/2022/01/Image-from-iOS-5-1400x905.jpg"
                 alt=""/>

            <a href="src/components/Profile/Profile" className={`${s.profilePictureBlock__edit}`}>
                Edit
            </a>

        </section>

    )
}

export default ProfilePictureBlock;