
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {Routes, Route, BrowserRouter as Router, Navigate} from "react-router-dom"

const App = ()=>{
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/products/:category' Component={ProductList}/>
        <Route path='/product/:id' Component={Product}/>
        <Route path='/cart' Component={Cart}/>
        <Route path='/login' Component={user?Home:Login}/>
        <Route path='/register' Component={user?Home:Register}/>
        
      </Routes>
    </Router>
  );
}

export default App;
