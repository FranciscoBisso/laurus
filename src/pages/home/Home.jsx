import { lazy, Suspense } from "react";
import styles from "./home.module.css";
import IntroSkeleton from "../../components/introSection/IntroSkeleton";
import PurposeSkeleton from "../../components/purposeSection/PurposeSkeleton";

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

const Spinner = lazy(() => import("../../components/spiner/spinner"));

export default function Home() {
	return (
		<div className={styles.home_wrapper}>
			<Suspense fallback={<IntroSkeleton />}>
				<IntroSection />
			</Suspense>

			<Suspense fallback={<PurposeSkeleton />}>
				<PurposeSection />
			</Suspense>

			<Suspense fallback={<Spinner />}>
				<VideoSection />
			</Suspense>

			<Suspense fallback={<Spinner />}>
				<ConclusionSection />
			</Suspense>

			<Suspense fallback={<Spinner />}>
				<ContactSection />
			</Suspense>

			<Suspense fallback={<Spinner />}>
				<Footer />
			</Suspense>
		</div>
	);
}
