import * as actionType from "./actionsTypes"
import axios from "axios";
import {history} from "../index";
export const feedbackSuccess = (id,formData)=>{
    return{
        type:actionType.FEEDBACK_SUCCESS,
        formData:formData,
        formId:id
    };
};
export const feedbackFail = (error)=>{
    return{
        type:actionType.FEEDBACK_FAIL,
        error:error
    };
};
export const feedBackForm = (values,token)=>{
    return dispatch => {
        const formData ={
            name : values.name,
            Email : values.email,
            phone:values.phone,
            Message:values.feedback
        };
            axios.post("https://agri-techno-default-rtdb.firebaseio.com/feedBackForm.json?auth="+token,formData)
            .then(response=>{
                dispatch(feedbackSuccess(response.data.name,formData))
                history.push("/AgriTechno/ContactUs")
            })
            .catch(error=>{
                dispatch(feedbackFail(error));
            });
    };
};
