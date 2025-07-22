import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './reducer'

const Store = configureStore({
    reducer: {
        users: UserReducer,
    },
});
export default Store