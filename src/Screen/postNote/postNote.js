import React, { useState,useEffect} from "react";
import MainScreen from "../../Components/MainScreen";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Loading from "../../Components/spinner";
import Error from "../../Components/Error";
import {postNoteAction} from "../../actions/notes_actions";

function Post() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const postNotes = useSelector((state) => state.postNotes);
  const { loading, error,note } = postNotes;
  const navigate = useNavigate();
  
 
  const Handleclick = (event) => {
    event.preventDefault();
    dispatch(postNoteAction(title,content));
    navigate("/notes");
    if (!title || !content) {
       alert("Please fill the empty fields");
       navigate("/post");
    
    }
   
   
  };

  

  return (
    <MainScreen title="Add your favourite Note">
      {error && <Error variant="danger">{error}</Error>}
      {loading ? (
        <Loading />
      ) : (
        <Form onSubmit={Handleclick}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Content :</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Add
          </Button>
        </Form>
      )}
    </MainScreen>
  );
}

export default Post;
