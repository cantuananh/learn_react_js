import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import TodoList from "./component/TodoList";
import Home from "./Home";
import AddTodoForm from "./component/AddTodoForm";
import EditTodoForm from "./component/EditTodoForm";
import SearchTodoForm from "./component/SearchTodoForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home />}>Homepage</Route>
                <Route path={"/list"} element={<TodoList />}>List to do</Route>
                <Route path={"/add"} element={<AddTodoForm />}>Add</Route>
                <Route path={"/edit"} element={<EditTodoForm />}>Edit</Route>
                <Route path={"/search"} element={<SearchTodoForm />}>Search</Route>
            </Routes>

        </div>
    );
}

export default App;
