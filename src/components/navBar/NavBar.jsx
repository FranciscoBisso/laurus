import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import lightLogo from "../../assets/imgs/brand/bgless_brand_black.webp";
import darkLogo from "../../assets/imgs/brand/bgless_brand.webp";
import styles from "./navBar.module.css";

export default function NavBar() {
	const [isDarkMode, setIsDarkMode] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches
	);

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);

		const handleChange = (e) => {
			setIsDarkMode(e.matches);
		};

		darkModeMediaQuery.addEventListener("change", handleChange);

		return () => {
			darkModeMediaQuery.removeEventListener("change", handleChange);
		};
	}, []);

	return (
		<nav className={styles.nav_bar}>
			<NavLink className={styles.nav_links}>
				{!isDarkMode && (
					<img
						className={styles.logo}
						src={lightLogo}
						key="light-logo"
						alt="brand logo"
						loading="lazy"
					/>
				)}
				{isDarkMode && (
					<img
						className={styles.logo}
						src={darkLogo}
						key="dark-logo"
						alt="brand logo"
						loading="lazy"
					/>
				)}
			</NavLink>
		</nav>
	);
}
