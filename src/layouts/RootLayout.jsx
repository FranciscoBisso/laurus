import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";
import styles from "./rootLayout.module.css";

import Helmet from "../components/helmet/Helmet";
import NavBar from "../components/navBar/NavBar";

const Fallback = lazy(() => import("../components/fallback/Fallback"));
export default function RootLayout() {
	return (
		<>
			<Helmet
				props={{
					title: "Laurus",
					description:
						"At Laurus, our mission is to reinvent urban farming and provide a sustainable way of offering hyper-local, fresh and affordable food to people in cities.",
				}}
			/>

			<header className={styles.header}>
				<NavBar />
			</header>

			<main className={styles.main}>
				<Suspense fallback={<Fallback />}>
					<Outlet />
				</Suspense>
			</main>
			<footer className={styles.footer}>
				<div className={styles.txt_wrapper}>
					<span className={styles.address}>
						San Martín, 750, Buenos Aires, CABA 1004
					</span>
				</div>
			</footer>
		</>
	);
}
