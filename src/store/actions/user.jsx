import {
    UPDATE_USER,
    SET_USER_DATA,
} from "../types";

export const loadUserData = (data) => {
    return async (dispatch) => {
        dispatch({
            type: SET_USER_DATA,
            payload: data,
        });
    };
};

export const updateUser = (data) => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_USER,
            payload: data,
        });
    };
};

export const waitingForUserData = () => {
    return async (dispatch) => {
        dispatch({
            type: UPDATE_USER,
            payload: {loading: true},
        });
    };
};
