import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "product",
    initialState: [{name: "shoes", category: "bata"}],
    reducers:{
        addProducts :(state,action)=>{},
        deleteProducts :(state,action)=>{},

    }

})


export const {addProducts,deleteProducts} = productSlice.actions
 
export default productSlice.reducer