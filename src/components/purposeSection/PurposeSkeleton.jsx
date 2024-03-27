import styles from "./purposeSkeleton.module.css";
export default function PurposeSkeleton() {
	return (
		<section
			className={styles.purpose_section_skeleton}
			tabIndex={0}>
			<div className={styles.filter}></div>
			<div className={styles.wrapper}>
				<div className={styles.frame}></div>

				<article className={styles.card}>
					<div className={styles.card_txt_wrapper}></div>
				</article>
			</div>
		</section>
	);
}
