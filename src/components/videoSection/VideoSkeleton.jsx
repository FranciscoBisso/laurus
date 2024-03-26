import styles from "./videoSkeleton.module.css";

export default function VideoSkeleton() {
	return (
		<section
			className={styles.section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<p className={styles.txt}>
					480,000 plants per year, in less space than a tennis court
				</p>
			</div>
			<div
				width="100%"
				height="100%"
				className={styles.video_skeleton}></div>
		</section>
	);
}
