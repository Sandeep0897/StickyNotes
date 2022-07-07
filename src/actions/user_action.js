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
import axios from "axios";

//creating login action
export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQ });

    const config = {
      headers: {
        "content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/users/login",
      {
        email,
        password,
      },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: "Invalid Email or password",
    });
  }
};

//creating logout action
export const userLogoutAction = () => (dispatch) => {
  dispatch({ type: USER_LOG_OUT });
  localStorage.removeItem("userInfo");
};

//creating register action
export const userRegisterAction =
  (name, email, password, Telephone) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQ });

      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:5000/users/",
        {
          name,
          email,
          password,
          Telephone,
        },
        config
      );

      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILURE,
        payload: "Please complete all the fields or check for invalid fields",
      });
    }
  };

//profile update action
export const userProfileUpdateAction = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_UPDATE_REQ });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.JWT_token}`,
        "content-type": "application/json",
      },
    };

    const URL = "http://localhost:5000/users/profile";
    const { data } = await axios.post(
      URL,user,config
    );

    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_UPDATE_FAILURE, payload: "Profile update failed" });
  }
};
