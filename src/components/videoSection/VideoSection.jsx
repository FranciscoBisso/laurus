import styles from "./videoSection.module.css";
import reel_poster from "../../assets/videos/reels/tower_reel_frist_frame.webp";
import demo_poster from "../../assets/videos/demos/short_demo_first_frame.webp";
import reel_720 from "../../assets/videos/reels/tower_reel_frist_frame.webp";
import demo_720 from "../../assets/videos/demos/short_demo_first_frame.webp";
import demo_1080 from "../../assets/videos/demos/short_demo_1080.webm";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function VideoSection() {
	const txt = useInView();

	const [
		isMobileViewportOrientationPortrait,
		setIsMobileViewportOrientationPortrait,
	] = useState(
		window.matchMedia("(orientation: portrait) and (width < 700px)").matches
	);

	useEffect(() => {
		const mobileViewportOrientationPortraitQuery = window.matchMedia(
			"(orientation: portrait) and (width < 700px)"
		);

		const handleChange = (e) => {
			setIsMobileViewportOrientationPortrait(e.matches);
		};

		mobileViewportOrientationPortraitQuery.addEventListener(
			"change",
			handleChange
		);

		return () => {
			mobileViewportOrientationPortraitQuery.removeEventListener(
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
				poster={
					isMobileViewportOrientationPortrait
						? reel_poster
						: demo_poster
				}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={reel_720}
					media="(orientation: portrait) and (width < 700px)"
					type="video/webm"
				/>
				<source
					src={demo_720}
					media="(orientation: landscape) and (width < 1000px)"
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
