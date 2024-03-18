import styles from "./conclusionSection.module.css";

import { useInView } from "react-intersection-observer";

import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";
import bg_img from "../../assets/imgs/farms/rooftop_farm_2.webp";
export default function ConclusionSection() {
	const first_card = useInView();
	const second_card = useInView();
	const third_card = useInView();
	const fourth_card = useInView();

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.articles_wrapper}>
					<article
						id="first_card"
						className={styles.article}>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={styles.one_arch_img}
								src={one_arch}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's small arch"
							/>
						</div>
						<h2
							ref={first_card.ref}
							className={styles.title}>
							A{" "}
							<span
								className={`${styles.dark_green} ${styles.strong}`}>
								new paradigm
							</span>{" "}
							in the production and distribution of food
						</h2>
					</article>
					<article
						id="second_card"
						className={styles.article}>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={styles.two_archs_img}
								src={two_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's medium arch"
							/>
						</div>
						<h2
							ref={second_card.ref}
							className={styles.title}>
							The{" "}
							<span
								className={`${styles.green} ${styles.strong}`}>
								necessary innovation
							</span>{" "}
							to address environmental issues
						</h2>
					</article>
					<article
						id="third_card"
						className={styles.article}>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={styles.three_archs_img}
								src={three_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="logo's big arch arch"
							/>
						</div>
						<h2
							ref={third_card.ref}
							className={styles.title}>
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
					<article
						id="fourth_card"
						className={styles.article}>
						<div className={styles.frame}>
							<img
								loading="lazy"
								width="100%"
								className={styles.full_archs_img}
								src={full_archs}
								//*TODO: srcSet={`${} 768w, ${} `}
								alt="full logo with all it's archs"
							/>
						</div>
						<h2
							ref={fourth_card.ref}
							className={styles.title}>
							Born to set a{" "}
							<span className={styles.strong}>new standard</span>{" "}
							in the food system
						</h2>
					</article>
				</div>
				<nav className={styles.stepper}>
					<a
						href="#first_card"
						className={`${styles.step} ${
							first_card.inView ? styles.show : styles.hide
						}`}>
						1
					</a>
					<a
						href="#second_card"
						className={`${styles.step} ${
							second_card.inView ? styles.show : styles.hide
						}`}>
						2
					</a>
					<a
						href="#third_card"
						className={`${styles.step} ${
							third_card.inView ? styles.show : styles.hide
						}`}>
						3
					</a>
					<a
						href="#fourth_card"
						className={`${styles.step} ${
							fourth_card.inView ? styles.show : styles.hide
						}`}>
						4
					</a>
				</nav>
			</div>
			<div className={styles.img_wrapper}>
				<img
					loading="lazy"
					width="100%"
					height="100%"
					className={styles.bg_img}
					src={bg_img}
					alt="farms in the rooftop of buildings"
				/>
			</div>
		</section>
	);
}
