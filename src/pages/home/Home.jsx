import { lazy, Suspense } from "react";
import styles from "./home.module.css";

import Loader from "../../components/loader/Loader";

const IntroSection = lazy(() =>
	import("../../components/introSection/IntroSection")
);

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
			<Suspense fallback={<Loader />}>
				<IntroSection />
				<PurposeSection />
				<VideoSection />
				<ConclusionSection />
				<ContactSection />
				<Footer />
			</Suspense>
		</div>
	);
}
