import  { useState } from 'react';
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    setTodo(event.target.value);
  }

  const newTask = () => {
    setList([...list, todo]);
    setTodo("");
  }

  const handleDelete = (index) => {
    setList(list.filter((item, i) => index !== i));
  }

  return (
    <div className="container">
      <h1 className="heading">ToDo App</h1>
      <input type="text" onChange={handleSubmit} value={todo} className="input-field"/>
      <button onClick={newTask} className="add-button">Add</button>
      <div>
        {list.map((name, index) => {
          return (
            <div key={index} className="todo-item">
              <>
              <p key={index}>{name}</p>
              <button onClick={() => handleDelete(index)} className="delete-button">X</button>
              </>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App;
