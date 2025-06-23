import './App.css';
import UserCard from './Components/UserCard'
function App() {
	const user = {
		name : "Akash Doe",
		age : 22,
		email : "Akash@gmail.com",
		occupation : "Software Engineer"
	}
  return (
	<UserCard user={user} />
  );
}

export default App;
