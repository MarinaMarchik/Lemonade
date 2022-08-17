import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
      <div className={s.content}>
          <div >
              <img src="https://slon.fr/wp-content/uploads/2020/05/322s.jpg" alt=""/>
          </div>
          <div>
              ava+description
          </div>
          <MyPosts/>

      </div>
  );
}

export default Profile;