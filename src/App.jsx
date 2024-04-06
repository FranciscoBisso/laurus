import { lazy, Suspense } from "react";
import styles from "./app.module.css";
import Loader from "./components/loader/Loader";
const Home = lazy(() => import("./pages/home/Home"));

function App() {
	return (
		<>
			<main className={styles.main}>
				<Suspense fallback={<Loader />}>
					<Home />
				</Suspense>
			</main>
		</>
	);
}

export default App;
