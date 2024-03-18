import { lazy, Suspense } from "react";
import styles from "./home.module.css";
import IntroSection from "../../components/introSection/IntroSection";
// import PurposeSection from "../../components/purposeSection/PurposeSection";
// import VideoSection from "../../components/videoSection/VideoSection";
// import ConclusionSection from "../../components/conclusionSection/ConclusionSection";
// import ContactSection from "../../components/contactSection/ContactSection";
// import Footer from "../../components/footer/Footer";

const PurposeSection = lazy(() =>
	import("../../components/purposeSection/PurposeSection")
);
const VideoSection = lazy(() =>
	import("../../components/videoSection/VideoSection")
);
const ConclusionSection = lazy(() =>
	import("../../components/conclusionSection/ConclusionSection")
);
const ContactSection = lazy(() =>
	import("../../components/contactSection/ContactSection")
);
const Footer = lazy(() => import("../../components/footer/Footer"));

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			<IntroSection />

			<Suspense fallback={<h4>Loading...</h4>}>
				<PurposeSection />
			</Suspense>

			<Suspense fallback={<h4>Loading...</h4>}>
				<VideoSection />
			</Suspense>

			<Suspense fallback={<h4>Loading...</h4>}>
				<ConclusionSection />
			</Suspense>

			<Suspense fallback={<h4>Loading...</h4>}>
				<ContactSection />
			</Suspense>

			<Suspense fallback={<h4>Loading...</h4>}>
				<Footer />
			</Suspense>
		</div>
	);
}
