import React, {useState} from 'react'
import "../App.css";

const Counter = () => {
	const [count,setCount] = useState(0);

  return (
	<div className='counterBox'>
		<h2>Count : {count}</h2>
		<button onClick={()=> setCount(count+1)}>Increment</button>
		<button onClick={() => setCount(count-1)}>Decrement</button>
	</div>
  )
}

export default Counter
