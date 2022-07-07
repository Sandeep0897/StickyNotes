import React, { useState, useEffect } from "react";
import MainScreen from "../../Components/MainScreen";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/spinner";
import ErrorMessage from "../../Components/Error";
import axios from "axios";
import { updateNoteAction } from "../../actions/notes_actions";

function Edit() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const id = useParams().id;
  const dispatch = useDispatch();
  const updateNotes = useSelector((state) => state.updateNotes);
  const { loading, error } = updateNotes;

  useEffect(() => {
    const fetchNotebyId = async () => {
      const URL = `http://localhost:5000/notes/${id}`;
      const { data } = await axios.get(URL);
      setTitle(data.title);
      setContent(data.content);
    };
    fetchNotebyId();
  }, [id]);

  const Handleclick = (event) => {
    event.preventDefault();
    dispatch(updateNoteAction(id, title, content));
    navigate("/notes");
    if (!title || !content) {
      alert("Please fill all the required fields");
      navigate("/notes/:id");
    }
  };

  return (
    <MainScreen title="Update Your's Title and Content...">
    {error && <ErrorMessage>{error}</ErrorMessage>}
     {loading ? <Loading/>:
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

        <Button variant="info" type="submit">
          UPDATE
        </Button>
      </Form>}
    </MainScreen>
  );
}

export default Edit;
