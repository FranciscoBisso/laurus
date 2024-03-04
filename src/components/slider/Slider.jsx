import styles from "./slider.module.css";
import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";
export default function Slider() {
	return (
		<section className={styles.slider_section}>
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
						<span className={`${styles.green} ${styles.strong}`}>
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
						<span className={styles.strong}>new standard</span> in
						the food system
					</h2>
				</article>
			</div>
		</section>
	);
}
