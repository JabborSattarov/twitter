import React from 'react';
import './profileimg.css';
const ProfileImg = ({src}) => {
	return <img src={src} alt='img' className='rounded-circle post__img' />;
};

export default ProfileImg;
