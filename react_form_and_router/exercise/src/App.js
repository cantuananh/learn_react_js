import './App.css';
import {Route, Routes} from "react-router-dom";
import FormRegister from "./TH_create_form_register/FormRegister";
import Home from "./Home";
import FormLogin from "./FormLogin/FormLogin"; // Import component for FormRegister page
import FormLoginFormik from "./ValidateFormLogin_Formik/FormLogin";
import UseNavigate from "./UseNavigate/UseNavigate";
import Product from "./UseNavigate/Product";
import Category from "./route3/Category";
import Products from "./route3/Products";
import ContactForm from "./ContactForm/ContactForm";
import BookManagement from "./BookManagement/BookManagement";
import Page from "./exercise_route1/Page";
import Exercise_Route1 from "./exercise_route1/Exercise_Route1";
import EmployeeDetail from "./exercise_route2/EmployeeDetail";
import Login from "./exercise_route2/Login";
import Employee from "./exercise_route2/Employee"; // Import component for FormRegister page

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/FormRegister"} element={<FormRegister/>} />
                <Route path={"/FormLogin"} element={<FormLogin/>} />
                <Route path={"/FormLoginFormik"} element={<FormLoginFormik/>} />
                <Route path={"/useNavigate"} element={<UseNavigate />}></Route>
                <Route path={"/product:/categoryId"} element={<Product />} />
                <Route path="/category" element={<Category />} />
                <Route path="/category/products" element={<Products />} />
                <Route path={"/contact_form"} element={<ContactForm />} />
                <Route path={"/book_management"} element={<BookManagement />} />
                <Route path={"/exercise_route1"} element={<Exercise_Route1 />} />
                <Route path={"/exercise_route1/page"} element={<Page />} />
                <Route path={"/login"} element={<Login />} />
                <Route path={"/employee"} element={<Employee />} />
                <Route path={"/employee/detail/:id"} element={<EmployeeDetail />} />
            </Routes>
        </div>
    );
}

export default App;
