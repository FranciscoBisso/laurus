import styles from "./home.module.css";
import video from "../../assets/videos/bkg.webm";
import heroImg from "../../assets/imgs/farms/towers.webp";

import CardsStack from "../../components/cardsStack/CardsStack";

export default function Home() {
	return (
		<div className={styles.wrapper}>
			{/* HERO SECTION */}
			<section className={styles.hero_section}>
				<img
					className={styles.hero_img}
					src={heroImg}
					alt="hero image"
					loading="lazy"
				/>
				<div className={styles.img_headers_wrapper}>
					<h2
						className={styles.img_headers}
						id={styles.first_header}>
						LANDLESS
					</h2>
					<h2
						className={styles.img_headers}
						id={styles.second_header}>
						SEASONLESS
					</h2>
					<h2
						className={styles.img_headers}
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

			{/* VIDEO SECTION */}
			<section className={styles.video_section}>
				<h3 className={styles.subtitle}>OUR FARMS</h3>
				<video
					loading="lazy"
					className={styles.video}
					src={video}
					playsInline
					loop
					autoPlay
					muted
				/>
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
				</article>
			</section>
		</div>
	);
}
