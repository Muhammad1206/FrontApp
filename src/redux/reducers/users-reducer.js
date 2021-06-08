import { UserAPI } from "../../api/api";
const GET_USERS = "GET_USERS";
const UPDATE_BODY_TEXT = "UPDATE_BODY_TEXT";
const CLEAN_USERS_DATA = 'CLEAN_USERS_DATA'; 
const FILTER = 'FILTER';

const initialState = {
  users: [],
  body: "",
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case UPDATE_BODY_TEXT:
      return {
        ...state,
        body: action.text,
      };
    default:
      return state;
  }
}


const getUsersActionCreator = (data) => ({ type: GET_USERS, payload: data });
const updateBodyTextActionCreator = (text) => ({
  type: UPDATE_BODY_TEXT,
  text,
});

export const getUsersData = () => {
  return async (dispatch) => {
    const data = await UserAPI.getUsers();
    dispatch(getUsersActionCreator(data));
  };
};
export const getDataUserById = (id) => {
  return async (dispatch) => {
    dispatch(updateBodyTextActionCreator(id));
    const data = await UserAPI.getUserById(id);
    dispatch(getUsersActionCreator(data));
  };
};
export const getDataUserByName = (name) => {
  return async (dispatch) => {
    dispatch(updateBodyTextActionCreator(name));
    const data = await UserAPI.getUserByName(name);
    dispatch(getUsersActionCreator(data));
  };

};
