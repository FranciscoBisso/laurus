import NavBar from "../navBar/NavBar";
import styles from "./purposeSection.module.css";

export default function PurposeSection() {
	return (
		<section
			id="purpose"
			className={styles.purpose_section}>
			<NavBar props={{ styles }} />
		</section>
	);
}
