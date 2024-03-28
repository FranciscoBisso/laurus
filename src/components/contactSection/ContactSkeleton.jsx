import styles from "./contactSkeleton.module.css";

export default function ContactSkeleton() {
	return (
		<section
			className={styles.contact_section}
			tabIndex={0}>
			<div className={styles.card_wrapper}>
				<article className={styles.contact_card}>
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
