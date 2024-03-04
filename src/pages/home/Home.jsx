import styles from "./home.module.css";
import Hero from "../../components/hero/Hero";
import Purpose from "../../components/purpose/Purpose";
import Multimedia from "../../components/multimedia/Multimedia";
import Slider from "../../components/slider/Slider";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			<Hero />

			<Purpose />

			<Multimedia />

			<Slider />

			<Contact />

			<Footer />
		</div>
	);
}
