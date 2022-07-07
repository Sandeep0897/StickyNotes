import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer,userProfileUpdateReducer } from "../reducers/user_reducer";
import {getNotesReducer,postNoteReducer,updateNoteReducer,deleteNoteReducer} from "../reducers/notes_reducer";





const reducers = combineReducers({
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer,
  getNotes:getNotesReducer,
  postNotes:postNoteReducer,
  updateNotes:updateNoteReducer,
  deleteNotes:deleteNoteReducer,
  userProfile :userProfileUpdateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
  };

  const middleware = [thunk];

const store = legacy_createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
