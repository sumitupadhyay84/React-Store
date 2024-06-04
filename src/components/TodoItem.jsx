import React from "react";

const TodoItem =(props)=>{  // props-> it is parameter in react to make items from static to dynamics..
  //props.text-> text is attribute which perform in app.js
    return (
      <li className="todo-item">
        <span>
         {props.completed ? <></> : <input type="checkbox"></input>} 
          <span className="todo-list-item">{props.text}</span>    
        </span>
        <p>...</p>
      </li>
    );
};
export default TodoItem;