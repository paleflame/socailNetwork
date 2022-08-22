import s from './AddWallPost.module.css';
import React from 'react';
console.log(s);




function AddWallPost(props) {

    const newPostElement = React.createRef();
    const addPost = () =>{
        alert(newPostElement.current.value);
    }


    return (
        <div className={"content-block"}>
            <label>
                <input ref={newPostElement} type="text"/>
            </label>
            <button onClick={addPost}>
                добавить новый пост
            </button>
        </div>
    )

}

export default AddWallPost;