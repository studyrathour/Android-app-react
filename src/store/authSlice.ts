import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Student, Admin } from '../models';

interface AuthState {
  user: Student | Admin | null;
  role: 'student' | 'admin' | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStudent: (state, action: PayloadAction<Student>) => {
      state.user = action.payload;
      state.role = 'student';
      state.isAuthenticated = true;
    },
    loginAdmin: (state, action: PayloadAction<Admin>) => {
      state.user = action.payload;
      state.role = 'admin';
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginStudent, loginAdmin, logout } = authSlice.actions;
export default authSlice.reducer;
