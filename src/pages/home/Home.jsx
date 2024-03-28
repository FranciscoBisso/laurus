import { lazy, Suspense } from "react";
import styles from "./home.module.css";

import IntroSkeleton from "../../components/introSection/IntroSkeleton";
const IntroSection = lazy(() =>
	import("../../components/introSection/IntroSection")
);

const PurposeSkeleton = lazy(() =>
	import("../../components/purposeSection/PurposeSkeleton")
);
const PurposeSection = lazy(() =>
	import("../../components/purposeSection/PurposeSection")
);

const VideoSkeleton = lazy(() =>
	import("../../components/videoSection/VideoSkeleton")
);
const VideoSection = lazy(() =>
	import("../../components/videoSection/VideoSection")
);

const ConclusionSkeleton = lazy(() =>
	import("../../components/conclusionSection/ConclusionSkeleton")
);
const ConclusionSection = lazy(() =>
	import("../../components/conclusionSection/ConclusionSection")
);

const ContactSkeleton = lazy(() =>
	import("../../components/contactSection/ContactSkeleton")
);
const ContactSection = lazy(() =>
	import("../../components/contactSection/ContactSection")
);

const Spinner = lazy(() => import("../../components/spinner/spinner"));
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
