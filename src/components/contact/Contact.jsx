import styles from "./contact.module.css";
import { PopupButton } from "react-calendly";

export default function Contact() {
	return (
		<section className={styles.contact_section}>
			<article className={styles.contact_card}>
				<div className={styles.contact_card_body}>
					<h1 className={styles.card_header}>
						{"Together, let's pioneer the future of agriculture"}
					</h1>
					<p className={styles.card_text}>
						Join us today and create a future where fresh food is
						accessible to all, regardless of where they live or how
						much they make.
					</p>
				</div>
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
