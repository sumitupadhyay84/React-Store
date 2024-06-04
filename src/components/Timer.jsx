import {useEffect,useState} from "react";

const Timer = ()=>{
    const [time,setTime] = useState(0);
    useEffect(()=>{
        console.log("Adding new interval");
      const timer = setInterval(()=>setTime(time + 1),1000); // in 1000 millisecond per second time interval change..  
      // without clear interval stack/queue of time increase and clash due to //1.unmounting and //2.mounting level of time..
      return function(){
        console.log("clear old interval");
       clearInterval(timer); // it help to clear the unmounting state.. so smooth time going..
      }
    },[time]);
    return(
        <div>
          <h1>StopWatch</h1>
          <p>Current time is {time}</p>
        </div>
    );
};
export default Timer;