import { combineReducers } from "@reduxjs/toolkit";

import useSlice from "../slices/user";

const rootReducer=combineReducers({
    user:userSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer
