import s from './WallPost.module.css';

console.log(s);


function WallPost(props) {
    return (

        <article className={`${s.wallPost} content-block`}>
            <header className={`${s.publisherInfo}`}>
                <img className={`${s.publisherPicture}`}
                     src="https://www.scenichudson.org/wp-content/uploads/2022/01/Image-from-iOS-5-1400x905.jpg"
                     alt=""/>
                <p className={`${s.publisherName}`}>Danil Vasilenko</p>
                <p className={`${s.publicationDate}`}>30 Mar 2021</p>


            </header>
            <section className={`${s.content}`}>
                <p className={`${s.content__text}`}>
                    {props.text}
                </p>
                <img className={`${s.content__image}`} src={props.imageLink} alt=""/>

            </section>


            <footer className={`${s.statistic}`}>

                <ul className={`${s.icons}`}>
                    <li className={`${s.icon}`}>
                        <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z"></path><path d="M16 4a5.95 5.95 0 0 0-3.89 1.7l-.12.11-.12-.11A5.96 5.96 0 0 0 7.73 4 5.73 5.73 0 0 0 2 9.72c0 3.08 1.13 4.55 6.18 8.54l2.69 2.1c.66.52 1.6.52 2.26 0l2.36-1.84.94-.74c4.53-3.64 5.57-5.1 5.57-8.06A5.73 5.73 0 0 0 16.27 4zm.27 1.8a3.93 3.93 0 0 1 3.93 3.92v.3c-.08 2.15-1.07 3.33-5.51 6.84l-2.67 2.08a.04.04 0 0 1-.04 0L9.6 17.1l-.87-.7C4.6 13.1 3.8 11.98 3.8 9.73A3.93 3.93 0 0 1 7.73 5.8c1.34 0 2.51.62 3.57 1.92a.9.9 0 0 0 1.4-.01c1.04-1.3 2.2-1.91 3.57-1.91z" fill="currentColor" fillRule="nonzero"></path></g></svg>
                        <span className={"counter"}>
                            {props.likes}

                        </span>

                    </li>
                    <li className={`${s.icon}`}>
                        <img className={"comment-icon"} src="src/components/WallPost/WallPost" alt=""/>
                        <span className={"counter"}>1


                        </span>

                    </li>
                    <li className={`${s.icon}`}>
                        <img className={"repost-icon"} src="src/components/WallPost/WallPost" alt=""/>
                        <span className={"counter"}>3

                        </span>

                    </li>

                </ul>

            </footer>


        </article>
    )

}

export default WallPost;