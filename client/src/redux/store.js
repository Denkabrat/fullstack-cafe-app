import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./reducers/authSlice";
import goodReducer from './reducers/goodSlise';
import modalReducer from './reducers/modalSlice';
import cartSlice from './reducers/cartSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    goods: goodReducer,
    modal: modalReducer,
    cart: cartSlice,
  }
});

export default store;
