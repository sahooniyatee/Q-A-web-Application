import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import img1 from '../Images/query.gif'
import axios from 'axios';
// const strongRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,8}$");
function Login() {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    pass: "",
    conpass: "",
    phno: "",
  });

  const [userErr, setuserErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleState = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setuserErr(validate(user));
    register();
    console.log(validate(user));
    if (Object.keys(validate(user)).length === 0) {
      Quora();
    }
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(userErr);
    if (Object.keys(userErr).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [userErr]);

  let val = true;
  const validate = (values) => {

    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    if (!values.fname) {
      val = false;
      errors.fname = "Name cannot be empty";
    }
    else if (!values.lname) {
      val = false;
      errors.lname = "Last name can not be empty";
    }
    else if (!isNaN(values.fname)) {
      val = false;
      errors.fname = "Name cannot be a number";
    }
    else if (!isNaN(values.lname)) {
      val = false;
      errors.lname = "Name cannot be a number";
    }
    else if (values.fname.includes('1') || values.fname.includes('2') || values.fname.includes('3') || values.fname.includes('4') || values.fname.includes('5') || values.fname.includes('6') || values.fname.includes('7') || values.fname.includes('8') || values.fname.includes('9') || values.fname.includes('0')) {
      val = false;
      errors.fname = "Name cannot contain digits";
    }
    if (!values.email) {
      val = false;
      errors.email = "Email cannot be empty";
    }
    else if (!regex.test(values.email)) {
      val = false;
      errors.email = "Please follow valid email format";
    }
    if (!values.phno) {
      val = false;
      errors.phno = "Contact number cannot be empty";
    }
    if (!values.pass) {
      val = false;
      errors.pass = "Password cannot be empty";
    }
    else if (values.pass.length < 6) {
      val = false;
      errors.pass = "Password must be minimum 6 characters";
    }
    //   else if(!strongRegex.test(values.pass)){
    //     val =false;
    //     errors.pass = "Password should contain atleast one special character and atleast one digit and atleast one uppercase and lowercase letter";
    //     console.log(strongRegex.test(values.pass));
    //   }
    if (!values.conpass) {
      val = false;
      errors.conpass = "Confirm password is required";
    }
    else if (values.conpass !== values.pass) {
      val = false;
      errors.conpass = "Passwords do not match";
    }
    return errors;



  };
  // const errmsg = () =>
  // {
  //   toast({userErr.lname});
  // }
  var ch;
  // const register=()=>
  function register() {

    if (val === true) {
      const { fname, lname, email, phno, pass, conpass } = user
      if (fname && lname && email && phno && pass && conpass) {

        ch = axios.post("http://localhost:9000/register", user)
          .then(res => alert(res.data.message))
        // history("/Homepage")
        console.log(ch)

      }
      else {
        toast.error('Please enter all values!!!', {
          position: "top-center",
          autoClose: 5000,
          // hideProgressBar: false,
          // closeOnClick: true,
          // pauseOnHover: true,
          // draggable: true,
          // progress: 1,
        });
        // alert("");
      }
      // window.open('/api/registeredUsers','_blank');
    }
  };
  function Quora() {
    if (ch) {
      window.open('/Quora', '_self');
    }
  }

  return (
    <>
      {Object.keys(userErr).length === 0 && isSubmit ? (toast.success("Registration Sucessfully Do you want to contineu ", {
        position: "top-center",
        autoClose: 10000
      })) : ""}
      <div className='login'>
        <div className="login-left">
          <h3>Welcome to the Page</h3>
        </div>
        <div className='logo'>
          <img
            src={img1}
            alt="logo" />
          {/* <button className='botton'>Login</button> */}
        </div>

        <form className='frm' onSubmit={handleSubmit} method="post">
          <div className='form'>
            <h2>User Registration Form</h2>
            <div className='container'>
              <div className='name' style={{ gap: "1rem" }}>
                <input className='fname' type="text" id="fname" name='fname' value={user.fname} onChange={handleState} placeholder='First Name..' />
                <p>{userErr.fname}</p>
                <input className='lname' type="text" id="lname" name='lname' value={user.lname} onChange={handleState} placeholder='Last Name..' />
                <p>{userErr.lname}</p>
              </div>
              <div className='email1' style={{ gap: "1rem" }}>
                <input type="email" placeholder='Email...' name='email' value={user.email} onChange={handleState} />
                <p>{userErr.email}</p>
                <div className='radio1'>
                  <input type="radio" className='radio1' value="Male" name='Male' />
                  <label for="gender1" >Male</label>
                  <input type="radio" className='radio1' value="Female" name='Male' />
                  <label for="gender2" >Female</label>
                  <input type="radio" className='radio1' value="Others" name='Male' />
                  <label for="gender3" >Others</label>
                </div>

              </div>
              <div className='number' style={{ gap: "1rem" }}>
                <input className='num' type="number" placeholder='Enter Your Number..' name='phno' value={user.phno} onChange={handleState} />
                <p>{userErr.phno}</p>
                <input type="number" placeholder='Enter Your Age..' />
              </div>
              <div className='password' style={{ gap: "1rem" }}>
                <input type="password" placeholder='Password...' name='pass' value={user.pass} onChange={handleState} />
                <p>{userErr.pass}</p>
                <input type="password" placeholder='Confirm Password...' name='conpass' value={user.conpass} onChange={handleState} />
                {userErr.conpass ? (<div className='msg'>{userErr.conpass} </div>) : null}
              </div>
              <div className='link'>Existing User please<Link to="/"> Login</Link></div>
              <button className='btn' type='submit' onClick={register}>Register</button>
            </div>
          </div>
        </form>
        {/* <div className='back'>
            <LoginUser/>
            </div> */}
      </div>

      {/* <ToastContainer /> */}
    </>
  );
}

export default Login