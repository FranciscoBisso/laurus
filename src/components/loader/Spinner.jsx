import styles from "./spinner.module.css";

export default function Spiner() {
	return (
		<div className={styles.loader_wrapper}>
			<span className={styles.loader}></span>
		</div>
	);
}
