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
					<div className={styles.txt_wrapper}>
						<span className={styles.title}></span>
						<span className={styles.first_line}></span>
						<span className={styles.second_line}></span>
						<span className={styles.third_line}></span>
						<span className={styles.fourth_line}></span>
					</div>
				</article>
			</div>
		</section>
	);
}
