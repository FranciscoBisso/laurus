import styles from "./conclusionSection.module.css";

import { useInView } from "react-intersection-observer";

import one_arch from "../../assets/imgs/brand/logoArchs/bgless_arch_400.webp";
import two_archs from "../../assets/imgs/brand/logoArchs/bgless_two_archs_400.webp";
import three_archs from "../../assets/imgs/brand/logoArchs/bgless_three_archs_400.webp";
import full_archs from "../../assets/imgs/brand/logoArchs/bgless_full_archs_400.webp";
export default function ConclusionSection() {
	const first_title = useInView();
	const second_title = useInView();
	const third_title = useInView();
	const fourth_title = useInView();

	return (
		<section className={styles.section}>
			<div className={styles.mobile_container}>
				<div className={styles.frame}>
					<div className={styles.filter}></div>
					<img
						loading="lazy"
						className={`${
							first_title.inView ? styles.show : styles.hide
						} ${styles.img} ${styles.one_arch_img}`}
						src={one_arch}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="logo's small arch"
					/>
					<img
						loading="lazy"
						className={`${
							second_title.inView ? styles.show : styles.hide
						} ${styles.img} ${styles.two_archs_img}`}
						src={two_archs}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="logo's medium arch"
					/>
					<img
						loading="lazy"
						className={`${
							third_title.inView ? styles.show : styles.hide
						} ${styles.img} ${styles.three_archs_img}`}
						src={three_archs}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="logo's big arch arch"
					/>
					<img
						loading="lazy"
						className={`${
							fourth_title.inView ? styles.show : styles.hide
						} ${styles.img} ${styles.full_archs_img}`}
						src={full_archs}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="full logo with all it's archs"
					/>
				</div>
				<article className={styles.article}>
					<h2 className={styles.title}>
						A{" "}
						<span
							ref={first_title.ref}
							className={`${styles.dark_green} ${styles.strong}`}>
							new paradigm
						</span>{" "}
						in the production and distribution of food
					</h2>
				</article>
				<article className={styles.article}>
					<h2 className={styles.title}>
						The{" "}
						<span
							ref={second_title.ref}
							className={`${styles.green} ${styles.strong}`}>
							necessary innovation
						</span>{" "}
						to address environmental issues
					</h2>
				</article>
				<article className={styles.article}>
					<h2 className={styles.title}>
						Close to people, providing{" "}
						<span
							ref={third_title.ref}
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
					<h2 className={styles.title}>
						Born to set a{" "}
						<span
							ref={fourth_title.ref}
							className={styles.strong}>
							new standard
						</span>{" "}
						in the food system
					</h2>
				</article>
			</div>
		</section>
	);
}
