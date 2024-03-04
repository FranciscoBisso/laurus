import styles from "./purpose.module.css";
import card_img_one from "../../assets/imgs/farms/rooftop_farm_1.webp";
import card_img_two from "../../assets/imgs/farms/opRob_3.webp";
import card_img_three from "../../assets/imgs/products/products.webp";
export default function Purpose() {
	return (
		<section className={styles.purpose_section_landscape}>
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
							Our automated inflatable farms, designed to utilize
							idle spaces in cities, enable cultivation regardless
							of the season and weather.
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
						<h2 className={styles.card_title}>What we achieve</h2>
						<p className={styles.card_txt}>
							Our farms can provide premium food at affordable
							prices to anyone, regardless of where they live or
							how much they earn.
						</p>
					</div>
				</article>
			</div>
		</section>
	);
}
