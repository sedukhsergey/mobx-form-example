import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { Button } from 'components';
import { useAuthData } from 'hooks/useAuthData';

const handleFetchUsers = () => {
  fetch('http://localhost:8080/users')
    .then(res => res.json())
    .then(data => {
      console.log('fetch data',data)
    })
    .catch(err => {
      console.log('fetch err',err)
    })
}

const handleCreateUser = () => {
  const data = JSON.stringify({name: 'Soe', email: 'some@email.com'})
  fetch('http://localhost:8080/users', {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      console.log('res',res)
      return res.json()
    })
    .then(data => {
      console.log('fetch data',data)
    })
    .catch(err => {
      console.log('fetch err',err)
    })
}

const Header = () => {
  const { isAuthorized, logOut } = useAuthData();
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
      </ul>
          <Button onClick={handleFetchUsers}>Fetch users</Button>
          <Button onClick={handleCreateUser}>Create user</Button>
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
