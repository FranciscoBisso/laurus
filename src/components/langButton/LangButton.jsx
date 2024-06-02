import styles from "./langButton.module.css";
import { Helmet } from "react-helmet-async";
export default function LangButton(props) {
	console.log("btn props state:", props?.introSectionVisibility);
	return (
		<>
			<Helmet>
				<html lang={props?.lang ? "en" : "es"}></html>
			</Helmet>
			<button
				className={`${styles.lang_btn} ${
					props?.introSectionVisibility ? styles.hide : styles.show
				}`}
				tabIndex={0}
				onClick={props?.handleLang}>
				<p className={styles.lang}>{props?.lang ? "EN" : "ES"}</p>
			</button>
		</>
	);
}
