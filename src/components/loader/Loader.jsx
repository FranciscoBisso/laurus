import styles from "./loader.module.css";
import logo_primary_mobile from "../../assets/imgs/brand/logo/logo_primary_mobile.webp";
import logo_secondary_mobile from "../../assets/imgs/brand/logo/logo_secondary_mobile.webp";

export default function Loader() {
	return (
		<div className={styles.loader_wrapper}>
			<picture className={styles.logo_wrapper}>
				<source
					srcSet={logo_secondary_mobile}
					media="(prefers-color-scheme: dark)"
				/>

				<img
					width="100%"
					height="100%"
					className={styles.logo}
					src={logo_primary_mobile}
					alt="logo"
				/>
			</picture>
		</div>
	);
}
