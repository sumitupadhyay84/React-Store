import React,{useEffect,useState} from "react";

const MyComponent =()=>{
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log("my component is mounting.."); // when mounting happen then return this part..

        return function (){
            console.log("unmounting...."); // when unmounting then return always return as see in console.log... 
        };
    },[])
    useEffect(()=>{
        console.log("count got updated",count);

        return function (){
            console.log("Returning function",count); // due to having count in dependency list then it re-rendering means at the time of updating //1. unmounting then //2.mount 
        } //  output as update:- returning function 0 , count got updated 1 ......
    },[count]) // here get counting in console when click the button ..
    return(
        <div>
         <h3> MyComponent</h3>
         <p>value of {count}</p>
         <button onClick={()=>setCount(count + 1)}>update</button>
        </div>
    );
};

export default MyComponent;