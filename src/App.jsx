import styles from "./app.module.css";
import Home from "./pages/home/Home";
import FooterContent from "./components/footer/FooterContent";

function App() {
	return (
		<>
			<main className={styles.main}>
				<Home />
			</main>
			<footer className={styles.footer}>
				<FooterContent props={{ styles }} />
			</footer>
		</>
	);
}

export default App;
