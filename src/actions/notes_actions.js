import {
  GET_NOTES_REQ,
  GET_NOTES_SUCCESS,
  GET_NOTES_FAILURE,
  CREATE_NOTE_REQ,
  CREATE_NOTE_SUCCESS,
  CREATE_NOTE_FAILURE,
  UPDATE_NOTE_REQ,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  DELETE_NOTES_REQ,
  DELETE_NOTES_SUCCESS,
  DELETE_NOTES_FAILURE
} from "../constants/notes_constants";
import axios from "axios";

export const getNotesAction = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_NOTES_REQ });
    //this is coming from initial state of the store
    const {
      userLogin: { userInfo },
    } = getState();

    //passing this config so that we get notes belonging to this user only since
    //axios fetch data based on jwt_token of particular user
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.JWT_token}`,
      },
    };

    //Axios api request
    const URL = "https://stickynoteswebapp.herokuapp.com/notes";
    const { data } = await axios.get(URL, config);

    //dispatching from axios get req
    dispatch({ type: GET_NOTES_SUCCESS, payload: data });
  } catch (error) {
    console.log(error) 
    dispatch({
      type: GET_NOTES_FAILURE,
      payload: "Please Login or Register before proceeding with this request",
    });
   
  }
};

//posting the notes
export const postNoteAction =
  (title, content) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_NOTE_REQ });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.JWT_token}`,
          "Content-Type": "application/json",
        },
      };

      //api req
      const URL = "https://stickynoteswebapp.herokuapp.com/notes";
      const { data } = await axios.post(
        URL,
        {
          title,
          content,
        },
        config
      );

      dispatch({ type: CREATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_NOTE_FAILURE,
        payload: "The requested operation could not proceed",
      });
    }
  };

//update the notes
export const updateNoteAction =
  (id, title, content) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_NOTE_REQ });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.JWT_token}`,
          "Content-Type": "application/json",
        },
      };

      const URL = `https://stickynoteswebapp.herokuapp.com/notes/${id}`;
      const { data } = await axios.put(
        URL,
        { title: title, content: content },
        config
      );

      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({type:UPDATE_NOTE_FAILURE,payload:"The requested operation failed"})
    }
  };


  // delete operation action
  export const deleteNoteAction =(id)=>async (dispatch,getState)=>{
    try{
        dispatch({type:DELETE_NOTES_REQ});

        const {userLogin :{userInfo}} = getState();

        const config ={
          headers:{
            Authorization:`Bearer ${userInfo.JWT_token}`,
            "content-type":"application/json"
          }
        }
        
        const URL =`https://stickynoteswebapp.herokuapp.com/notes/${id}`
        const {data} =await axios.delete(URL,config);

        dispatch({type:DELETE_NOTES_SUCCESS,payload:data})

    }catch(error){
         dispatch({type:DELETE_NOTES_FAILURE,
          payload:"The requested note could not be deleted"});
    }
  }