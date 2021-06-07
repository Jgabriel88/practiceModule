import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop = () => {
	return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onConfirm}>OK!</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return <>{}</>;
};
export default ErrorModal;
