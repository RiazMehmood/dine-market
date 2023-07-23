import { createSlice } from "@reduxjs/toolkit";

interface CartState {
    product_id: string,
    user_id: string,
    qty: number
}

const initialState: CartState[]=[{product_id: "abc", user_id: "xyz", qty:0}]

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addcart :(state,action)=>{},
        deletecart :(state,action)=>{},

    }

})

export const {addcart,deletecart} = cartSlice.actions
 
export default cartSlice.reducer