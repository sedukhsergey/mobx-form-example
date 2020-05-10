import React, { useState, useRef } from 'react';
import {inject, observer} from "mobx-react";
import { values } from "mobx";
import styles from './style.module.css';
const Home = inject('mobxStore')(observer(props => {
  const [name, setName] = useState('');
  const inputEl = useRef(null);
  const {
    mobxStore: {
      dashboardStore: {
        users,
        addUser,
        reset,
      }
    }
  } = props;

  return (
    <div>
      <div>
        <ul>
          {values(users).map(item => {
            return (
              <div key={item.id} className={styles.inputContainer}>
                <input
                  className={styles.input}
                  type="text"
                  value={item.name}
                  onChange={e => item.setName(e.target.value)}
                  ref={inputEl}
                />
                <button onClick={item.delete}>Delete</button>
              </div>
            )
          })}
        </ul>
      </div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button
        onClick={() => {
          addUser(name);
          setName('');
        }}
      >
        Add new User
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}));

export default Home;
