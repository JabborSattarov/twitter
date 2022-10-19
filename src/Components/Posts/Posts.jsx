import React, { useEffect, useState, useRef, useContext } from 'react';
import {
	CalendarIcon,
	EmojiIcon,
	GalaryIcon,
	GifIcon,
	StarIcon,
	StatisticIcon,
} from '../../Assets/icons';
import img from '../../Assets/images/signin-image.jpg';
import { Context } from '../../Context/UserProvider';
import Button from '../Button/Button';
import PostItem from '../PostItem/PostItem';
import ProfileImg from '../ProfileImg/ProfileImg';

import './posts.css';

const Posts = () => {
	let [data, setData] = useState([]);
	let [newData, setNewData] = useState(0)

	let {user ,_} = useContext(Context)
	
	let [token, setToken] = useState(window.localStorage.getItem("token"))
	
	let Title = useRef();
	let Description = useRef();
	let Image = useRef();

	useEffect(() => {
		fetch('https://blog-app-management.herokuapp.com/api/blogposts')
			.then((res) => res.json())
			.then((data1) => {
				setData(data1);
				// console.log(user);
			});
	}, [newData]);

	const SendPost = (e) => {
		e.preventDefault()

		let formData = new FormData();
		formData.append("Title",Title.current.value)
		formData.append("Description", Description.current.value);
		formData.append("Image",Image.current.files[0]);

		fetch('https://blog-app-management.herokuapp.com/api/blogposts', {
			method: 'POST',
			headers: {
				"assept":"*/*",
				'Authorization': `Bearer ${token}`
				
			},
			body: formData,
		}).then(res => res.json())
		.then(data => setNewData(newData +1))
	};



	return (
		<div className='posts'>
			<div className='posts__header header'>
				<h3 className='header__pagename'>Home</h3>
				<StarIcon />
			</div>
			<div className='posts__mypost '>
				<form encType='multipart/form-data'  className='posts__post post'>
					<ProfileImg src={user.imageUrl} />
					<input
						ref={Title}
						type='text'
						name='title'
						id='title'
						placeholder='Title'
						className='post__input__title'
					/>
					<input
						ref={Description}
						type='text'
						name='description'
						id='description'
						placeholder={`Wath's happening !`}
						className='post__input__description'
					/>
					<div className='post__icon'>
						<label htmlFor='img'>
							<input
								ref={Image}
								type='file'
								name='img'
								id='img'
								className='d-none'
							/>
							<GalaryIcon />
						</label>
						<GifIcon />
						<StatisticIcon />
						<EmojiIcon />
						<CalendarIcon />
						<span className='post__button'>
							<Button
								description={'Tweet'}
								type={'button'}
								onClick={SendPost}
							/>
						</span>
					</div>
				</form>
			</div>
			<ul className='posts__postslist'>
				{data.map((data) => (
					// console.log(data)
					<PostItem   data={data} key={data.id} />
				))}
			</ul>
		</div>
	);
};

export default Posts;
