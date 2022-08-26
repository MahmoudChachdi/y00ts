import React, {Component} from 'react';
import {BrowserRouter as Router,
        Routes,
        Route
      } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Order from './components/Order/Order';

import NoPage from './components/nopage/noPage';
import Collab from './components/collaboration/collaboration';
import Art from './components/art/art';

import OrderCompleted from './components/OrderCompleted/OrderCompleted';



const initialState= {
   
    user: {
      id: '',
      firstname: '',
      lastname: '',
      email:'',
      mobilenumber:'',
      adress:'',
      city: '',
      size:'',
      quantity: '',
      joined:''
    }


  }






class App extends Component {
 constructor(){
  super();
  this.state= initialState;
}
   

    loadUser = (data) => {
  this.setState( {user:
      {       id: data.id,
      firstname: data.firstname,
      lastname:data.lastname ,
      email:data.email,
      mobilenumber:data.mobilenumber,
      adress:data.adress,
      city: data.city,
      size:data.size,
      quantity: data.quantity,
      joined:data.joined
        }})
}


render() {
    return (
     <>
  <Router>
      <Routes>
        <Route path="/" element={<Navbar /> }>
        <Route index element={<Home />} />
        <Route path="order"> 
          <Route index element={<Order  loadUser={this.loadUser}/>} />
          <Route path="orderCompleted" element={<OrderCompleted />} />
        </Route>
      
          <Route path="collab" element={<Collab />} />
          <Route path="art" element={<Art />} />
         
          <Route path="*" element={<NoPage />} />
         </Route>
      </Routes>
    </Router>
<Footer/>
</>
    );
  }
 

} 

export default App;
