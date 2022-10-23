import { configureStore } from '@reduxjs/toolkit';

import employeeSlice from './employee-slice';
import statusSlice from './status-slice';

const store = configureStore({
  reducer: { employee: employeeSlice.reducer, status: statusSlice.reducer },
});

export default store;
