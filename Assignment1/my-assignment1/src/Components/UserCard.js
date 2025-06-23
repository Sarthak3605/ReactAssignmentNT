import React from "react";
import '../App.css';
import UserDetails from "./UserDetails"

export default function userCard({user}){
	const {age, email, occupation} = user;
	return(
	<div className="userCard">
		<h2>{user.name}</h2>
		<UserDetails age={age} email={email} occupation={occupation}></UserDetails>
	</div>
	)
}