// src/components/UserInputForm.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser , authError } from '../store/userSlice';
import NavigateBtn from './NavigateBtn';

// user input form
function UserInputForm() {
  const {errorStatus} = useSelector((state) => state.users);
  const [user, setUser] = useState({ name: '', email: '', gender: '', mobile: '' });
  const dispatch = useDispatch();
  
  // validate user details before submitting
  const validateForm = () => {
  console.log('length', user.mobile.length);
  if (!user.name || !user.email || !user.gender 
      || !user.mobile || user.mobile.length!=10 || !user.email.includes("@gmail.com")) {
      return false;
    }
  return true;
  };

   // hanlde submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
   const isValid = validateForm();
  if(!isValid){
    dispatch(authError({error: "Enter Valid Details"}))
  return ; 
  }
    
  // update userSlice state
   dispatch(addUser(user));
    setUser({ name: '', email: '', gender: '', mobile: '' });
  };

  const handleChange = (e) => {
     setUser({ ...user, [e.target.name]: e.target.value })
  }

// useEffect for handling error- State , change state after 3sec
useEffect(() => {
     if(errorStatus){
      const timeoutId = setTimeout( ()=> {
        dispatch(authError({error: null}));
      },3000)
      return ()=> {
        clearTimeout(timeoutId);
      }
     }
  },[errorStatus])

return (
    <div className='mt-4'>
    <div className='row '>
    <div className='col-md-6 mx-auto px-4'> 
    <form onSubmit={handleSubmit}>
     <h2>User-Management</h2>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" name='name' value={user.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name='email' value={user.email} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label>Gender</label>
          <select className="form-select" name='gender' value={user.gender} onChange={handleChange} required>
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-3">
          <label>Mobile</label>
          <input type="tel" className="form-control" name='mobile' value={user.mobile} onChange={handleChange} required />
        </div>

        
  { errorStatus &&
    <div className='text-danger font-weight-bold' style={{fontSize: '22px'}}> {errorStatus}</div>
  }
         
   <div className='d-flex justify-content-between m-2'>
        <button type="submit" className="btn btn-primary">Add User</button>
       <NavigateBtn path={'/users'} />
        </div>
        
        </form>
      </div>
      </div>
    </div>
  );
}

export default UserInputForm;
