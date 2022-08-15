import './News.css';
import WallPost from "../WallPost/WallPost";

function News() {
    return (
        <div className="app-wrapper">
            <ul className="newsList">
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
                <WallPost likes={1488} text={'каракалы тоже замечательные'} imageLink={"https://memepedia.ru/wp-content/uploads/2020/10/big-floppa-meme.png"}/>
            </ul>


        </div>
    );
}


export default News;
