import styles from "./purposeSection.module.css";
import card_img_one_mobile from "../../assets/imgs/farms/rooftop_farm_mobile.webp";
import card_img_one_tablet from "../../assets/imgs/farms/rooftop_farm_tablet.webp";
import card_img_one_desktop from "../../assets/imgs/farms/rooftop_farm_desktop.webp";
import card_img_two_mobile from "../../assets/imgs/farmingRobots/farming_robot_mobile.webp";
import card_img_two_tablet from "../../assets/imgs/farmingRobots/farming_robot_tablet.webp";
import card_img_two_desktop from "../../assets/imgs/farmingRobots/farming_robot_desktop.webp";
import card_img_three_mobile from "../../assets/imgs/products/products_mobile.webp";
import card_img_three_tablet from "../../assets/imgs/products/products_tablet.webp";
import card_img_three_desktop from "../../assets/imgs/products/products_desktop.webp";

import { useInView } from "react-intersection-observer";
export default function PurposeSection() {
	const firstTitle = useInView();
	const secondTitle = useInView();
	const thirdTitle = useInView();

	return (
		<section
			className={styles.purpose_section}
			tabIndex={0}>
			<div className={styles.wrapper}>
				<div className={styles.frame}>
					<div className={styles.filter}></div>
					<img
						loading="lazy"
						width="100%"
						height="100%"
						className={`${styles.img} ${
							firstTitle.inView ? styles.show : styles.hide
						}`}
						src={card_img_one_desktop}
						sizes="(orientation: landscape) 50vw, 100vw"
						srcSet={`${card_img_one_mobile} 768w, ${card_img_one_tablet} 1024w, ${card_img_one_desktop} `}
						alt="rooftop farm"
					/>
					<img
						loading="lazy"
						width="100%"
						height="100%"
						className={`${styles.img} ${
							secondTitle.inView ? styles.show : styles.hide
						}`}
						src={card_img_two_desktop}
						sizes="(orientation: landscape) 50vw, 100vw"
						srcSet={`${card_img_two_mobile} 768w, ${card_img_two_tablet} 1024w, ${card_img_two_desktop} `}
						alt="operating robot"
					/>
					<img
						loading="lazy"
						width="100%"
						height="100%"
						className={`${styles.img} ${
							thirdTitle.inView ? styles.show : styles.hide
						}`}
						src={card_img_three_desktop}
						sizes="(orientation: landscape) 50vw, 100vw"
						srcSet={`${card_img_three_mobile} 768w, ${card_img_three_tablet} 1024w, ${card_img_three_desktop} `}
						alt="products"
					/>
				</div>
				<article className={styles.card}>
					<div className={styles.card_txt_wrapper}>
						<h2
							ref={firstTitle.ref}
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
							ref={secondTitle.ref}
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
							ref={thirdTitle.ref}
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
