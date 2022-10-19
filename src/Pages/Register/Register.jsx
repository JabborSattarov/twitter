import React, { useContext, useRef, useState }  from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Twitter} from '../../Assets/icons.js';
import { Context } from '../../Context/UserProvider.js';

import './register.css';

const Register = () => {
  
  const [res, setRes] = useState(false)
  let navigate = useNavigate()
  let span = useRef()

  let {_, setUser} = useContext(Context)
	
	const HandleRegister = (evt) => {
		evt.preventDefault();

		

		let firstName = evt.target.elements[0].value;
		let lastName = evt.target.elements[1].value;
		let username = evt.target.elements[2].value;
		let email = evt.target.elements[3].value;
		let password = evt.target.elements[4].value;
		let image = evt.target.elements[5].files[0];

		const userData = {
			firstName,
			lastName,
			username,
			email,
			password,
			image
		}
		setUser(userData)

		const formData = new FormData();
		formData.append('firstName', firstName);
		formData.append('lastName', lastName);
		formData.append('username', username);
		formData.append('email', email);
		formData.append('password', password);
		formData.append('image', image);

		fetch(
			'https://blog-app-management.herokuapp.com/api/accounts/registr',
			{
				method: 'POST',
				body: formData,
			},
		)
			.then((res) => res.json())
			.then((data) => {
        
        if(data === true){ 
        //   console.log(res);
        //   console.log(data);
          setRes(data)
			
            navigate("/verifyemail")
            
        }else{
        //   console.log(data);
          span.current.textContent = "You are already registered ! Please Log In"
          setRes(false)
        }
      });
     

    
	};

	return (

		<div className='register  '>
			<div className='container'>
			<Twitter />
				<h1 className='register__title'>Cereate an accaunt</h1>

        <span className='text-danger h4' ref={span}></span>

				<form encType='multipart/form-data' className='register__form form' onSubmit={HandleRegister}>

					<input
						className='form__input form-control'
						type='text'
						name='fistName'
						id='fistName'
            placeholder='firstName'
					/>
					<input
						className='form__input form-control'
						type='text'
						name='lastName'
						id='lastName'
            placeholder='lastName'
					/>
					<input
						className='form__input form-control'
						type='text'
						name='username'
						id='username'
            placeholder='username'
					/>
					<input
						className='form__input form-control'
						type='email'
						name='email'
						id='email'
            placeholder='email'
					/>
					<input
						className='form__input form-control'
						type='text'
						name='password'
						id='password'
            placeholder='password'
					/>
					<input
						className='form__input form-control'
						type='file'
						name='image'
						id='image'
					/>

					<button className='btn btn-primary mt-5 mb-4' type='submit'>
						Register
					</button>

           {
            
             res ? console.log("res is true") : <Link className='h4  mt-4' to={"/login"}>Log In</Link>
           }
				</form>
			</div>
		</div>
	);
};

export default Register;
