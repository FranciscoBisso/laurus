import { useState } from "react";
import styles from "./home.module.css";
import IntroSection from "../../components/introSection/IntroSection";
import PurposeSection from "../../components/purposeSection/PurposeSection";
import VideoSection from "../../components/videoSection/VideoSection";
import ConclusionSection from "../../components/conclusionSection/ConclusionSection";
import ContactSection from "../../components/contactSection/ContactSection";
import Footer from "../../components/footer/Footer";

export default function Home() {
	const [lang, setLang] = useState(true);
	const handleLang = () => {
		setLang(!lang);
	};

	return (
		<div className={styles.home_wrapper}>
			<button
				className={styles.txt_wrapper}
				tabIndex={0}
				onClick={handleLang}>
				<p className={styles.txt}>{lang ? "ES" : "EN"}</p>
			</button>
			<IntroSection />
			<PurposeSection lang={lang} />
			<VideoSection lang={lang} />
			<ConclusionSection lang={lang} />
			<ContactSection lang={lang} />
			<Footer />
		</div>
	);
}
