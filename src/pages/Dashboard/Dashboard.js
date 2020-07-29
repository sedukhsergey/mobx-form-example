import React, {
  useState, useEffect,
} from 'react';
import {
  values,
} from 'mobx';
import {
  useObserver,
} from 'mobx-react';
import styles from './styles.module.css';
import SantaImage from '../../assets/santa.jpeg';
import {
  WishListView,
} from '../../modules';
import {
  useGroupData,
} from '../../hooks/useGroupData';

const Dashboard = () => {
  const [
    selectedUser, setSelectedUser,
  ] = useState(null);
  const {
    users, fetchUsers,
  } = useGroupData();
  useEffect(() => {
    fetchUsers();
  }, [
    fetchUsers,
  ]);

  const handleSelectedUser = e => {
    setSelectedUser(e.target.value);
  };

  const selected = users.get(selectedUser);
  return useObserver(() => (
    <div className={styles.container}>
      <header className={styles.hero}>
        <h1>Wish List</h1>
        <img
          src={SantaImage}
          alt="santa" />
        <select
          name="user"
          id="user"
          onChange={handleSelectedUser}>
          <option value="">---</option>
          {values(users).map(item => (
            <option
              key={item.id}
              value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </header>
      {selected && <WishListView selected={selected.wishList} />}
    </div>
  ));
};

export default Dashboard;
