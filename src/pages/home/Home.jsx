import { PopupButton } from "react-calendly";
import poster from "../../assets/videos/videoframe.webp";
import SocialMedia from "../../components/socialMedia/SocialMedia";

import styles from "./home.module.css";
// Videos
import video_mobile from "../../assets/videos/bkg_480.webm";
import video_tablet from "../../assets/videos/bkg_720.webm";
import video_desktop from "../../assets/videos/bkg_1080.webm";
// Images
import bgless_logo_strip from "../../assets/imgs/brand/bgless_logo_strip.webp";

import hero_img from "../../assets/imgs/insta/farm_aisle.webp";

import one_arch from "../../assets/imgs/brand/bgless_one_arch.webp";
import two_archs from "../../assets/imgs/brand/bgless_two_archs.webp";
import three_archs from "../../assets/imgs/brand/bgless_three_archs.webp";
import full_archs from "../../assets/imgs/brand/bgless_full_archs.webp";

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			{/* HERO SECTION */}

			<section className={styles.hero_section}>
				<div className={styles.hero_img_wrapper}>
					<img
						loading="lazy"
						className={styles.hero_img}
						src={hero_img}
						// srcSet={`${bgless_logo_strip_mobile} 768w, ${bgless_logo_strip} `}
					/>
				</div>
				<div className={styles.hero_logo_wrapper}>
					<img
						loading="lazy"
						className={styles.hero_logo}
						src={bgless_logo_strip}
					/>
				</div>
			</section>

			{/* PURPOSE SECTION */}
			<section className={styles.purpose_section}>
				<article className={styles.card}>
					<h2
						className={`${styles.card_title} ${styles.light_green}`}>
						What we do
					</h2>
					<p className={styles.card_txt}>
						Laurus reimagines urban agriculture and provides an
						efficient and sustainable way to deliver hyper-local,
						fresh and affordable food to people in cities.
					</p>
				</article>
				<article className={styles.card}>
					<h2 className={`${styles.card_title} ${styles.green}`}>
						How we do it
					</h2>
					<p className={styles.card_txt}>
						With our automated inflatable farms, designed to utilize
						idle spaces in cities, such as rooftops and parking
						lots, we enable cultivation regardless of the season and
						weather.
					</p>
				</article>
				<article className={styles.card}>
					<h2 className={`${styles.card_title} ${styles.dark_green}`}>
						What we achieve
					</h2>
					<p className={styles.card_txt}>
						Fresh food for everyone. Thanks to our technology, we
						can provide high-quality food at affordable prices,
						strengthening food systems and delivering nutritious
						food to everyone, regardless of where they live or how
						much they earn.
					</p>
				</article>
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

			{/* CONCLUSION SECTION */}
			<section className={styles.conclusion_section}>
				<div className={styles.slider}>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.one_arch_img}
							src={one_arch}
						/>

						<h2 className={styles.title}>
							A{" "}
							<span
								className={`${styles.dark_green} ${styles.strong}`}>
								new paradigm
							</span>{" "}
							in the production and distribution of food
						</h2>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.two_archs_img}
							src={two_archs}
						/>

						<h2 className={styles.title}>
							The{" "}
							<span
								className={`${styles.green} ${styles.strong}`}>
								necessary innovation
							</span>{" "}
							to address environmental issues
						</h2>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.three_archs_img}
							src={three_archs}
						/>

						<h2 className={styles.title}>
							Close to people, providing{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								accessible
							</span>
							,{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								fresh
							</span>{" "}
							and{" "}
							<span
								className={`${styles.light_green} ${styles.strong}`}>
								ready
							</span>{" "}
							to consume food
						</h2>
					</article>
					<article className={styles.slide}>
						<img
							loading="lazy"
							className={styles.full_archs_img}
							src={full_archs}
						/>

						<h2 className={styles.title}>
							Born to set a{" "}
							<span className={styles.strong}>new standard</span>{" "}
							in the food system
						</h2>
					</article>
				</div>
			</section>

			{/* CONTACT US SECTION */}
			<section className={styles.contact_section}>
				<article className={styles.contact_card}>
					<div className={styles.contact_card_body}>
						<h1 className={styles.card_header}>{"Let's chat"}</h1>
						<p className={styles.card_text}>
							Join us today and create a future where fresh food
							is accessible to all, regardless of where they live
							or how much they make.
						</p>
					</div>
					<SocialMedia props={{ styles }} />
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
