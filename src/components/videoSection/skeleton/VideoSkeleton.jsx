import styles from "./videoSkeleton.module.css";

export default function VideoSkeleton() {
	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<span className={styles.first_line}></span>
				<span className={styles.second_line}></span>
				<span className={styles.third_line}></span>
				<span className={styles.fourth_line}></span>
			</div>
			<div className={styles.video_skeleton}></div>
		</section>
	);
}
