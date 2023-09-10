import {
    CLEAR_DATA_ERROR,
    GET_DATA_LOADING_START, GET_DATA_SUCCESS,
    POST_DATA_FAIL,
    POST_DATA_LOADING_START,
    POST_DATA_SUCCESS
} from "../types";
import {authConfig, dataUrl, fetchRequest} from "./fetchTools";


export const postData = (data,navigate) => async (dispatch) => {
    dispatch(clearDataError())
    dispatch({type: POST_DATA_LOADING_START})
    try {
        const config = authConfig()

        const formData = new FormData();

        for (const key in data) {
            if (key === 'image') {
                for (let i = 0; i < data.image.length; i++) {
                    formData.append('image[]', data.image[i])
                }
            } else {
                formData.append(key, data[key]);
            }
        }

        const fetchData = await fetchRequest(dataUrl, 'POST', formData,config)
        dispatch({type: POST_DATA_SUCCESS})

    } catch (err) {
        dispatch(setDataError(err.message))
    }
}

export const getOrders = (page) => async (dispatch) => {

    dispatch({type: GET_DATA_LOADING_START})
    try {
        const config = authConfig(true)
        const fetchData = await fetchRequest(dataUrl, 'GET', null,config)


        const {data} = fetchData

        dispatch({type: GET_DATA_SUCCESS,payload: data})
    } catch (err) {

    }
}

export const clearDataError = () => dispatch => {
    dispatch({type: CLEAR_DATA_ERROR})
}

export const setDataError = (payload) => dispatch => {
    dispatch({type: POST_DATA_FAIL,payload})
}