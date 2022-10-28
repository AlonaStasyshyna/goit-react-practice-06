import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, updateUser } from './usersOperations';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },

  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: {
    [fetchUsers.pending]: state => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    [updateUser.pending]: state => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items[index] = payload;
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { changeFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
