import styles from "./introSkeleton.module.css";
export default function IntroSection() {
	return (
		<section className={styles.section}>
			<div className={styles.logo_skeleton_wrapper}>
				<div
					width="100%"
					className={styles.logo_skeleton}></div>
			</div>
			<div className={styles.video_skeleton}></div>
		</section>
	);
}
