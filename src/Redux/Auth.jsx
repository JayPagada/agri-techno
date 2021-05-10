import * as actionsTypes from "./actionsTypes"
import axios from "axios";
import {history} from "../index";
export const authStart = ()=>{
    return{
        type:actionsTypes.AUTH_START
    };
}
export const authSuccess = (token,userId)=>{
    return{
        type:actionsTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    };
}
export const authFail = (error)=>{
    return{
        type:actionsTypes.AUTH_FAIL,
        error:error
    };
}
export const logout = ()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    return{
        type:actionsTypes.AUTH_LOGOUT
    };
};

export const auth = (email,password,name,register )=>{
    console.log(register)
    return dispatch => {
        dispatch(authStart());
        const authData ={
            email:email,
            password:password,
            returnSecureToken: true
        };
        const regData = {
            email:email,
            password:password,
            name:name,
            returnSecureToken: true
        };
        (register) && (
            axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCK3nKrmD7dCbdkoqVFq4M_oMbsdwGNuY8",regData)
                .then(response=>{
                    localStorage.setItem("token",response.data.idToken)
                    localStorage.setItem("userId",response.data.localId)
                    dispatch(authSuccess(response.data.idToken,response.data.localId))
                    history.push("/AgriTechno/Home");
                })
                .catch(error=>{
                    console.log(error)
                    dispatch(authFail(error.response.data.error))
                })
        )
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCK3nKrmD7dCbdkoqVFq4M_oMbsdwGNuY8",authData)
            .then(response=>{
                localStorage.setItem("token",response.data.idToken)
                localStorage.setItem("userId",response.data.localId)
                dispatch(authSuccess(response.data.idToken,response.data.localId))
                history.push("/AgriTechno/Home");
            })
            .catch(error=>{
                console.log(error)
                dispatch(authFail(error.response.data.error))
            })
    };
};
export const authCheckState = () =>{
    return dispatch => {
        const token = localStorage.getItem("token")
        if (!token) {
            dispatch(logout());
        }
        else {
            dispatch(authSuccess(token))
        }
        }
    }
