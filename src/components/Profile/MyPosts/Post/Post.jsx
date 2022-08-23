import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
      <div className={s.item}>
          <img src="https://krot.info/uploads/posts/2022-03/thumbs/1646150913_1-krot-info-p-smeshnoi-khomyak-smeshnie-foto-1.jpg" alt=""/>
            {props.message}
          <div>
              <span>{props.likesCount} Like</span>
          </div>
      </div>
  );
}

export default Post;