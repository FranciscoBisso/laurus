import styles from "./hero.module.css";
import bgless_brand_secondary from "../../assets/imgs/brand/logo/bgless_brand_secondary.webp";
import hero_img_farm_aisle from "../../assets/imgs/farms/farm_aisle.webp";
import hero_img_city_concept from "../../assets/imgs/laurus.webp";
export default function Hero() {
	return (
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
					src={bgless_brand_secondary}
					alt="logo"
				/>
			</div>
		</section>
	);
}
