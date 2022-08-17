import React from 'react';
import Post from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {
  return (
      <div>
          My post
          <div>
              <textarea name="" id="" cols="30" rows="5"></textarea>
              <button>Add post</button>
          </div>
          <div className={s.posts}>
              <Post message='Hi, how are you?' likeCounts='12'/>
              <Post message="It's my first post." likeCounts='15'/>
          </div>
      </div>
  );
}

export default MyPosts;