import { UserAPI } from "../../api/api";

const GET_USERS = 'GET_USERS';
const GET_USER = 'GET_USER';


const initialState = {
    users: [],
    body: '',
}

export function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                body: action.body,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }

        default:
            return state;
    }
}

const getUsersActionCreator = (data) => (
    { type: GET_USERS, payload: data }
);

export const getUsersData = () => {
    return async (dispatch) => {
        const data = await UserAPI.getUsers();
        dispatch(getUsersActionCreator(data));
    }
}
export const getDataUserById = (id) => {
    return async (dispatch) => {
        const data = await UserAPI.getUserById(id)
        dispatch(getUsersActionCreator(data))
    }
}
export const getDataUserByName = (name) => {
    return async (dispatch) => {
        const data = await UserAPI.getUserByName(name);
        dispatch(getUsersActionCreator(data));
    }
}