import { createSlice } from '@reduxjs/toolkit';

const intitalStatusState = {
  showAlert: false,
  statusCode: null,
  error: false,
  statusMsg: null,
};

const statusSlice = createSlice({
  name: 'error',
  initialState: intitalStatusState,
  reducers: {
    successRequest(state, action) {
      const { statusCode, statusMsg } = action.payload;
      state.statusCode = statusCode;
      state.error = false;
      state.statusMsg = statusMsg;
      state.showAlert = true;
    },
    failedRequset(state, action) {
      const { statusCode, statusMsg } = action.payload;
      state.statusCode = statusCode;
      state.error = true;
      state.statusMsg = statusMsg;
      state.showAlert = true;
    },
    clearErrorState(state, action) {
      state.statusCode = null;
      state.error = false;
      state.statusMsg = null;
      state.showAlert = false;
    },
  },
});

export const statusActions = statusSlice.actions;

export default statusSlice;
