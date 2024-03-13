import  { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
  const credentials = {originalEmail: "tharunnxtwave@gmail.com", originalPassword:"mobilefirst"}
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mailError,setMailError] = useState("")
    const [pwdError,setPwdError] = useState("")
    const [mainError,setMainError] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()

    
    const submitForm = (e) => {

      e.preventDefault()
      if (!password){
          const errorForPwd = "*Password is required"
          setPwdError(errorForPwd)
      } if (!email){
        const errorForMail = "*Email is required"
        setMailError(errorForMail)
      } if (password && email){
         if (password === credentials.originalPassword && email === credentials.originalEmail){
          navigate("/home")
         }else{
          const errorForMain = "*Incorrect Email/Password. Please check the credentials"
          setPwdError("")
          setMailError("")
          setMainError(errorForMain)
         
         }
      }
    }

    const getEmail = (e) => {
      const typedEmail = e.target.value;
      setEmail(typedEmail)
    }

    const getPassword = (e) => {
      const typedPassword = e.target.value 
      setPassword(typedPassword)
    }

    const showPasswordChange = (e) => {
      console.log(e.target.checked)
      setShowPassword(!showPassword)
    }

  return (
    <div className='loginPage'>

<div className='loginbox'>
        <h1 className='loginText'> Login </h1>
        <p className='errorMsg'> {mainError} </p>
        <form onSubmit={submitForm}>
  <div className="form-group">
    <label htmlFor="InputEmail">Email address</label>
    <input type="email" className="form-control input"  id="InputEmail" value={email} placeholder="Email" onChange={getEmail}/>
    <p className='errorMsg'>{mailError}</p>
  </div>
  <div className="form-group">
    <label htmlFor="InputPassword">Password</label>
    {showPassword ? ( <input type="text" className="form-control input" value={password} id="InputPassword" placeholder="Password" onChange={getPassword} /> ) : (<input type="password" className="form-control input" value={password} id="InputPassword" placeholder="Password" onChange={getPassword} />)}
    <input type='checkbox' id="showPassword" onChange={showPasswordChange}/>
    <label htmlFor='showPassword' style={{fontSize:"14px", marginLeft:"5px"}}> Show Password </label>
    <p className='errorMsg'>{pwdError}</p>
  </div>
  <button type="submit" className="btn btn-default">Submit</button>

</form>
    </div>
    <footer className='text-left'> 
      <pre> Credentials : </pre>
      <pre> Email : tharunnxtwave@gmail.com </pre>
      <pre> Password : mobilefirst </pre> </footer>
    </div>
   
  )
}

export default LoginForm