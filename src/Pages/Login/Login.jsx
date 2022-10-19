import React ,{useRef}from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {

	let span = useRef()

    let navigate = useNavigate()

    const HandleLogin = (evt) => {
        
        evt.preventDefault()
        
        let formData = new FormData()

        formData.append("email", evt.target.elements[0].value)
        formData.append("password", evt.target.elements[1].value)

        
        fetch("https://blog-app-management.herokuapp.com/api/accounts/login",{
            method:"POST",
            body: formData
               
        })
        .then(res => res.json())
        .then((data) => { 
			if(data.token){
				window.localStorage.setItem("token", data.token)           
                navigate("/")
			}
			span.current.textContent = "Invalid Passwod Or Email	"
        })  
    }


  return (
        <div className='login '>
			<div className='container'>
				<h1>Log In</h1>

				<span className='h3 text-danger' ref={span}></span>

				<form encType='multipart/form-data' className='w-50 form' onSubmit={HandleLogin}>
					<input
						type='email'
						name='email'
						id='email'
						className='form-control mt-4'
						placeholder='email'
					/>
					<input
						type='text'
						name='password'
						id='password'
						className='form-control mt-4'
						placeholder='Password'
					/>
					<button type='submit' className='btn btn-primary mt-4'>
						Login
					</button>
				</form>
			</div>
		</div>
  )
}

export default Login