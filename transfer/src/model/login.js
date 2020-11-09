import React from 'react';
import axois from 'axios';
import { NavLink } from 'react-router-dom';



function login() {
    return (

<>
<div className="container">
      <form onSubmit={(e)=>logina(e)}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <NavLink to="/home">
  <button type="submit" class="btn btn-primary">Submit</button></NavLink>
</form>
    </div>
    </>
  );

}


function logina(e){
  e.preventDefault();
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
  let request = {
    email: document.getElementById('exampleInputEmail1').Value,
    password:document.getElementById('exampleInputPassword1').Value
  }
  axois.post('http://localhost:5000/login', request, axiosConfig)
  .then(resp =>{
    alert(resp.data.message);
  })
  .catch(err=>{
    console.log(err);
  })
  
 
}

export default login;