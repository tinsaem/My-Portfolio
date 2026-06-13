import { useState,useEffect} from "react";
import './Counter.css';
export default function Button() {
    const [count, setCount] = useState(0);
   
    useEffect(() => {
      if (count>0){
         document.getElementById('counter-status').innerHTML='Positive';
      }else if (count<0)
      {
         document.getElementById('counter-status').innerHTML='Negative';
      }else{
         document.getElementById('counter-status').innerHTML='Zero';
      }
    
  }, [count]);

  return (
     <div className="counter-container">
      <h2>Counter: {count} <span id="counter-status"> </span></h2>
      <div className="button-group">
        <button className="counter-btn increment" onClick={()=>setCount(count+1)}>
          Increment
        </button>
        <button className="counter-btn reset" onClick={()=>setCount(0)}>
          Reset
        </button>
        <button className="counter-btn decrement" onClick={()=>setCount(count-1)}>
          Decrement
        </button>
      </div>
    </div>
  )
}
