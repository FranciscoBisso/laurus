import PropTypes from "prop-types";
import styles from "./oneArchLogo.module.css";

export default function OneArchLogo({ props }) {
	return (
		<div className={styles.logo}>
			<div className={styles.wrapper}>
				<div className={styles.pantone368}></div>
				<div className={styles.white3}></div>
				<div className={styles.paytone362}></div>
				<div className={styles.white2}></div>
				<div className={styles.paytone356}></div>
				<div className={styles.white1}></div>
			</div>
		</div>
	);
}

OneArchLogo.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
};
