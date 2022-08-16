import s from './Profile.module.css';
import WallPost from "../WallPost/WallPost";



const wallPostsData = [
    {
        id: 1,
        text: "каракалы тоже замечательные",
        imageUrl: "https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png",
        likes: 1488,
    },
        {
            id: 1,
            text: "посмотрите на эту рыську",
            imageUrl: "https://blog.nature.org/science/files/2020/01/tnc_42185468_preview.jpg",
            likes: 12,
        }
]



function Profile() {
    return (


        <main className={`${s.profile}`}>


            <div className={`narrowColumn column`}>
                <section className={`${s.profilePictureBlock} content-block`}>

                    <img className={`${s.profilePictureBlock__picture}`}
                         src="https://www.scenichudson.org/wp-content/uploads/2022/01/Image-from-iOS-5-1400x905.jpg"
                         alt=""/>

                    <a href="src/components/Profile/Profile" className={`${s.profilePictureBlock__edit}`}>
                        Edit
                    </a>

                </section>

            </div>


            <div className={`wideColumn column`}>
                <section className={`${s.profileInfo} content-block`}>
                    <h1 className={`${s.profileInfo__header}`}>Danil Vasilenko</h1>
                    <p className={`${s.profileInfo__status}`}>пишите в telegram: @blednoe_plamya</p>
                    {/*<hr/>*/}

                    <dl className={`${s.profileInfo__mainInfo}`}>

                        <dt>Birthday:</dt>
                        <dd>June 29, 1990</dd>


                        <dt>Current city:</dt>
                        <dd>Tyumen</dd>

                        <dt>Studied at:</dt>
                        <dd>TSU</dd>

                    </dl>


                </section>


                <WallPost likes={wallPostsData[1].likes} text={wallPostsData[1].text} imageLink={wallPostsData[1].imageUrl}/>




            </div>


        </main>


    )
}

export default Profile;