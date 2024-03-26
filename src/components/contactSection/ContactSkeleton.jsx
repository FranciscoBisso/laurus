import styles from "./contactSkeleton.module.css";

export default function ContactSkeleton() {
	return (
		<section
			className={styles.contact_section}
			tabIndex={0}>
			<div className={styles.card_wrapper}>
				<article className={styles.contact_card}>
					<h1 className={styles.card_header}>
						{"Let's pioneer the future of agriculture, together"}
					</h1>
					<p className={styles.card_text}>
						Join us today and create a future where fresh food is
						accessible to all, regardless of where they live or how
						much they make.
					</p>

					<div className={styles.btn_skeleton}>
						<p className={styles.btn_skeleton_txt}>
							Schedule a call!
						</p>
					</div>
				</article>
			</div>
			<div className={styles.img_skeleton}></div>
		</section>
	);
}
