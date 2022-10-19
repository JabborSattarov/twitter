import React, { useState } from 'react';
import './postitem.css';
import ProfileImg from '../ProfileImg/ProfileImg';
import img from '../../Assets/images/signin-image.jpg';
import { LikeIcon, MoreIcon, UnLikeIcon, ViewIcon } from '../../Assets/icons';

const PostItem = ({data}) => {
	let { username, title, description, imageUrl, viewCount } = data;
	let [like, setLike] = useState(false);

	// console.log(data);
	return (
		<li className='listItem'>
			<div className='listItem__item'>
				<ProfileImg src={imageUrl} />
				<div className='listItem__userdata'>
					<b className='userdata__username'>{username}</b>

					<MoreIcon />
					<div className='listItem__itempost'>
						<h4>{title}</h4>
						<p>{description}</p>
						<img src={imageUrl} alt='postImage' className='listItem__img'/>
						<div className='listItem__views views'>
							<span className="views__like" onClick={() => setLike(!like)}>
								{like ? <LikeIcon /> : <UnLikeIcon />}
							</span>
							<p className='views__view'>
								<ViewIcon />
								 { viewCount}
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default PostItem;
