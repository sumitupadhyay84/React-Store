//import React from "react";
// import Header from './components/Header';
// import TodoItem from "./components/TodoItem";
// import Buttons from "./components/Buttons";
// import './style.css';

// for todoie list items..

// const App = ()=>{
//   return (
//     <div className="todo-container">
//       <Header title="Todoie App"/>
//       <TodoItem text="Eat"/>
//       <TodoItem completed={true} text="Cold"/>
//       <TodoItem text="Play"/>
//       <TodoItem text="Study"/>
//       <TodoItem text="Sleep Again"/>
//       <Buttons/>
//     </div>
//   );
// };

// For MyComponents // for useEffect :- mounting,updating,unmounting 
// import React, { useEffect,useState } from "react";
// import MyComponent from "./components/MyComponent";
// const App = () =>{
//   const [isVisible,setVisible]=useState(true);
//   useEffect(()=>{                        // this is useEffect which contain two argument //1.Callback function  //2.dependency list..
//   console.log("I am mounting...."); 
//   },[]);
//   return (
//      <div>
//       {isVisible ? <MyComponent/> : <></>}
//       <button onClick={()=>setVisible(!isVisible)}>Toggle</button>
//      </div>
//   );
// };
import React from "react";
import Timer from "./components/Timer";
const App = ()=>{
  return (
    <div>
     <Timer/>
    </div>
  );
};
export default App;