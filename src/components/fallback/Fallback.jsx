import styles from "./fallback.module.css";
import logo from "../../assets/imgs/brand/bgless_full_arch.webp";
export default function Fallback() {
	return (
		<>
			<div className={styles.loading_wrapper}>
				{/* <div className={styles.loading}>Loading...</div> */}
				<img
					src={logo}
					className={styles.loading}
				/>
			</div>
		</>
	);
}
