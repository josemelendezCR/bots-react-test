import { useState } from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaGoogle, FaTwitter, FaGithub, FaRegEyeSlash, FaRegEye } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { username, password } = formData;

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="container">
      <form className="form" >
        <div className="form-header">
          <img className="logo" src={logo}/>
          <p>Enter your email address and password to access admin panel.</p>
        </div>
        <div className="form-group">
          <p className="form-label">Username</p>
          <input type="text" name="username" placeholder="Enter username" value={username} onChange={onChange} />
        </div>
        <div className="form-group">
          <p className="form-label">Password</p>
          <div className="group">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" value={password} onChange={onChange} />
            <button type="button" className="show-password-btn" onClick={toggleShowPassword}>
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>        
        </div>
        <button className="btn">Log In</button>
        <h5>Sign in with</h5>
        <div className="social">
          <span>
            <FaFacebook />
          </span>
          <span className="google-logo">
            <FaGoogle />
          </span>
          <span className="twitter-logo">
            <FaTwitter />
          </span>
          <span className="github-logo">
            <FaGithub />
          </span>
        </div>
      </form>
      <div className="container-footer">
        <a href="#">Forgot your passowrd?</a>
        <div className="group">
          <p>Don't have an account?</p>
          <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
}