import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name an age (non-empty values).',
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		props.onAddUSer(enteredUserName, enteredAge);
		setEnteredUserName('');
		setEnteredAge('');
	};

	const userNameChangeHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}></ErrorModal>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUserName}
						onChange={userNameChangeHandler}></input>
					<label htmlFor="age">Age (Years) </label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangeHandler}></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
