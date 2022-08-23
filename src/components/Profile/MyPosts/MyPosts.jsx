import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map(el => (<Post message={el.message} likesCount={el.likesCount}/>));

    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea name="" id="" cols="30" rows="5"></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;