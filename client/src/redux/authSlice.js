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
        setadminLogin:(state,action)=>{
            state.adminLogin=action.payload;
        },
    }
});
export const {setLogin,setLogout,setadminLogin} = authSlice.actions;
export default authSlice.reducer;



