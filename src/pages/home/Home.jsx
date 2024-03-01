import { PopupButton } from "react-calendly";

import styles from "./home.module.css";

// Videos
import poster from "../../assets/videos/videoframe.webp";
import demo_480 from "../../assets/videos/short_demo_480.webm";
import demo_720 from "../../assets/videos/short_demo_720.webm";
import demo_1080 from "../../assets/videos/short_demo_1080.webm";
import demo from "../../assets/videos/short_demo_original.webm";

// Images
import bgless_brand_negative from "../../assets/imgs/brand/logo/bgless_brand_negative.webp";

import hero_img_farm_aisle from "../../assets/imgs/farms/farm_aisle.webp";
import hero_img_city_concept from "../../assets/imgs/laurus.webp";

import card_img_one from "../../assets/imgs/farms/rooftop_farm_1.webp";
import card_img_two from "../../assets/imgs/farms/opRob_3.webp";
import card_img_three from "../../assets/imgs/products/products.webp";

import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			{/* HERO SECTION */}

			<section className={styles.hero_section}>
				<div className={styles.hero_img_wrapper}>
					<img
						className={styles.hero_img_mobile}
						src={hero_img_farm_aisle}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="employee working inside the farm"
					/>
					<img
						className={styles.hero_img_desktop}
						src={hero_img_city_concept}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="closeup on farm's tower"
					/>
				</div>
				<div className={styles.hero_logo_wrapper}>
					<img
						className={styles.hero_logo}
						src={bgless_brand_negative}
						alt="logo"
					/>
				</div>
			</section>

			{/* PURPOSE SECTION */}
			<section className={styles.purpose_section}>
				<div className={styles.cards_stack}>
					<article className={styles.card}>
						<div className={styles.card_img_wrapper}>
							<img
								loading="lazy"
								className={styles.card_img}
								src={card_img_one}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="rooftop farm"
							/>
						</div>
						<div className={styles.card_txt_wrapper}>
							<h2 className={styles.card_title}>What we do</h2>
							<p className={styles.card_txt}>
								We reimagine urban agriculture and provide a
								sustainable and efficient way to deliver
								hyper-local, nutritious and affordable food to
								people in cities.
							</p>
						</div>
					</article>

					<article className={styles.card}>
						<div className={styles.card_img_wrapper}>
							<img
								loading="lazy"
								className={styles.card_img}
								src={card_img_two}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="operating robot"
							/>
						</div>
						<div className={styles.card_txt_wrapper}>
							<h2 className={styles.card_title}>How we do it</h2>
							<p className={styles.card_txt}>
								Our automated inflatable farms, designed to
								utilize idle spaces in cities, enable
								cultivation regardless of the season and
								weather.
							</p>
						</div>
					</article>

					<article className={styles.card}>
						<div className={styles.card_img_wrapper}>
							<img
								loading="lazy"
								className={styles.card_img}
								src={card_img_three}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="products"
							/>
						</div>
						<div className={styles.card_txt_wrapper}>
							<h2 className={styles.card_title}>
								What we achieve
							</h2>
							<p className={styles.card_txt}>
								Our farms can provide premium food at affordable
								prices to anyone, regardless of where they live
								or how much they earn.
							</p>
						</div>
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
						src={demo_480}
						media="(max-width: 500px)"
						type="video/webm"
					/>
					<source
						src={demo_720}
						media="(max-width: 1024px)"
						type="video/webm"
					/>
					<source
						src={demo_1080}
						media="(max-width: 1368px)"
						type="video/webm"
					/>
					<source
						src={demo}
						type="video/webm"
					/>
				</video>
			</section>

			{/* CONCLUSION SECTION */}
			<section className={styles.conclusion_section}>
				<div className={styles.slider}>
					<article className={styles.slide}>
						<div className={styles.one_arch_img_wrapper}>
							<img
								loading="lazy"
								className={styles.slide_img}
								src={one_arch}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's small arch"
							/>
						</div>
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
						<div className={styles.two_archs_img_wrapper}>
							<img
								loading="lazy"
								className={styles.slide_img}
								src={two_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's medium arch"
							/>
						</div>

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
						<div className={styles.three_archs_img_wrapper}>
							<img
								loading="lazy"
								className={styles.slide_img}
								src={three_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's big arch arch"
							/>
						</div>

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
						<div className={styles.full_archs_img_wrapper}>
							<img
								loading="lazy"
								className={styles.slide_img}
								src={full_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="full logo with all it's archs"
							/>
						</div>

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
						<h1 className={styles.card_header}>
							{
								"Together, let's pioneer the future of agriculture"
							}
						</h1>
						<p className={styles.card_text}>
							Join us today and create a future where fresh food
							is accessible to all, regardless of where they live
							or how much they make.
						</p>
					</div>
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
