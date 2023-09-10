import {
    CLEAR_DATA_DATA,
    CLEAR_DATA_ERROR,
    GET_DATA_FAIL,
    GET_DATA_LOADING_START,
    GET_DATA_SUCCESS, POST_DATA_FAIL, POST_DATA_LOADING_START,
    POST_DATA_SUCCESS
} from "../types";


const initialState = {
    data: null,
    postLoading: false,
    postError: null,
    getLoading: false,
}

export const dataReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case GET_DATA_SUCCESS :
            return {
                ...state,
                data: payload,
                getLoading: false,
            }
        case GET_DATA_FAIL :
            return {
                ...state,
                getLoading: false,
            }
        case GET_DATA_LOADING_START :
            return {
                ...state,
                getLoading: true,
            }
        case POST_DATA_SUCCESS :
            return {
                ...state,
                postLoading: false,
            }
        case POST_DATA_FAIL :
            return {
                ...state,
                postError: payload,
                postLoading: false,
            }
        case POST_DATA_LOADING_START :
            return {
                ...state,
                postLoading: true,
            }
        case CLEAR_DATA_DATA :
            return {
                ...state,
                data: null,
                postLoading: false,
                postError: null,
            }
        case CLEAR_DATA_ERROR :
            return {
                ...state,
                postError: null,
            }
        default:
            return state
    }
}