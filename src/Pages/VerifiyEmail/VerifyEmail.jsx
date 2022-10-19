import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import './verify.css';
import { Context } from '../../Context/UserProvider';
const VerifyEmail = () => {
	const { user, setUser } = useContext(Context);

	const [token, setToken] = React.useState(false);
	let navigate = useNavigate();

	const VerifyEmail = (evt) => {
		evt.preventDefault();

		let { email, password } = user;

		fetch(
			'https://blog-app-management.herokuapp.com/api/accounts/verifyemail',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email: email,
					code: evt.target.elements[0].value,
				}),
			},
		)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					// console.log(data);
					let formData = new FormData()
					formData.append("email", email )
					formData.append("password", password )
					fetch(
						'https://blog-app-management.herokuapp.com/api/accounts/login',
						{
							method: 'POST',
							body: formData,
						},
					)
						.then((res) => res.json())
						.then((data) => {
							if (data.token) {
								window.localStorage.setItem(
									'token',
									data.token,
								);
								navigate('/');
							}
							// span.current.textContent =
							// 	'Invalid Passwod Or Email	';
						});

					setToken(data);
					// setTimeout(() => {
						// window.localStorage.setItem('token', data);
						// navigate('/');
					// }, 1000);
				}
			});
	};

	return (
		<div className='verify '>
			<div className='container'>
				<h1>Verify Email</h1>

				<form className='w-50 form' onSubmit={VerifyEmail}>
					{/* <input
						type='email'
						name='email'
						id='email'
						className='form-control mt-4'
						placeholder='email'
					/> */}
					<input
						type='text'
						name='code'
						id='code'
						className='form-control mt-4'
						placeholder='code'
					/>
					<Button description={'Vserify'} type={'submit'} />
				</form>
			</div>
		</div>
	);
};

export default VerifyEmail;
