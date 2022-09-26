import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Profile } from "../../types";
import { logIn, logOut } from "../../service";
import _ from "lodash";

export type AuthState = {
    authenticated: boolean;
    profile?: Profile;
};

const initialState: AuthState = {
    authenticated: false,
};

export const authSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logInAction.fulfilled, (state, action) => {
                state.authenticated = true;
                state.profile = _.cloneDeep(action.payload);
            })
            .addCase(logOutAction.fulfilled, (state) => {
                state.authenticated = false;
                state.profile = undefined;
            });
    },
});

export const logInAction = createAsyncThunk("auth/logIn", logIn);
export const logOutAction = createAsyncThunk("auth/logOut", logOut);

export default authSlice.reducer;
export const useAuth = () => useSelector((state: RootState) => state.auth);
