import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>));

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} className={s.area} ref={newPostElement} cols="40" rows="4" />
                </div>
                <div>
                    <button className={s.btn_post} onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;