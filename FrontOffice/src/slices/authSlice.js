

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
    
 }

export const  authSlice =createSlice({
    name:'auth',
    initialState ,


    reducers:{
        login:(state, action) => {
            state.user = action.payload.user
            localStorage.setItem('userInfo', JSON.stringify(action.payload.user));
            //document.cookie = `token=${action.payload.user}; path=/; secure; HttpOnly;`; // Envoi du token dans les cookies
            sessionStorage.setItem("user", JSON.stringify(action.payload.user));
        },
        register:(state, action) => {
            state.user = action.payload.others
        },
        logout: (state) => {
            state.user = null
            sessionStorage.clear(); // ✅ Supprime aussi du sessionStorage
           // document.cookie = "jwt=; path=/; ";

            localStorage.clear()
        }
        
    },
   
});

export const {login,logout,register}=authSlice.actions;
export default authSlice.reducer;



