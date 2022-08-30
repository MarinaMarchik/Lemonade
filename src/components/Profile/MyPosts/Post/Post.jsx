import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (
      <div className={s.item}>
          <div className={s.post}>
              <img src="https://krot.info/uploads/posts/2022-03/thumbs/1646150913_1-krot-info-p-smeshnoi-khomyak-smeshnie-foto-1.jpg" alt=""/>
              <div className={s.post_text}>
                  {props.message}
              </div>
          </div>
          <div>
              <span>{props.likesCount} Like</span>
          </div>
      </div>
  );
}

export default Post;