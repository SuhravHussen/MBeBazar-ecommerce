import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../Store/store';

import { iUser } from '../../models/user.interface';

// Type for our state
export interface userState {
    user: iUser | null;
}

// Initial state
const initialState: userState = {
    user: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;
        },
        removeUser: (state) => {
            state.user = null;
        },
        updateUser: (state, action) => {
            state.user = {
                ...state.user,
                ...action.payload,
            };
        },
    },
});

export const { addUser, removeUser, updateUser } = userSlice.actions;
export const selectUser = (state: AppState) => state?.user?.user;
export default userSlice.reducer;
