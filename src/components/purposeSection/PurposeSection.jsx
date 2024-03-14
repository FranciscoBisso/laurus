import styles from "./purposeSection.module.css";
import card_img_one from "../../assets/imgs/farms/rooftop_farm_1.webp";
import card_img_two from "../../assets/imgs/farms/opRob_3.webp";
import card_img_three from "../../assets/imgs/products/products.webp";

import { useInView } from "react-intersection-observer";
export default function PurposeSection() {
	const first_title = useInView();
	const second_title = useInView();
	const third_title = useInView();

	return (
		<section className={styles.purpose_section}>
			<div className={styles.wrapper}>
				<div className={styles.frame}>
					<div className={styles.filter}></div>
					<img
						loading="lazy"
						className={`${styles.img} ${
							first_title.inView ? styles.show : styles.hide
						}`}
						src={card_img_one}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="rooftop farm"
					/>
					<img
						loading="lazy"
						className={`${styles.img} ${
							second_title.inView ? styles.show : styles.hide
						}`}
						src={card_img_two}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="operating robot"
					/>
					<img
						loading="lazy"
						className={`${styles.img} ${
							third_title.inView ? styles.show : styles.hide
						}`}
						src={card_img_three}
						//*TODO: srcSet={`${} 768w, ${} `}
						alt="products"
					/>
				</div>
				<article className={styles.card}>
					<div className={styles.card_txt_wrapper}>
						<h2
							ref={first_title.ref}
							className={styles.card_title}>
							What we do
						</h2>
						<p className={styles.card_txt}>
							We reinvent urban agriculture by providing a
							sustainable and efficient way to deliver
							hyper-local, nutritious and affordable food to
							people in cities.
						</p>
					</div>
				</article>

				<article className={styles.card}>
					<div className={styles.card_txt_wrapper}>
						<h2
							ref={second_title.ref}
							className={styles.card_title}>
							How we do it
						</h2>
						<p className={styles.card_txt}>
							Our automated inflatable farms, designed to utilize
							idle spaces in cities, enable cultivation regardless
							of the season and weather.
						</p>
					</div>
				</article>

				<article className={styles.card}>
					<div className={styles.card_txt_wrapper}>
						<h2
							ref={third_title.ref}
							className={styles.card_title}>
							What we achieve
						</h2>
						<p className={styles.card_txt}>
							Our farms can provide fresh and premium food at
							affordable prices to anyone, regardless of where
							they live or how much they earn.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}
