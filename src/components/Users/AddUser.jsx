import { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	const nameInputRef = useRef();
	const ageInputRef = useRef();
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const submittedName = nameInputRef.current.value;
		const submitteddAge = ageInputRef.current.value;
		if (
			submittedName.trim().length === 0 ||
			submitteddAge.trim().length === 0
		) {
			setError({
				title: 'Invalid Input',
				message: 'Please enter a valid name an age (non-empty values).',
			});
			return;
		}
		if (+submitteddAge < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age (> 0).',
			});
			return;
		}
		props.onAddUSer(submittedName, submitteddAge);
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	};

	const errorHandler = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}></ErrorModal>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef}></input>
					<label htmlFor="age">Age (Years) </label>
					<input id="age" type="number" ref={ageInputRef}></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	);
};

export default AddUser;
