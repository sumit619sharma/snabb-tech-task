
// filter user slice for handling state and reducer related to filter functionality

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: {name: '', gender: ''},
    filteredUsers: [],
}

const filterUserSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
        state.filter =  action.payload;
      },
    clearFilter: (state) => {
        state.filter =  { name: '', gender: '' };
      },
    
    updateFilteredUsers: (state,action) => {
        const users = action.payload;
        console.log("usersList", users)
        const filter = state.filter
     const upFilterUser =  users.filter( (user) => {
      const nameMatch = user.name.toLowerCase().includes(filter.name.toLowerCase());
      const genderMatch = filter.gender === '' || user.gender === filter.gender;
      return nameMatch && genderMatch;
     })

     state.filteredUsers = upFilterUser;
      }
  },
});

export const { setFilter , clearFilter, updateFilteredUsers } = filterUserSlice.actions;
export default filterUserSlice.reducer;
