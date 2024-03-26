import styles from "./conclusionSkeleton.module.css";

export default function ConclusionSkeleton() {
	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.container}>
				<div className={styles.articles_wrapper}>
					<article className={styles.article}>
						<div className={styles.frame}>
							<div className={styles.img_skeleton}></div>
						</div>
						<h2 className={styles.title}>
							A new paradigm in the production and distribution of
							food
						</h2>
					</article>
				</div>
				<div className={styles.stepper}>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
				</div>
			</div>
			<div className={styles.bg_img_wrapper}></div>
		</section>
	);
}
