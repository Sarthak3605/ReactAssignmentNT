import React, {useState} from 'react'

const InputField = () => {
const [input,setInput] = useState('');

  return (
	<div className='inputfield'>
		<h2>Live Text</h2>
		<input type='text' placeholder='Start writing...' value={input} onChange={(e)=> setInput(e.target.value)}/>
		<p>Live text: {input}</p>
	</div>
  )
}

export default InputField
