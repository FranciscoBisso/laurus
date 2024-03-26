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
					<div className={styles.card_txt_wrapper}>
						<h2 className={styles.card_title}>What we do</h2>
						<p className={styles.card_txt}>
							We reinvent urban agriculture by providing a
							sustainable and efficient way to deliver
							hyper-local, nutritious and affordable food to
							people in cities.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}
