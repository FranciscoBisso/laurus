import styles from "./introSection.module.css";
import logo_primary from "../../assets/imgs/brand/logo/logo_primary_desktop.webp";
import logo_secondary from "../../assets/imgs/brand/logo/logo_secondary_desktop.webp";
import reel_720 from "../../assets/videos/reels/farm_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/farm_reel_1080.webm";
import poster from "../../assets/videos/reels/reel_frist_frame.webp";
import { useInView } from "react-intersection-observer";

export default function IntroSection() {
	const logo = useInView();

	return (
		<section
			className={styles.hero_section}
			tabIndex={0}>
			<picture className={styles.logo_wrapper}>
				<source
					srcSet={logo_secondary}
					media="(prefers-color-scheme: dark)"
				/>
				<img
					ref={logo.ref}
					width="100%"
					className={styles.logo}
					src={logo_primary}
					alt="logo"
				/>
			</picture>
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
