// UserFilter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter , updateFilteredUsers  } from '../../store/filterUserSlice';


// filter user based on name and gender

function UserFilter() {
  const {filter} = useSelector((state) => state.filter);
  const {users} = useSelector((state) => state.users) ;
  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    // update userFiterSlice state
    dispatch(setFilter({ ...filter, [e.target.name]: e.target.value }));
    dispatch(updateFilteredUsers(users));
  };

  return (
    <div className='d-flex justify-content-between' >
      
      <div className="mb-3">
        <label htmlFor="nameFilter">Filter by Name</label>
        <input
          type="text"
          className="form-control"
          id="nameFilter"
          name="name"
          value={filter.name}
          onChange={handleFilterChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="genderFilter">Filter by Gender</label>
        <select
          className="form-select"
          id="genderFilter"
          name="gender"
          value={filter.gender}
          onChange={handleFilterChange}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
    </div>
  );
}

export default UserFilter;
     