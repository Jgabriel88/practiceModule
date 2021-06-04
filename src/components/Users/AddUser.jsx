import { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [isInvalid, setIsInvalid] = useState(false);

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setIsInvalid(true);
			return;
		}
		if (+enteredAge < 1) {
			setIsInvalid(true);
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

	return (
		<div>
			{isInvalid && (
				<ErrorModal
					title={'error'}
					message={'somthing went wrong'}></ErrorModal>
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
