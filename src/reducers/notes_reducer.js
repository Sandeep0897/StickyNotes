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
  DELETE_NOTES_FAILURE,
} from "../constants/notes_constants";

//Read operation
export const getNotesReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case GET_NOTES_REQ:
      return { loading: true };
    case GET_NOTES_SUCCESS:
      return { loading: false, notes: action.payload };
    case GET_NOTES_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//create operation
export const postNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOTE_REQ:
      return { loading: true };
    case CREATE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case CREATE_NOTE_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//update operation
export const updateNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NOTE_REQ:
      return { loading: true };

    case UPDATE_NOTE_SUCCESS:
      return { loading: false, success: true };

    case UPDATE_NOTE_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//Delete operation reducer
export const deleteNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTES_REQ:
      return { loading: true };

    case DELETE_NOTES_SUCCESS:
      return { loading: false, success: true };

    case DELETE_NOTES_FAILURE:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
