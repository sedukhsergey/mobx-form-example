import React from 'react';
import {
  observer,
} from 'mobx-react';
import {
  Link,
} from 'react-router-dom';
import styles from './styles.module.css';
import {
  Button,
} from 'components';
import {
  useAuthData,
} from 'hooks/useAuthData';

const handleFetchUsers = () => {
  fetch(`${process.env.REACT_APP_BACKEND_API}/users`)
    .then(res => res.json())
    .then(data => {
      console.log('fetch users data', data);
    })
    .catch(err => {
      console.error('fetch err', err);
    });
};

const handleFetchUser = () => {
  fetch(`${process.env.REACT_APP_BACKEND_API}/users?id=${1}`)
    .then(res => res.json())
    .then(data => {
      console.log('fetch user dta', data);
    })
    .catch(err => {
      console.log('fetch err', err);
    });
};

const handleCreateUser = () => {
  const data = JSON.stringify({
    name: 'Soe', email: 'some@email.com',
  });
  fetch(`${process.env.REACT_APP_BACKEND_API}/users`, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('create user', data);
    })
    .catch(err => {
      console.log('err', err);
    });
};
const handleUpdateUser = id => {
  const data = JSON.stringify({
    name: 'SoeUPDATED', email: 'some@email.comUp',
  });
  fetch(`${process.env.REACT_APP_BACKEND_API}/users?id=${id}`, {
    method: 'PUT',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('update user data', data);
    })
    .catch(err => {
      console.log('fetch err', err);
    });
};

const handleDeleteUser = () => {
  fetch(`${process.env.REACT_APP_BACKEND_API}/users?id=${1}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log('delete user data', data);
    })
    .catch(err => {
      console.log('fetch err', err);
    });
};

const Header = () => {
  const {
    isAuthorized, logOut,
  } = useAuthData();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
      <div className={styles.flex}>
        <span>
          <Button onClick={handleFetchUsers}>Fetch users</Button>
        </span>
        <span>
          <Button
            onClick={() => handleFetchUser(4)}>
Fetch user
          </Button>
        </span>
        <span>
          <Button onClick={handleCreateUser}>Create user</Button>
        </span>
        <span>
          <Button
            onClick={() => handleUpdateUser(2)}>
update user
          </Button>
        </span>
        <span>
          <Button
            onClick={() => handleDeleteUser(3)}>
Delete user
          </Button>
        </span>
      </div>
      {isAuthorized && (
        <div className={styles.buttonContainer}>
          <Button onClick={logOut}>Log out</Button>
        </div>
      )}
    </div>
  );
};

export default observer(Header);

//
//
//
// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react';
// import io from 'socket.io-client';
// import { Link } from 'react-router-dom';
// import styles from './styles.module.css';
// import { Button } from 'components';
// import { useAuthData } from 'hooks/useAuthData';
//
// const socket = io.connect('http://localhost:8124');
// const Header = () => {
//   useEffect(() => {
//     // const socket = new WebSocket("ws://localhost:8124");
//     socket.onopen = (event) => {
//       console.log('soccket open');
//       socket.emit('greet', (data) => {
//         console.log('data from greet',data)
//       })
//       socket.on('msg', (data) => {
//         console.log('data from msg',data)
//       })
//     }
//
//   },[])
//   const { isAuthorized, logOut } = useAuthData();
//   return (
//     <div className={styles.container}>
//       <ul className={styles.list}>
//         <li>
//           <Link to={'/'}>Home</Link>
//         </li>
//       </ul>
//       {isAuthorized && (
//         <div className={styles.buttonContainer}>
//           <Button onClick={logOut}>Log out</Button>
//         </div>
//       )}
//     </div>
//   );
// };
//
// export default observer(Header);
