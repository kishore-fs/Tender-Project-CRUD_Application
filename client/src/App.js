import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Signup } from './signup/signup';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { Chicken } from './product/chicken';
import { Updatepage } from './updatepage/updatepage';
import { Seafood } from './product/seafood';
import { Persondetails } from './persondetails/persondetails';
import { Mutton } from './product/mutton';
import { Dryfood } from './product/dryfood';
import { Egg } from './product/egg';
import { Pickle } from './product/pickle';
import { Orderdetails } from './orderdetails/orderdetails';
import { Productdetails } from './productdetails/productdetails';


function App() {
  return (
    <>
         <BrowserRouter>
    <Routes>
      <Route path='/' element={[<Login/>]}/>
      <Route path='/home/:id' element={[<Menu/>,<Home/>]}/>
      <Route path='/signup' element={[<Signup/>]}/>
      <Route path='/login' element={[<Login/>]}/>
      <Route path='/admin/:id' element={[<Menu/>,<Admin/>]}/>
      <Route path='/chicken/:id' element={[<Menu/>,<Chicken/>]}/>
      <Route path='/updatepage/:id' element={[<Updatepage/>]}/>
      <Route path='/seafood/:id' element={[<Menu/>,<Seafood/>]}/>
      <Route path='/persondetails' element={[<Menu/>,<Persondetails/>]}/>
      <Route path='/mutton/:id' element={[<Menu/>,<Mutton/>]}/>
      <Route path='/dryfood/:id' element={[<Menu/>,<Dryfood/>]}/>
      <Route path='/egg/:id' element={[<Menu/>,<Egg/>]}/>
      <Route path='/pickle/:id' element={[<Menu/>,<Pickle/>]}/>
      <Route path='/orderdetails' element={[<Menu/>,<Orderdetails/>]}/>
      <Route path='/productdetails' element={[<Menu/>,<Productdetails/>]}/>
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
