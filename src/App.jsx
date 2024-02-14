import styles from "./app.module.css";

import Home from "./pages/home/Home";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
	return (
		<>
			<main className={styles.main}>
				<Home />
			</main>
			<footer className={styles.footer}>
				<div className={styles.wrapper}>
					<SocialMedia props={{ styles }} />
					<span className={styles.address}>
						San Martín, 750, Buenos Aires, CABA 1004
					</span>
				</div>
			</footer>
		</>
	);
}

export default App;
