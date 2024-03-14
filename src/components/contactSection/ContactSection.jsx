import styles from "./contactSection.module.css";
import { PopupButton } from "react-calendly";

export default function ContactSection() {
	return (
		<section className={styles.contact_section}>
			<article className={styles.contact_card}>
				<h1 className={styles.card_header}>
					{"Let's pioneer the future of agriculture, together"}
				</h1>
				<p className={styles.card_text}>
					Join us today and create a future where fresh food is
					accessible to all, regardless of where they live or how much
					they make.
				</p>

				<PopupButton
					className={styles.calendly_btn}
					url="https://calendly.com/nicobisso/intro-call"
					rootElement={document.getElementById("root")}
					text="Schedule a call!"
				/>
			</article>
		</section>
	);
}
