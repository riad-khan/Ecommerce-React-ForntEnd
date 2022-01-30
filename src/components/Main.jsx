import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Home from './Home/home.jsx';
import Footer from "./layout/footer.jsx";
import Header from './layout/Header.jsx';
import Register from './auth/Register.jsx';

const Main = () => {
    
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/sign-up' component={Register} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;