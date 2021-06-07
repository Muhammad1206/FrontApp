import React from 'react';
import style from './Header.module.css';
import 'materialize-css';
import {NavLink} from "react-router-dom";
import img from '../assets/img/avatar.jfif';


export const Header = () => {
    return (
        <div className={style.navbar}>
            <div className={style.container} >
                <div className={style.left}>
                    <NavLink to="/users">
                        <img src={img} alt="Avatar" className={style.avatar}/>
                    </NavLink >
                </div>
                <div className={style.right}>
                    <NavLink to="users">
                        Users
                    </NavLink>
                    <NavLink to="deaths">
                        Deaths
                    </NavLink>
                    <NavLink to="episodes">
                        Episodes
                    </NavLink>
                    <NavLink to="quotes">
                        Quotes
                    </NavLink>
                </div>
            </div>
        </div>
    )
}