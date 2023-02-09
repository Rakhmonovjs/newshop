import styles from "./Header.scss"
import React from 'react'
import { Link } from "react-router-dom"
import {FaOpencart} from "react-icons/fa";
import {HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const logo = (
    <div>
        <Link to='/'>
            <h2>
                e<span>Book</span>!
            </h2>
        </Link>
    </div>
)

const cart = (
    <span className={styles.cart}>
        <Link to="/cart">
            Cart 
           <FaOpencart size={20}/>
              {/* <p>0</p> */}
        </Link>
    </span>
)

const Header = () => {

    const [menu, setMenu] = useState(false)

    const tooglemenu = () => {
        setMenu(!menu)
    };
    const hidemenu = () => {
        setMenu(false)
    };

  return (
    <header>
        <div className={styles.header}>
            {logo}

            <nav className={menu ? `${styles["show-nav"]}` : `${styles["hide-menu"]}`}>
               <div className={menu ? `${styles ["nev-wrapper"]}  ${styles["show-nav-wrapper"]}` : `${styles["nav-wrapper"]}`}>
                    <ul>
                        <li>
                         <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className={styles["header-right"]}>
                        <span className={styles.links}>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                            <Link to="/order-history">My Order</Link>
                        </span>
                    {cart}
                    </div>
               </div>
            </nav>
            <div className={styles["menu-icon"]}>
                {cart} 
                <HiOutlineMenuAlt3 size={28} />
            </div>
        </div>
    </header>
  )


}

export default Header