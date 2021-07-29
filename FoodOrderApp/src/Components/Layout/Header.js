import React from 'react';
import style from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';

import HeadeCartButton from './HeaderCartButton';

const Header =(props)=>{
    return(
        <>
            <header className = {style.header}>
                <h1>ReactMeals</h1>
                <HeadeCartButton>Cart</HeadeCartButton>
            </header>
            <div className= {style.['main-image']}>
                <img src ={mealsImage} alt = "A table full of food"/>
            </div>
        </>
    )
}

export default Header;