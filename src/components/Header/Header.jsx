import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://st.depositphotos.com/2397945/3869/v/450/depositphotos_38693215-stock-illustration-glass-with-lemonade-and-lemons.jpg" alt="logo"/>
            <div>Lemonade</div>
        </header>
    );
}

export default Header;
