import s from './AddWallPost.module.css';
import React from 'react';
console.log(s);




function AddWallPost(props) {

    const newPostElement = React.createRef();
    const addPost = () =>{

        props.addWallPostToState(
            {
                text: newPostElement.current.value,
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Lynx_lynx2.jpg",
            }
        )
    }


    return (
        <div className={"content-block"}>
            <label>
                <input ref={newPostElement} type="text" placeholder={"Текст"}/>

            </label>
            <button onClick={addPost}>
                добавить новый пост
            </button>
        </div>
    )

}

export default AddWallPost;