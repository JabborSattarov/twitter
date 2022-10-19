import React, { useContext, useEffect, useState } from 'react'
import PostItem from '../PostItem/PostItem'
import {StarIcon} from '../../Assets/icons'

import './profile.css'
import { Context } from '../../Context/UserProvider'
const Profile = () => {

	let {user , setUser} = useContext(Context)
	
	const [token, setToken] = useState(window.localStorage.getItem("token"))
	const [profile, setProfile] = useState({})
	const [posts, setPosts] = useState([])
	
	useEffect(()=>{
	
		fetch("https://blog-app-management.herokuapp.com/api/users/id",{
			method:"GET",
			headers:{
				"Content-Type":"application/json",
				"Authorization":`Bearer ${token}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setProfile(data)
			setUser(data)
			// console.log(user);
			// console.log(data);
			if(data){
				fetch(`https://blog-app-management.herokuapp.com/api/users/${data.id}/blogposts`)
				.then(res => res.json())
				.then( ok => setPosts(ok))
			}
		})
	},[])

  return (
	<div className='profile'>
		<div className="profile__header">
			<h2>{profile.firstName}</h2>
			<StarIcon/>
		</div>
		<div className="profile__userProfile">
			<img src={profile.imageUrl} alt="img" className='userProfile__img'/>
		</div> 
		<div className="profile__userData">
			<h4>{profile.username}</h4>
			<h5>{`${profile.firstName} ${profile.lastName}`}</h5>
			<h6>{profile.email}</h6>
		</div>
		<ul className='profile__postList'>
			{
				// console.log(posts)
				posts.map( post => (
					<PostItem data={post} key={post.id}/>
				))
			}
		</ul>
	</div>
  )
}

export default Profile