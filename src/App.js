import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, updateNote, deleteNote } from "./features/Users";

function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div  className="App">
      <h1 style={{ fontWeight:"bold",fontSize:"20px"}}>Add Title n Content</h1> 
      <div className="addUSer">
        <input
          type="text"
          placeholder="Title..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Note..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <button style={{ backgroundColor:"aliceblue", borderRadius:"10px" , margin:"10px"}}
          onClick={() => {
            dispatch(
              addNote({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
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
              <h1> {user.name}</h1>
              <h1> {user.username}</h1>
              <input
                style={{marginRight:"8px"}}
                type="text"
                placeholder="New Note..."
                onChange={(event) => {
                  setNewUsername(event.target.value);
                }}
              />
              <button
              style={{marginRight:"8px"}}
                onClick={() => {
                  dispatch(
                    updateNote({ id: user.id, username: newUsername })
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