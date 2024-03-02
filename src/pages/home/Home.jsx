import IntroSection from "../../components/introSection/IntroSection";
import PurposeSection from "../../components/purposeSection/purposeSection";
import TechSection from "../../components/techSection/TechSection";
import ContactSection from "../../components/contactSection/ContactSection";
import styles from "./home.module.css";

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			<IntroSection />

			{/* PURPOSE SECTION */}
			<PurposeSection />

			{/* VIDEO SECTION */}
			<TechSection />

			{/* CONTACT US SECTION */}
			<ContactSection />
		</div>
	);
}
