// user slice for handling user data and error related to it
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: [],
    errorStatus: null,
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
        const currList = state.users;
        state.users = [...currList, action.payload]
      
    },
    authError: (state,action) => {
        state.errorStatus = action.payload.error
    },
    
  },
});

export const { addUser , authError  } = userSlice.actions;
export default userSlice.reducer;
