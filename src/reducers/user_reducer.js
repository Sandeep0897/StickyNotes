import {
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOG_OUT,
  USER_REGISTER_REQ,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILURE,
  USER_UPDATE_REQ,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
} from "../constants/user_constant";

//creating action for login and logout
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQ:
      return { loading: true };

    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };

    case USER_LOGIN_FAILURE:
      return { loading: false, error: action.payload };

    case USER_LOG_OUT:
      return {};

    default:
      return state;
  }
};

//creating Register Action
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQ:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload, success: true  };
    case USER_REGISTER_FAILURE:
      return { loading: false, error: action.payload, success: false };

    default:
      return state;
  }
};

//user profile update reducer
export const userProfileUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQ:
      return { loading: true };

    case USER_UPDATE_SUCCESS:
      return { loading: false, userInfo: action.payload,success:true };

    case USER_UPDATE_FAILURE:
      return { loading: false, error: action.payload};

    default:
      return state;
  }
};
