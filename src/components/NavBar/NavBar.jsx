import React from "react";
import './style.css';

const navTree = [
 {
   key: 'films',
   title: 'Films'
 }

 {
   key:'speices',
   title: 'Spacies'
 }

 {
  key: 'peple', 
  title: 'People'
 }
];

const NavBar = () => {
  return (
    <div className="nsv">
     {navTree.map(navItem => <button onClick={() => console.log(navItem)}}

    </div>
  )
}


const NavBar = () => {
 return (
  <div className="nav">

   <button>Films</button>
   <button>Spaces</button>
   <button>People</button>

  </div>
 )
}

export default NavBar;