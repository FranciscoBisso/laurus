import { useEffect, useState } from "react";
import styles from "./introSection.module.css";
import bgless_brand_primary from "../../assets/imgs/brand/logo/bgless_brand_primary.webp";
import bgless_brand_secondary from "../../assets/imgs/brand/logo/bgless_brand_secondary.webp";
import reel_720 from "../../assets/videos/reels/farm_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/farm_reel_1080.webm";
import poster from "../../assets/videos/reels/reel_frist_frame.webp";
import { useInView } from "react-intersection-observer";

export default function IntroSection() {
	const logo = useInView();

	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const handleChange = (e) => {
			setIsDarkMode(e.matches);
		};

		darkModeMediaQuery.addEventListener("change", handleChange);

		return () => {
			darkModeMediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	return (
		<section
			className={styles.hero_section}
			tabIndex={0}>
			<div className={styles.logo_wrapper}>
				{isDarkMode && (
					<img
						ref={logo.ref}
						width="100%"
						className={styles.logo}
						src={bgless_brand_primary}
						alt="logo"
					/>
				)}
				{!isDarkMode && (
					<img
						ref={logo.ref}
						width="100%"
						className={styles.logo}
						src={bgless_brand_secondary}
						alt="logo"
					/>
				)}
			</div>
			<div className={styles.bg_wrapper}>
				<video
					width="100%"
					height="100%"
					className={`${styles.bg_video} ${
						logo.inView ? styles.show : styles.hide
					}`}
					poster={poster}
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
			</div>
		</section>
	);
}
