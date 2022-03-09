import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link 
 } from "react-router-dom";
import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs";
import Scrolltotop from "./scrolltotop";
const App = () => {
  const user =useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Scrolltotop>
      <Switch>
       <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
         </Route>
         <Route path="/product/:id">
         <Product/>
        </Route>
        <Route path="/AboutUs">
         <AboutUs/>
        </Route>
         <Route path="/cart">
         <Cart/>
         </Route>
          <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>}
          <Login/>
          </Route>
          <Route path="/register">
          {user ? <Redirect to="/"/> : <Register/>}
          <Register/>
          </Route>
      </Switch>
      </Scrolltotop>
    </Router>
  );
};

export default App;