import styles from "./app.module.css";
import Helmet from "./components/helmet/Helmet";
import SocialMedia from "./components/socialMedia/SocialMedia";

import Home from "./pages/home/Home";

function App() {
	return (
		<>
			<Helmet
				props={{
					title: "Laurus",
					description:
						"At Laurus, our mission is to reinvent urban farming and provide a sustainable way of offering hyper-local, fresh and affordable food to people in cities.",
				}}
			/>

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
