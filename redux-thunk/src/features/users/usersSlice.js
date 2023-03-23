import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'one gyul' },
  { id: '1', name: 'two gyul' },
  { id: '2', name: 'three gyul' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
