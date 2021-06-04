import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { name: userName, age: userAge }];
		});
	};

	return (
		<div>
			<AddUser onAddUSer={addUserHandler} />
			<UsersList users={usersList} />
		</div>
	);
}

export default App;
