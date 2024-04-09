import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home";
import GetDataAxios from "./components/GetDataAxios";
import Articles from "./components/Articles";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}>Home</Route>
            <Route path={"/users"} element={<GetDataAxios/>}>List users</Route>
            <Route path={"/articles"} element={<Articles />}>List article</Route>
        </Routes>

    );
}

export default App;
