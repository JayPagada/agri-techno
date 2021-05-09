import * as actionTypes from "../actionsTypes.jsx"

const initialState = {
    formData: [],
    error:null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FEEDBACK_SUCCESS:
            const newForm = {
                ...action.formData,
                id: action.formId
            }
            return {
                ...state,
                formData: state.formData.concat(newForm)
            }
        case actionTypes.FEEDBACK_FAIL:
            return {
                ...state,
                loading: false
            }
        default :
            return {...state}
    }
}
export default reducer