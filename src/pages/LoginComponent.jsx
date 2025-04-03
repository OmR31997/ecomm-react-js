import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logIn } from "../redux/Slices/AuthSlice.js"

import toast from 'react-hot-toast';
const LoginComponent = () => {

  const dispatch = useDispatch();
  const [uEmail, setuEmail] = useState('');
  const [uPassword, setuPassword] = useState('');

  const navigate = useNavigate();

  const fetchUserData = async (uEmail, uPassword) => {
    try {
      const response = await fetch(`http://localhost:9000/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uEmail: uEmail, uPassword: uPassword }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("User Login Successfully");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        dispatch(logIn());

        navigate(`/dashboard`);
      }
      else {
        toast.error("Login Failed");
      }
    }
    catch (err) {
      console.log("Error", err.message);
    }
  }

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (uEmail === '' || uPassword === '') {
      toast.error("Both blanks are required");
      return;
    }

    await fetchUserData(uEmail, uPassword);
  }

  return (
    <div className='w-100 d-flex justify-content-center'>
      <form method="get" onSubmit={onSubmitHandle} className='w-25 my-5'>
        <div className="input-group mb-3">
          <span className="input-group-text">@</span>
          <input type="text" name='uEmail' value={uEmail} onChange={(event) => { setuEmail(event.target.value) }} className="form-control" placeholder="Username" />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
          <input type="text" name='uPassword' value={uPassword} onChange={(event) => { setuPassword(event.target.value) }} className="form-control" placeholder="Password" />
        </div>

        <button type='submit' className='btn btn-success'>Submit</button>
      </form>
    </div>
  )
}

export default LoginComponent