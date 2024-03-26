import { lazy, Suspense } from "react";
import styles from "./home.module.css";
import IntroSkeleton from "../../components/introSection/IntroSkeleton";
import PurposeSkeleton from "../../components/purposeSection/PurposeSkeleton";
import VideoSkeleton from "../../components/videoSection/VideoSkeleton";
import ConclusionSkeleton from "../../components/conclusionSection/ConclusionSkeleton";
import ContactSkeleton from "../../components/contactSection/ContactSkeleton";
import Spinner from "../../components/spinner/spinner";

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
			<Suspense fallback={<IntroSkeleton />}>
				<IntroSection />
			</Suspense>

			<Suspense fallback={<PurposeSkeleton />}>
				<PurposeSection />
			</Suspense>

			<Suspense fallback={<VideoSkeleton />}>
				<VideoSection />
			</Suspense>

			<Suspense fallback={<ConclusionSkeleton />}>
				<ConclusionSection />
			</Suspense>

			<Suspense fallback={<ContactSkeleton />}>
				<ContactSection />
			</Suspense>

			<Suspense fallback={<Spinner />}>
				<Footer />
			</Suspense>
		</div>
	);
}
