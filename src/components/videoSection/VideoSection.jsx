import styles from "./videoSection.module.css";
import reel_poster from "../../assets/videos/reels/tower_reel_frist_frame.webp";
import demo_poster from "../../assets/videos/demos/short_demo_first_frame.webp";
import reel_720 from "../../assets/videos/reels/tower_reel_720.webm";
import demo_720 from "../../assets/videos/demos/short_demo_720.webm";
import reel_1080 from "../../assets/videos/reels/tower_reel_1080.webm";
import demo_1080 from "../../assets/videos/demos/short_demo_1080.webm";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function VideoSection() {
	const txt = useInView();

	const [isOrientationLandscape, setIsOrientationLandscape] = useState(
		window.matchMedia("(orientation: landscape)").matches
	);

	useEffect(() => {
		const orientationLandscapeQuery = window.matchMedia(
			"(orientation: landscape)"
		);

		const handleChange = (e) => {
			setIsOrientationLandscape(e.matches);
		};

		orientationLandscapeQuery.addEventListener("change", handleChange);

		return () => {
			orientationLandscapeQuery.removeEventListener(
				"change",
				handleChange
			);
		};
	}, []);

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
				className={`${styles.video} ${
					txt.inView ? styles.show : styles.hide
				}`}
				poster={isOrientationLandscape ? demo_poster : reel_poster}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={demo_720}
					media="(max-width: 1023px) and (orientation: landscape)"
					type="video/webm"
				/>
				<source
					src={demo_1080}
					media="(min-width: 1024px) and (orientation: landscape)"
					type="video/webm"
				/>{" "}
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
		</section>
	);
}
