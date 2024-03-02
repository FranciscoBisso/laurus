import NavBar from "../navBar/NavBar";
import styles from "./contactSection.module.css";

export default function ContactSection() {
	return (
		<section
			id="contact"
			className={styles.contact_section}>
			<NavBar props={{ styles }} />
		</section>
	);
}
