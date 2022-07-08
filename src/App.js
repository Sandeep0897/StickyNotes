import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Homepage from "./Screen/landingpage/landingpage";
import Notes from "./Screen/Notes/Notes";
import Login from "./Screen/login/login";
import Register from "./Screen/register/register";
import Post from "./Screen/postNote/postNote";
import Edit from "./Screen/updateNote/updateNote";
import Profile from "./Screen/profile/profile";
import{BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
       <Header/>
       <main>
        <Routes>
        <Route path="/" element= {<Homepage/>} exact/>
        <Route path="/notes" element= {<Notes/>} exact/>
        <Route path="/login" element= {<Login/>} exact/>
        <Route path="/register" element= {<Register/>} exact/>
        <Route path="/post" element= {<Post/>} exact/>
        <Route path="/notes/:id" element= {<Edit/>} exact/>
        <Route path="/profile" element= {<Profile/>} exact/>
        </Routes>
       </main>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
