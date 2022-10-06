import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Login from './components/login';
import Header from './components/header';
import Product from './components/product';
import Fashionlist from './components/fashion/fashionlist';
import Slider from './components/imgSlider';
import Kitchenlist from './components/kitchen/kitchenlist';
import PhoneList from './components/phone/phonelist';
import DressList from './components/dress/dresslist';
import Cartlist from './components/cart/cartlist';
import AppContext from './context';
import Login from './components/login';
// import Menu from './components/menu';



function App() {

  const [cart, setCart] = useState([]);

  const addCart = (cart) => {
    setCart((prev) => {
      return [cart, ...prev]
    })
  }

  const admin = {
    email: "vigneshwaran274mail@gmail.com",
    password: "password"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (userdata) => {
    if (userdata.email == admin.email && userdata.password == admin.password) {
      setUser({
        name: userdata.name,
        email: userdata.email
      });
    }
    else {
      setError("Please fill the data")
    }

  }
 


  return (
    <div className="App">

      {/* <Login></Login>  */}
      <AppContext.Provider value={{ cart, addCart }}> 
     
      
      <Header></Header>
      <Slider />
              
        <Routes>
          <Route path='/product' index element={(user.email !="")?(<div><Product></Product></div>):(<Login login={login} error={error}></Login>)}></Route>
          <Route path="/fashion" element={<Fashionlist></Fashionlist>}></Route>
          <Route path='/kitchen' element={<Kitchenlist></Kitchenlist>}></Route>
          <Route path='/smartphone' element={<PhoneList></PhoneList>}></Route>
          <Route path='/mens' element={<DressList></DressList>}></Route>
          <Route path='/cart' element={<Cartlist></Cartlist>}></Route>
         </Routes>
      </AppContext.Provider>
      

    </div>
  );
}

export default App;
