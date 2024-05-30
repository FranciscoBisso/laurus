import styles from "./home.module.css";
import IntroSection from "../../components/introSection/IntroSection";
import PurposeSection from "../../components/purposeSection/PurposeSection";
import VideoSection from "../../components/videoSection/VideoSection";
import ConclusionSection from "../../components/conclusionSection/ConclusionSection";
import ContactSection from "../../components/contactSection/ContactSection";
import Footer from "../../components/footer/Footer";

export default function Home(props) {
	return (
		<div className={styles.home_wrapper}>
			<IntroSection />
			<PurposeSection lang={props?.lang} />
			<VideoSection lang={props?.lang} />
			<ConclusionSection lang={props?.lang} />
			<ContactSection lang={props?.lang} />
			<Footer />
		</div>
	);
}
