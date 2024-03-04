import styles from "./hero.module.css";
import bgless_brand_secondary from "../../assets/imgs/brand/logo/bgless_brand_secondary.webp";
import reel_720 from "../../assets/videos/reels/farm_reel_720.webm";
import reel_1080 from "../../assets/videos/reels/farm_reel_1080.webm";
import poster from "../../assets/videos/reels/reel_frist_frame.webp";
export default function Hero() {
	return (
		<section className={styles.hero_section}>
			<div className={styles.logo_wrapper}>
				<img
					className={styles.logo}
					src={bgless_brand_secondary}
					alt="logo"
				/>
			</div>
			<div className={styles.bg_wrapper}>
				<video
					loading="lazy"
					className={styles.bg_video}
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
			</div>
		</section>
	);
}
