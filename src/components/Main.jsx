import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Home from './Home/home.jsx';
import Footer from "./layout/footer.jsx";
import Header from './layout/Header.jsx';
import Register from './auth/Register.jsx';
import Profile from "./user/Profile.jsx";
import UserDashBoard from "./user/userDashBoard.jsx";
import PrivateRoute from "./protectedRoutes/protectedRoute.jsx";
import NotFound from "./NotFound.jsx";
import AdminDashBoard from "./Admin/AdminDashBoard.jsx";
import AdminRoutes from "./protectedRoutes/AdminRoutes.jsx";
import { isAuthenticated } from "../helpers/auth.js";
import CreateCategory from "./Admin/category/CreateCategory.jsx";



const Main = () => {
    let isLoggedIn = null;
    if(isAuthenticated() === true){
        isLoggedIn = true
    }else{
        isLoggedIn = false
    }
    return (
        <div>
            <Header isLoggedIn = {isLoggedIn} />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/sign-up' component={Register} />
                <PrivateRoute path='/user/dashboard' >
                    <UserDashBoard />
                </PrivateRoute>
                <PrivateRoute path='/profile' >
                    <Profile />
                </PrivateRoute>
                <AdminRoutes path='/admin/dashboard' >
                    <AdminDashBoard />
                </AdminRoutes>
                <AdminRoutes path='/create/category' >
                    <CreateCategory />
                </AdminRoutes>
                <Route path='*' component={NotFound} />

            </Switch>
            <Footer />
        </div>
    )
}

export default Main;