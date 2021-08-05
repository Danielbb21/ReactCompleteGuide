import { createSlice } from '@reduxjs/toolkit';

let logoutTimer;
const calculateRemaingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remaingTime = adjExpirationTime - currentTime;
    return remaingTime;
};

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remaingTime = calculateRemaingTime(storedExpirationDate);
    if (remaingTime <= 6000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return{
        token: storedToken,
        duration: remaingTime
    };
}

const teste = localStorage.getItem('token');
const initialState = {

    token: localStorage.getItem('token') || null,
    isLogged: !!teste,
};


const loginSlice = createSlice({
    name: 'log',
    initialState: initialState,
    reducers: {

        logOut(state) {

            state.isLogged = false;
            state.token = null;
            localStorage.removeItem('token');
            // if(logoutTimer){
            //     clearTimeout(logoutTimer)
            // }
        },
        logIn(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;

            localStorage.setItem('token', state.token);
            localStorage('expirationTime', action.payload.reamingTime);

            // const remaingTime = calculateRemaingTime(action.payload.reamingTime);
            // logoutTimer = setTimeout(this.logOut, remaingTime);

        }
    }
});

export const loginActions = loginSlice.actions;

export default loginSlice;