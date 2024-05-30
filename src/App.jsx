import { useState } from "react";
import styles from "./app.module.css";
import Home from "./pages/home/Home";

function App() {
	const [lang, setLang] = useState(true);
	const handleLang = () => {
		setLang(!lang);
	};
	return (
		<>
			<main className={styles.main}>
				<button
					className={styles.lang_btn}
					tabIndex={0}
					onClick={handleLang}>
					<p className={styles.lang}>{lang ? "EN" : "ES"}</p>
				</button>
				<Home lang={lang} />
			</main>
		</>
	);
}

export default App;
