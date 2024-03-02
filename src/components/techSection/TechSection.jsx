import NavBar from "../navBar/NavBar";
import styles from "./techSection.module.css";

export default function TechSection() {
	return (
		<section
			id="tech"
			className={styles.tech_section}>
			<NavBar props={{ styles }} />
		</section>
	);
}
