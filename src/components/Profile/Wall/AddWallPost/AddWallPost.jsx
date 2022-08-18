import s from './AddWallPost.module.css';

console.log(s);


function AddWallPost(props) {
    return (
        <div className={"content-block"}>
            <label>
                <input type="text"/> добавить новый пост
            </label>

        </div>
    )

}

export default AddWallPost;