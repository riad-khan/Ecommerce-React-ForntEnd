import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Home from './Home/home';
import Footer from "./layout/footer";
import Header from './layout/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={Login} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;