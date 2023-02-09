import styles from "./Header.scss"
import React from 'react'
import { Link } from "react-router-dom"
import {FaOpencart} from "react-icons/fa";
import {HiOutlineMenuAlt3 } from "react-icons/hi";

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
    
  return (
    <header>
        <div className={styles.header}>
            {logo}

            <nav>
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
            </nav>
        </div>
    </header>
  )


}

export default Header