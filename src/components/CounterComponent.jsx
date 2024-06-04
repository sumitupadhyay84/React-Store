import React,{useState} from "react"; // usestste is hook which used to access the state of function component.
// it also provide state when previous change in state then update in new state of component function.

const CounterComponent = ()=>{
    const [count,setCount] = useState(0); //usestate return array of 2 size //1.count -> initial value of usestate(0) //2.setcount ->it use to call the value .. // setcount is a function which perform operation on count.. 
    //const [value,setValue] = useState("sumit");
    return (
     <div>
        <p>CounterComponent - {count}</p>
        <h6> value is {count % 2===0 ? Even : odd }</h6>
        <h6>value of{value}</h6>
        <button onClick={()=>setValue("React")}>Change</button>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
     </div>
    );
};

// cycle of components :- constructed,mounted:- render on screen,update,unmounted:- remove to the screen.
// useEffect Hooks :- during run code some change in life cycle of components..
