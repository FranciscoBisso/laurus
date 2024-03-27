import styles from "./videoSkeleton.module.css";

export default function VideoSkeleton() {
	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<div className={styles.txt}></div>
			</div>
			<div
				width="100%"
				height="100%"
				className={styles.video_skeleton}></div>
		</section>
	);
}
