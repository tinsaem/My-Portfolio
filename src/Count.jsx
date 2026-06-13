import './counter.css';
import {useState} from "react";
export default function count() {
      const [count, hami] = useState(0);
  return (
  
    <button className="counter-btn" onClick={() => hami(count + 1)}>
        Count: {count}
    </button>
    
  )
}
