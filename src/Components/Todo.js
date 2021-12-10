import { useState } from "react";

// import Todo from "./Todo";

// function Input({ initialValue, onSubmit }) {
//   const [value, setValue] = useState('');
//   // useEffect(() => {
//   //   setValue(initialValue);
//   // }, []);
//   const handleSubmit = () => {
//     onSubmit(value);
//     setValue('')
//   }
//   return (
//     <div>
//       <input
//         className="todo-input"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button className="todo-button" onClick={handleSubmit}>
//         Add To Do
//       </button>
//     </div>
//   );
// }

// function TodoForm() {
//   const [todos, setTodos] = useState([]);
//   const [editTodo, setEditTodo] = useState("");
//   const [show, setShow] = useState(false);
//   const [index, setIndex] = useState();

//   const handleSubmit = (value) => {
//     if (value !== "") {
//       setTodos((prev) => [...prev, value]);
//     }
//   };

//   const handleDel = (index) => {
//     setTodos(todos.filter((_, index1) => index1 !== index)); //index1=[0, 1, 2, 3,...]  index= vị trí click
//   };

//   const handleEdit = (todo, index) => {
//     setShow(true);
//     setEditTodo(todo);
//     setIndex(index);
//   };
//   const handleUpdateTodo = () => {
//     // const newTodos = [...todos];
//     // newTodos.splice(index, 1, editTodo);
//     // setTodos(newTodos);
//     // console.log(todos);

//     setShow(false);
//   };

//   return (
//     <div>
//       <Input onSubmit={handleSubmit}/>

//       {show && (
//         <>
//           <input
//             className="todo-input"
//             value={editTodo}
//             onChange={(e) => setEditTodo(e.target.value)}
//           />
//           <button onClick={handleUpdateTodo}>update</button>
//         </>
//       )}
//       <ul>
//         {!show &&
//           todos.map((todo, index) => (
//             <li key={index}>
//               {todo}
//               <button className="del-button" onClick={() => handleDel(index)}>
//                 Del
//               </button>
//               <button onClick={() => handleEdit(todo, index)}>Edit</button>
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

export default Todo;
