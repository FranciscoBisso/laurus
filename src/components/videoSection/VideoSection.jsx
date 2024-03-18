import styles from "./videoSection.module.css";
import reel_poster from "../../assets/videos/reels/tower_reel_frist_frame.webp";
import reel_720 from "../../assets/videos/reels/tower_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/tower_reel_1080.webm";
import demo_poster from "../../assets/videos/demos/short_demo_first_frame.webp";
import demo_720 from "../../assets/videos/demos/short_demo_720.webm";
import demo_1080 from "../../assets/videos/demos/short_demo_1080.webm";

import { useInView } from "react-intersection-observer";

export default function VideoSection() {
	const txt = useInView();
	return (
		<section
			className={styles.video_section}
			tabIndex={0}>
			<div className={styles.txt_wrapper}>
				<p
					ref={txt.ref}
					className={styles.txt}>
					480,000 plants per year, in less space than a tennis court
				</p>
			</div>
			<video
				loading="lazy"
				width="100%"
				height="100%"
				className={`${styles.reel} ${
					txt.inView ? styles.show : styles.hide
				}`}
				poster={reel_poster}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={reel_720}
					media="(max-width: 1023px)"
					type="video/webm"
				/>
				<source
					src={reel_1080}
					type="video/webm"
				/>
			</video>
			<video
				loading="lazy"
				width="100%"
				height="100%"
				className={`${styles.demo} ${
					txt.inView ? styles.show : styles.hide
				}`}
				poster={demo_poster}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={demo_720}
					media="(max-width: 1023px)"
					type="video/webm"
				/>
				<source
					src={demo_1080}
					type="video/webm"
				/>
			</video>
		</section>
	);
}
