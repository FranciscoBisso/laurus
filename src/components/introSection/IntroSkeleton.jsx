import styles from "./introSkeleton.module.css";
export default function IntroSkeleton() {
	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.logo_skeleton_wrapper}>
				<div
					width="100%"
					className={styles.logo_skeleton}></div>
			</div>
			<div className={styles.video_skeleton}></div>
		</section>
	);
}
