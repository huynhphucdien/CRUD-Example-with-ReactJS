import { useState } from "react";

function TodoForm() {
  const [changes, setChanges] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState("");
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState();

  const handleSubmit = () => {
    if (changes !== "") {
      setTodos((prev) => [...prev, changes]);
      setChanges("");
    }
  };

  const handleDel = (index) => {
    setTodos(todos.filter((_, index1) => index1 !== index)); //index1=[0, 1, 2, 3,...]  index= vị trí click
  };

  const handleEdit = (todo, index) => {
    setShow(true);
    setEditTodo(todo);
    setIndex(index);
  };
  const handleUpdateTodo = () => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, editTodo);
    setTodos(newTodos);
    // console.log(todos);

    setShow(false);
  };

  return (
    <div>
      <div className="add-todos">
        <input
          className="todo-input"
          value={changes}
          onChange={(e) => setChanges(e.target.value)}
        />
        <button className="todo-button" onClick={handleSubmit}>
          Add To Do
        </button>
      </div>
      {show && (
        <div className="update-todos">
          <input
            className="todo-input"
            value={editTodo}
            onChange={(e) => setEditTodo(e.target.value)}
          />
          <button className="todo-button" onClick={handleUpdateTodo}>
            update
          </button>
        </div>
      )}
      <ul>
        {!show &&
          todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div className="edit-del">
                <button className="del-btn" onClick={() => handleDel(index)}>
                  Del
                </button>
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(todo, index)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TodoForm;
