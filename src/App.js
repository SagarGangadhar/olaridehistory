import React from 'react'
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/HeaderComponent';
import MyRides from './Components/MyRides'
import { data } from './Constants/data'

function App(){
  return(
    <div className="container">
    <HeaderComponent></HeaderComponent>
    {
      data.map((items,index)=>{
        return(<MyRides items={items} key={index}></MyRides>);
      })  
    }
    </div>
  );
}



export default App;
