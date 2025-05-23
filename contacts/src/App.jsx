import React from 'react';
import { IoMdSearch } from "react-icons/io";
import { MdAddCircle } from "react-icons/md";
import "./App.css";

export default function App() {
  return (
    <div className='container'>
        <div className="navbar">
          <div className="logo">
            <img src="https://logowik.com/content/uploads/images/firebase.jpg" height="30px" alt="" />
          </div>
          <h1>Firebase Contact App</h1>
        </div>
        <div className="input-container">

        <div className="input">
          <IoMdSearch/>
          <input type="search" placeholder='Search here...' />
        </div>
          <MdAddCircle  className='add'/>
        </div>
    </div>
  )
}
