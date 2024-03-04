import styles from "./footer.module.css";
import SocialMedia from "../socialMedia/SocialMedia";

export default function Footer() {
	return (
		<section className={styles.footer}>
			<div className={styles.footer_wrapper}>
				<SocialMedia props={{ styles }} />
				<span className={styles.txt}>
					San Martín, 750, Buenos Aires, CABA 1004
				</span>
				<span className={styles.txt}>
					Copyright © 2024 LA Tech S.A.
				</span>
			</div>
		</section>
	);
}
