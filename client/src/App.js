import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes, Route,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Homepage from './screens/Homepage';
import Cart from './screens/Cart';
import Login from './components/Login'
import Signup from './components/Signup'
import Admin from './screens/Admin';
import Signupown from './components/Signupown';
import Loginown from './components/Loginown'
import Adminform from './screens/Adminform';
import Navbaradmin from './components/Navbaradmin'
import OrdersPage from './screens/OrdersPage'

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App" id = "mainpage">
      <BrowserRouter>
      <Routes>
      {user && <Route path="/" exact element={<Homepage/>} />}
      <Route path="/signup" exact element={<Signup />} />
      <Route path="/signupown" exact element={<Signupown />} />
			<Route path="/login" exact element={<Login />} />
      <Route path = "loginown" exact element={<Loginown/>}></Route>
			<Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/cart" exact element = {<div><Navbar/><Cart/></div>}></Route>
      <Route path="/getallitems" exact element = {<div><Navbar/><Homescreen/></div>}></Route>
      <Route path="/admin" exact element={<div><Navbaradmin/><Admin/></div>}></Route>
      <Route path="/orderspage" exact element={<div><Navbaradmin/><OrdersPage/></div>}></Route>
      <Route path="/adminform" exact element={<div><Navbaradmin/><Adminform/></div>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
