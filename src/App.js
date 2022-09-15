import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote, deleteNote } from "./features/Users";

function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [newNote, setNewNote] = useState("");

  return (
    <div  className="App">
      <h1 style={{ fontWeight:"bold",fontSize:"20px"}}>Add Title n Content</h1> 
      <div className="addUSer">
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Note..."
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
        <br />
        <button style={{ backgroundColor:"aliceblue", borderRadius:"10px" , marginLeft:"45px" , marginTop:"10px"}}
          onClick={() => {
            dispatch(
              addNote({
                id: userList[userList.length - 1].id + 1,
                title,
                note,
              })
            );
          }}
        >
          Add Note
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => {
          return (
            <div>
              <h1> {user.title}</h1>
              <h1> {user.note}</h1>
              <input
                style={{marginRight:"8px"}}
                type="text"
                placeholder="New Note..."
                onChange={(event) => {
                  setNewNote(event.target.value);
                }}
              />
              <button
              style={{marginRight:"8px"}}
                onClick={() => {
                  dispatch(
                    updateNote({ id: user.id, note: newNote })
                  );
                }}
              >
                Update Note
              </button>
              <button
              style={{marginRight:"8px"}}
                onClick={() => {
                  dispatch(deleteNote({ id: user.id }));
                }}
              >
                Delete Note
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;