import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.profileInfo}>
            <div>
                <img className={s.profileImage} src="https://img4.goodfon.ru/wallpaper/big/b/e2/limonad-led-limon-leto-more-palmy.jpg" alt="sea and lemonade"/>
            </div>
            <div className={s.description}>
                <div>
                    <img className={s.avatar} src="https://krot.info/uploads/posts/2022-03/thumbs/1646150913_1-krot-info-p-smeshnoi-khomyak-smeshnie-foto-1.jpg" alt=""/>
                </div>
                <h3 className={s.name}>Super Humster</h3>
            </div>
        </div>
    )
}

export default ProfileInfo;