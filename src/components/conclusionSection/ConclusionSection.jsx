import styles from "./conclusionSection.module.css";

import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";
export default function ConclusionSection() {
	return (
		<section className={styles.section}>
			<div className={styles.mobile_container}>
				<div className={styles.articles_wrapper}>
					<article className={styles.article}>
						<div className={styles.frame}>
							<div className={styles.filter}></div>
							<img
								loading="lazy"
								className={styles.one_arch_img}
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
					<article className={styles.article}>
						<div className={styles.frame}>
							<div className={styles.filter}></div>

							<img
								loading="lazy"
								className={styles.two_archs_img}
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
					<article className={styles.article}>
						<div className={styles.frame}>
							<div className={styles.filter}></div>

							<img
								loading="lazy"
								className={styles.three_archs_img}
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
					<article className={styles.article}>
						<div className={styles.frame}>
							<div className={styles.filter}></div>

							<img
								loading="lazy"
								className={styles.full_archs_img}
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
				<div className={styles.stepper}>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
					<span className={styles.step}></span>
				</div>
			</div>
		</section>
	);
}
