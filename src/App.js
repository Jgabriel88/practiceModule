import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (userName, userAge) => {
		const currentYear = new Date().getFullYear();
		console.log(currentYear);
		setUsersList((prevUsersList) => {
			return [
				...prevUsersList,
				{
					name: userName,
					age: userAge,
					bornIn: currentYear - userAge,
					id: Math.random().toString(),
				},
			];
		});
	};

	return (
		<div>
			<AddUser onAddUSer={addUserHandler} />
			{usersList.length && <UsersList users={usersList} />}
		</div>
	);
}

export default App;
