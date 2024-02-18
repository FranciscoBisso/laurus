import { PopupButton } from "react-calendly";
import poster from "../../assets/videos/videoframe.webp";
import styles from "./home.module.css";
// Videos
import video_mobile from "../../assets/videos/bkg_480.webm";
import video_tablet from "../../assets/videos/bkg_720.webm";
import video_desktop from "../../assets/videos/bkg_1080.webm";
// Images
import hero_logo_mobile from "../../assets/imgs/hero/hero_logo_mobile.webp";
import hero_logo_tablets from "../../assets/imgs/hero/hero_logo_tablets.webp";
import hero_logo_big_tablets from "../../assets/imgs/hero/hero_logo_big_tablets.webp";
import hero_logo_desktop from "../../assets/imgs/hero/hero_logo_desktop.webp";
import one_arch from "../../assets/imgs/brand/bgless_one_arch.webp";
import two_archs from "../../assets/imgs/brand/bgless_two_archs.webp";
import three_archs from "../../assets/imgs/brand/bgless_three_archs.webp";
import full_archs from "../../assets/imgs/brand/bgless_full_archs.webp";

export default function Home() {
	return (
		<>
			{/* HERO SECTION */}

			<section className={styles.hero_section}>
				<div className={styles.hero_img_wrapper}>
					<img
						loading="lazy"
						className={styles.hero_img}
						src={hero_logo_desktop}
						srcSet={`${hero_logo_mobile} 450w, ${hero_logo_tablets} 768w, ${hero_logo_big_tablets} 1366w, ${hero_logo_desktop} 1920w`}
					/>
				</div>
			</section>
			<section className={styles.presentation_section}>
				<div className={styles.slider}>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.one_arch_img}
							src={one_arch}
						/>

						<p className={styles.paragraph}>
							A new paradigm in the production and distribution of
							food
						</p>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.two_archs_img}
							src={two_archs}
						/>

						<p className={styles.paragraph}>
							The necessary innovation to address environmental
							issues
						</p>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.three_archs_img}
							src={three_archs}
						/>

						<p className={styles.paragraph}>
							Close to people, providing accessible, fresh and
							ready to consume food
						</p>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.full_archs_img}
							src={full_archs}
						/>

						<p className={styles.paragraph}>
							Born to set a new standard in the food system
						</p>
					</article>
				</div>
			</section>

			{/* VIDEO SECTION */}
			<section className={styles.video_section}>
				<video
					loading="lazy"
					className={styles.video}
					poster={poster}
					playsInline
					loop
					autoPlay
					muted>
					<source
						src={video_mobile}
						media="(max-width: 520px)"
						type="video/webm"
					/>
					<source
						src={video_tablet}
						media="(max-width: 1368px)"
						type="video/webm"
					/>
					<source
						src={video_desktop}
						type="video/webm"
					/>
				</video>
			</section>

			{/* CONTACT US SECTION */}
			<section className={styles.contact_section}>
				<article className={styles.contact_card}>
					<h1 className={styles.card_header}>{"Let's chat"}</h1>
					<p className={styles.card_text}>
						Join us today and help us change the way we think about
						agriculture. Together, we can create a future where
						fresh food is accessible to all, regardless of where
						they live or how much they make.
					</p>

					<PopupButton
						className={styles.calendly_btn}
						url="https://calendly.com/nicobisso/intro-call"
						rootElement={document.getElementById("root")}
						text="Schedule a call!"
					/>
				</article>
			</section>
		</>
	);
}
