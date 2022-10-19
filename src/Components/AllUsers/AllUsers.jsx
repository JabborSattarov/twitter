import React, { useEffect, useState } from 'react';

import './allusers.css';

const AllUsers = () => {


  let [allusers, setAllUsers] = useState([])
	useEffect(() => {
		fetch(`https://blog-app-management.herokuapp.com/api/users`)
			.then((res) => res.json())
			.then((data) => setAllUsers(data));
	}, []);

	return (
    <div className='allusers d-flex align-items-cneter flex-column justify-contnent-center'>

      <input className='w-75 form-control m-2  ' type="text" placeholder='Search'/>
        <ul>
            {
              allusers.map(user => (
                <li key={user.id}>{user.username}</li>
              ) )
            }
        </ul>
    </div>
  ) 
};

export default AllUsers;
