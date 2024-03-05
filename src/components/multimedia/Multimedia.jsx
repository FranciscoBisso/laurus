import styles from "./multimedia.module.css";
import reel_720 from "../../assets/videos/reels/tower_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/tower_reel_1080.webm";
import poster from "../../assets/videos/reels/tower_reel_frist_frame.webp";
export default function Multimedia() {
	return (
		<section className={styles.video_section}>
			<p className={styles.txt}>
				480,000 plants per year, in less space than a tennis court
			</p>
			<video
				loading="lazy"
				className={styles.video}
				poster={poster}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={reel_720}
					media="(max-width: 1024px)"
					type="video/webm"
				/>
				<source
					src={reel_1080}
					type="video/webm"
				/>
			</video>
		</section>
	);
}
