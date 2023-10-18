//parent component for user details UI

import React from 'react'
import ShowUserDetails from './ShowUserDetails'
import ExportToCSV from './ExportToCSV'
import NavigateBtn from '../NavigateBtn'
import UserFilter from './UserFilter'
import { useSelector } from 'react-redux'

// parent component for userDetails
const ShowUsers = () => {

  const {users} = useSelector((state) => state.users);
  const {filter , filteredUsers} = useSelector((state) => state.filter);
  
  // filter user logic
  let userList=[];
  if(filter.name==='' && filter.gender===''){
    userList = users  ;
  } else{
    userList = filteredUsers; }

  return (
    <div className='row mt-3 mx-2'>
     <div className='col-md-6 mx-auto text-center'>
     <h1 className='mb-3'>User Details</h1>
     <UserFilter /> 
     <ShowUserDetails users={userList}/>
     
     <div className='d-flex justify-content-between mt-3'>
      <ExportToCSV users={userList}/>
      <NavigateBtn path={'/'} /> 
      </div>

      </div>
    </div>
  )
}

export default ShowUsers
