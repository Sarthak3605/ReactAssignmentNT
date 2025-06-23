import React from 'react'
import '../App.css';
const userDetails = ({age,email,occupation}) => {
  return (
	<div className='userDetails'>
	  <ul>
		<li>{age}</li>
		<li>{email}</li>
		<li>{occupation}</li>
	  </ul>
	</div>
  )
}

export default userDetails
