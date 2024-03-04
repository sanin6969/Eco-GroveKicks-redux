import { createSlice } from "@reduxjs/toolkit";
import { Products } from "../PAGES/Data";
 const ProductSlice = createSlice({
    name: 'AdminProducts',
    initialState:[...Products],
    reducers: {
        SetAdminProducts: (state, action) => {
            return [...action.payload]
        },
        removeItem:(state,action)=>{
            return state.filter((product)=>product.id!==action.payload)
        }
    }
})
export const {SetAdminProducts,removeItem}=ProductSlice.actions
export default ProductSlice.reducer