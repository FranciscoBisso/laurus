import { PopupButton } from "react-calendly";
import styles from "./home.module.css";
import poster from "../../assets/videos/videoframe.webp";
// Videos
import video_mobile from "../../assets/videos/bkg_480.webm";
import video_tablet from "../../assets/videos/bkg_720.webm";
import video_desktop from "../../assets/videos/bkg_1080.webm";
// Images
import hero_logo_mobile from "../../assets/imgs/hero/hero_logo_mobile.webp";
import hero_logo_tablets from "../../assets/imgs/hero/hero_logo_tablets.webp";
import hero_logo_big_tablets from "../../assets/imgs/hero/hero_logo_big_tablets.webp";
import hero_logo_desktop from "../../assets/imgs/hero/hero_logo_desktop.webp";

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

			{/* COMPANY'S PURPOSE SECTION */}
			<section className={styles.purpose_section}>
				<div className={styles.cards_wrapper}>
					<article className={styles.card}>
						<h2 className={styles.card_header}>What we do</h2>
						<p className={styles.card_text}>
							Laurus reimagines urban agriculture and provides an
							efficient and sustainable way to deliver
							hyper-local, fresh and affordable food to people in
							cities.
						</p>
					</article>

					<article className={styles.card}>
						<h2 className={styles.card_header}>How we do it</h2>
						<p className={styles.card_text}>
							With our automated inflatable farms, designed to
							utilize idle spaces in cities, such as rooftops and
							parking lots, we enable cultivation regardless of
							the season and weather.
						</p>
					</article>

					<article className={styles.card}>
						<h2 className={styles.card_header}>What we achieve</h2>
						<p className={styles.card_text}>
							Fresh food for everyone. Thanks to our technology,
							we can provide high-quality food at affordable
							prices, strengthening food systems and delivering
							nutritious food to everyone, regardless of where
							they live or how much they earn.
						</p>
					</article>
				</div>
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
