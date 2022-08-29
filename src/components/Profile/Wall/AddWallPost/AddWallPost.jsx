import s from './AddWallPost.module.css';
import React from 'react';
import {changeNewPostText} from "../../../../redux/state";
console.log(s);




function AddWallPost(props) {


    const newPostElement = React.createRef();
    const addPost = () =>{

        props.addWallPostToState(
            {
                text: newPostElement.current.value,
                imageUrl: "",
            }
        )
        changeNewPostText("");
    }

    const onPostChange = ()=>{
        const text = newPostElement.current.value;
        changeNewPostText(text);


    }

    return (
        <div className={"content-block"}>
            <label>
                <textarea onChange={onPostChange} name="" id="" cols="20" rows="2" ref={newPostElement} value={props.newPostText} placeholder={"Текст"}/>

            </label>
            <button onClick={addPost}>
                добавить новый пост
            </button>
        </div>
    )

}

export default AddWallPost;