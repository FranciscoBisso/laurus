import styles from "./introSection.module.css";
import roofTopFarm from "../../assets/imgs/farms/rooftop.webp";
import harvestRobot from "../../assets/imgs/farms/opRob_3.webp";
import seedlingTray from "../../assets/imgs/farms/seedling_tray_2.webp";
export default function IntroSection() {
	return (
		<section
			id="intro"
			className={styles.intro_section}>
			<img className={styles.bg_img} />
			<nav className={styles.nav_bar}>
				<a
					className={styles.nav_link}
					href="#purpose">
					<img
						src={roofTopFarm}
						alt="rooftop farm"
						className={styles.thumbnail}
					/>
					<span className={styles.subtitle}>Our purpose</span>
				</a>
				<a
					className={styles.nav_link}
					href="#tech">
					<img
						src={harvestRobot}
						alt="harvest robot"
						className={styles.thumbnail}
					/>
					<span className={styles.subtitle}>Our tech</span>
				</a>
				<a
					className={styles.nav_link}
					href="#contact">
					<img
						src={seedlingTray}
						alt="seedling tray"
						className={styles.thumbnail}
					/>
					<span className={styles.subtitle}>Contact us</span>
				</a>
			</nav>
		</section>
	);
}
