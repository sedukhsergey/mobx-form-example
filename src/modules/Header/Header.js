import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Header = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/form'}>Form</Link></li>
                <li><Link to={'/wish-list'}>WishList</Link></li>
            </ul>
        </div>
    )
};

export default Header;
