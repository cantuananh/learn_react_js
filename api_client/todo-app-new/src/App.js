import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import TodoList from "./components/todos/TodoList";
import Book from "./components/books/Book";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />}>Homepage</Route>
          <Route path={"/list-todo"} element={<TodoList />}>List to do</Route>
          <Route path={"/list-book"} element={<Book />}>List book</Route>
        </Routes>
    </div>
  );
}

export default App;
