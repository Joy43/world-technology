

import Swal from 'sweetalert2'
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
// import { Player, Controls } from '@lottiefiles/react-lottie-player';
import video from '../../assets/login.mp4'
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// import { Helmet } from 'react-helmet';
import useAuth from '../../Hooks/useAuth';

import Googlelogin from '../../Providers/Googlelogin';
import { Helmet } from 'react-helmet-async';


const Login = () => {

   const {signIn}=useAuth()
   const location = useLocation();
   const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const videoRef = useRef(null);
    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)
    useEffect(() => {
        
        videoRef.current.play();
    videoRef.current.addEventListener('ended', () => {
          videoRef.current.play();
        });
      }, []);

    const HandeLogin=event=>{
        // -----------------loading off-----------------------------//
        event.preventDefault();
       
      
        console.log(event.currentTarget)
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
       
       
      
        
        signIn(email,password)
        .then(result=>{
          console.log(result.user)
        
          if (result.user.email) {
            Swal.fire(
              'Login success!',
              'Welcome to my Website',
              'success'
            );
          } 
          // ------------NAVIGATE-----------------
          
         navigate(from, { replace: true });
        })
        
        .catch(error => {
          
          console.error(error);
          Swal.fire(
            'Login failed',
            'Email or password is incorrect',
            'error'
          );
        
        });
        
        }
    return (
     <div>
       <Helmet>
      <title>Login</title>
      <meta name='Home' content='This is home page' />
      </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <video
        ref={videoRef}
        autoPlay
        muted 
        width="440"
        height="400"
      >
        <source
          src={video}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

       

          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
  
<Googlelogin></Googlelogin>
{/*--------- end -----------*/}
      <form onSubmit={HandeLogin}>
      
      
      <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                 name='email'
                 type="email" 
                 placeholder="email" 
                 className="input input-bordered"
                 required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="showbtn inline-flex gap-2 relative ">
                        <input
                          type={showPassword ? "text":"password"}
                          name="password"
                          placeholder="password"
                          className="input input-bordered"
                          required
                        />
                        <span
                          className="mt-3"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <BsEyeSlashFill></BsEyeSlashFill>
                          ) : (
                            <BsEyeFill></BsEyeFill>
                          )}
                        </span>
                      </div>
                <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
            {/* <button className="confetti-button">Login</button> */}
            <button  className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
    <div className="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
    <span className="relative text-black">login</span>
  </button>
    
              </div>
      </form>
      {/* ---------------- */}
      <div>
      <p>Already have an account ! please <Link className="text-blue-700
       font-bold text-xl" to="/signup">Register</Link></p>
           </div>
           {/* --------------------- */}
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default Login;