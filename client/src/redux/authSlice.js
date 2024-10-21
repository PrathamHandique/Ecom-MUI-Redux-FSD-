import {createSlice} from '@reduxjs/toolkit';
const authSlice = createSlice({
    name:"auth",
    initialState:{
        isLogin:false,
        adminLogin:false
    },
    reducers:{
        setLogin:(state,action)=>{
            state.isLogin=action.payload;
        },
        setLogout:(state,action)=>{
            state.isLogin=action.payload;
        },
        setAdminLogin:(state,action)=>{
            state.adminLogin=action.payload;
        },
    }
});
export const {setLogin,setLogout,setAdminLogin} = authSlice.actions;
export default authSlice.reducer;



