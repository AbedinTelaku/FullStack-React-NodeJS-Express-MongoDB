import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
    id:"u1",
    name: "Abedin Telaku", 
    image:"https://th.bing.com/th/id/OIP.2wJgLm91mIUVE7lomPTesQAAAA?rs=1&pid=ImgDetMain", 
    places:3
    }];
  return (
    <UsersList items={USERS}/>
  )
}

export default Users