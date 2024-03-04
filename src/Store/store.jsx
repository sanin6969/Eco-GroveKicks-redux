import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './Loginslice'
import ProductsSlice from "./ProductsSlice";
export default configureStore({
    reducer: {
        signUp:loginReducer,
        AdminProducts:ProductsSlice
    }
})