import styles from "./home.module.css";
import poster from "../../assets/videos/videoframe.webp";
import video_mobile from "../../assets/videos/bkg_480.webm";
import video_tablet from "../../assets/videos/bkg_720.webm";
import video_desktop from "../../assets/videos/bkg_1080.webm";
import CardsStack from "../../components/cardsStack/CardsStack";
import { PopupButton } from "react-calendly";

import hero_logo_mobile from "../../assets/imgs/hero/hero_logo_mobile.webp";
import hero_logo_tablets from "../../assets/imgs/hero/hero_logo_tablets.webp";
import hero_logo_big_tablets from "../../assets/imgs/hero/hero_logo_big_tablets.webp";
import hero_logo_desktop from "../../assets/imgs/hero/hero_logo_desktop.webp";

export default function Home() {
	return (
		<div className={styles.wrapper}>
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
				<div className={styles.headers_wrapper}>
					<h2
						className={styles.headers}
						id={styles.first_header}>
						LANDLESS
					</h2>
					<h2
						className={styles.headers}
						id={styles.second_header}>
						SEASONLESS
					</h2>
					<h2
						className={styles.headers}
						id={styles.third_header}>
						AGRICULTURE
					</h2>
				</div>
			</section>

			{/* COMPANY'S PURPOSE SECTION */}
			<section className={styles.purpose_section}>
				<h1 className={styles.subtitle}>WE DELIVER FUTURE</h1>
				<CardsStack props={{ styles }} />
			</section>

			{/* CONTACT US SECTION */}
			<section className={styles.contact_section}>
				<article className={styles.contact_card}>
					<h4 className={styles.card_header}>{"Let's chat"}</h4>
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
		</div>
	);
}
