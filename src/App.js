import NavBar from "./NavBar";
import Header from "./Header";
import Posts from "./Posts";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } 
  from "react-router-dom";
import BurgerPost from "./BurgerPost";
import MansafPost from "./MansafPost";
import MacaroniPost from "./MacaroniPost";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Header/>

 
  {/* <Router> */}
           
              <Routes>
              <Route path="/Posts" element={<Posts/>}/>
              
             <Route path="/BurgerPost" element={<BurgerPost/>}/>
             <Route path="/MansafPost" element={<MansafPost/> }/>
             <Route path="//MacaroniPost" element={<MacaroniPost/>}/>
             <Route path="/Register" element={<Register/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Logout" element={<Logout/>}/>
           
              
           {/* <Route path="/Contact" element={<Contact/>}/> */}
         
              </Routes>
             <Footer/>
            
    </div>
  );
}

export default App;