const AddUser = (props) => {
	return (
		<form>
			<label htmlFor="username">Username</label>
			<input id="username" type="text"></input>
			<label htmlFor="age">Age (Years) </label>
			<input id="age" type="number"></input>
			<button>Add User</button>
		</form>
	);
};

export default AddUser;
