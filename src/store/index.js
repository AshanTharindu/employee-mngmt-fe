import { configureStore } from '@reduxjs/toolkit';

import employeeSlice from './employee-slice';

const store = configureStore({
  reducer: { employee: employeeSlice.reducer },
});

export default store;
