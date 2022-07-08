import React,{useEffect} from "react";
import MainScreen from "../../Components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Row, Col,Container} from "react-bootstrap";
import{useSelector,useDispatch} from "react-redux";
import {getNotesAction} from "../../actions/notes_actions";
import {deleteNoteAction} from "../../actions/notes_actions";
import Loading from "../../Components/spinner";
import Error from "../../Components/Error";
import {useNavigate} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';




function Notes() {

const dispatch=useDispatch();
const getNotes=useSelector((state)=>state.getNotes);
const{loading,notes,error}=getNotes;
const userLogin = useSelector((state)=>state.userLogin)
const{userInfo}=userLogin;
const navigate=useNavigate();

const postNotes = useSelector((state) => state.postNotes);
const{success:successPost}=postNotes;

const updateNotes = useSelector((state) => state.updateNotes);
const { success:successUpdate } = updateNotes;

const deleteNotes = useSelector((state)=>state.deleteNotes);
const{success:successDelete,loading:loadingDelete,error:errorDelete}=deleteNotes;
  
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


  useEffect(()=>{
    dispatch(getNotesAction());
    if(!userInfo){
      navigate('/');
    }
  },[dispatch,navigate,userInfo,successPost,successUpdate,successDelete])


  const deleteHandler=(id)=>{
    if (window.confirm("Do you want to delete this note ?")) {
      dispatch(deleteNoteAction(id));
    }
    navigate('/notes');
  }


  return (
    <MainScreen title={`Hello.. ${capitalizeFirstLetter(userInfo?.name )}`}>
      {errorDelete && <Error variant="danger">{errorDelete}</Error>}
     
      {error && <Error variant="danger">{error}</Error>}
      {loading || loadingDelete ? <Loading/> :
      <Container>
      <Row>
      {notes && notes.map((note,index)=>{
        return  <>
        <Col key={index} xs={12} md={4} lg={3} >
            <Card bg="Light" border="warning" style={{ marginTop: '25px' }}>
            <Card.Body>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>
          {note.content}
        </Card.Text>
        <Button variant="info"  href= {`/notes/${note._id}`}><EditIcon/></Button>
        <Button  variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}><DeleteIcon/></Button>
      </Card.Body>
              </Card>
            </Col>
      </>}
        )}</Row>
        </Container>}
       
    </MainScreen>

  );
}

export default Notes;
