import React from 'react';
import style from './Header.module.css';
import mealsImage from '../../Assets/meals.jpg';
const Header =(props)=>{
    return(
        <>
            <header className = {style.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div >
                <img src ={mealsImage} alt = "A table full of food"/>
            </div>
        </>
    )
}

export default Header;