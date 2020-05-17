import React from 'react';
import { observer } from "mobx-react";
import styles from './styles.module.css';
import SantaImage from '../../assets/santa.jpeg';
import { WishListView } from "../../modules";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Wish List</h1>
        <img src={SantaImage} alt="santa"/>
      </header>
      <WishListView />
    </div>
  )
};

export default Dashboard;
