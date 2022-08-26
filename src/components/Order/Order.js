import React from 'react';



import './Order.css';
import { useState } from 'react';
import { useNavigate} from "react-router";

function Order(props) {
   const navigate = useNavigate();


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [adress, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('1');
    const [payment, setPayment] = useState('');
  const [twitter, setTwitter] = useState('');






 const onOrderSubmitCOD = () =>  {
  fetch(' https://murmuring-garden-96699.herokuapp.com/orderCOD', {
      method: 'post',
      mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        firstname: firstName,
        lastname:lastName,
        email: email,
        mobilenumber: mobileNumber,
        adress: adress,
        city: city,
        size:size,
        quantity: quantity,
        payment: payment,
        twitter: twitter

      })
    })
      .then(response => response.json())
      .then(user => {
        console.log(user)
        if (user.id) {
         
          props.loadUser(user);
          
          navigate('/order/orderCompleted'); 
        }
      })
      .catch(err => console.log(err));
  }



return(
  <div className="container  center">
    <div className="container2  center">
      <div className="title">Order</div>
      <div className="content mt4">
        <form action="#">
          <div className="user-details">
              <div className="input-box">
                <span className="details">Firstame</span>
                <input type="text" placeholder="Enter your firstname"  value={firstName}
                   onChange={event => setFirstName(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Lastname</span>
                <input type="text" placeholder="Enter your lastname" value={lastName}
                    onChange={event => setLastName(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="number" placeholder="Enter your number" value={mobileNumber}
                    onChange={event => setMobileNumber(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Adress</span>
                <input type="text" placeholder="Enter your adress" value={adress}
                    onChange={event => setAddress(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input type="text" placeholder="Enter your city" value={city}
                    onChange={event => setCity(event.target.value)} required/>
              </div>
            
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1"/>
              <input type="radio" name="gender" id="dot-2"/>
              <input type="radio" name="gender" id="dot-3"/>
              <input type="radio" name="gender" id="dot-4"/>
              <span className="gender-title">Size</span>
              <div className="category" value={size}
                    onChange={event => setSize(event.target.value)} >
                <label for="dot-1">
                <span className="gender">S</span>
                <span className="dot one ml2"></span>
                
              </label>
              <label for="dot-2">
               <span className="gender">M</span>
                <span className="dot two ml2"></span>
                
              </label>
              <label for="dot-3">
                <span className="gender">L</span>
                <span className="dot three ml2"></span>
                
                </label>
                <label for="dot-4">
                <span className="gender">XL</span>
                <span className="dot four ml2"></span>
                
                </label>
              </div>
            </div>
            <div  className="input-box">
              <span className="details">Quantity</span>
              <select 
              
              value={quantity}
              onChange={event => setQuantity(event.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                
              </select>
            </div>
            <div  className="input-box "  >
              <span className="details">Payment method</span>
              <select 
              
              value={payment}
              onChange={event => setPayment(event.target.value)}>
                <option>cash on delivery</option>
                <option>payment by card</option>
                <option>Paypal</option>
                
                
              </select>
            </div>
            <div className="input-box"  style={{ marginBottom: '0'}}>
                <span className="details">IG/twitter</span>
                <input type="text" 
              placeholder="Enter IG or Twitter"
              value={twitter}
              onChange={event => setTwitter(event.target.value)} required/>
              </div>

            
            
            
            </div>
            <button className='mt3' type="button" onClick={onOrderSubmitCOD}>
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> ORDER 
              </span>
            </button>
        

      </form>
    </div>
    </div>
  </div>
)}
export default Order;

