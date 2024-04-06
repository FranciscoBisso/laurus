import { lazy, Suspense } from "react";
import styles from "./home.module.css";

import Loader from "../../components/loader/Loader";
const IntroSkeleton = lazy(() =>
	import("../../components/introSection/skeleton/IntroSkeleton")
);
const PurposeSkeleton = lazy(() =>
	import("../../components/purposeSection/skeleton/PurposeSkeleton")
);
const VideoSkeleton = lazy(() =>
	import("../../components/videoSection/skeleton/VideoSkeleton")
);
const ConclusionSkeleton = lazy(() =>
	import("../../components/conclusionSection/skeleton/ConclusionSkeleton")
);
const ContactSkeleton = lazy(() =>
	import("../../components/contactSection/skeleton/ContactSkeleton")
);
const Spinner = lazy(() => import("../../components/spinner/Spinner"));

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
			</Suspense>
		</div>
	);
}
