const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
	};

	return (
		<card>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text"></input>
				<label htmlFor="age">Age (Years) </label>
				<input id="age" type="number"></input>
				<button type="submit">Add User</button>
			</form>
		</card>
	);
};

export default AddUser;
