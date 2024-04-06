import { lazy, Suspense } from "react";
import styles from "./home.module.css";

import Loader from "../../components/loader/Loader";
const IntroSkeleton = lazy(() =>
	import("../../components/introSection/skeleton/IntroSkeleton")
);
const IntroSection = lazy(() =>
	import("../../components/introSection/IntroSection")
);
const PurposeSkeleton = lazy(() =>
	import("../../components/purposeSection/skeleton/PurposeSkeleton")
);
const PurposeSection = lazy(() =>
	import("../../components/purposeSection/PurposeSection")
);
const VideoSkeleton = lazy(() =>
	import("../../components/videoSection/skeleton/VideoSkeleton")
);
const VideoSection = lazy(() =>
	import("../../components/videoSection/VideoSection")
);
const ConclusionSkeleton = lazy(() =>
	import("../../components/conclusionSection/skeleton/ConclusionSkeleton")
);
const ConclusionSection = lazy(() =>
	import("../../components/conclusionSection/ConclusionSection")
);
const ContactSkeleton = lazy(() =>
	import("../../components/contactSection/skeleton/ContactSkeleton")
);
const ContactSection = lazy(() =>
	import("../../components/contactSection/ContactSection")
);
const Footer = lazy(() => import("../../components/footer/Footer"));
const Spinner = lazy(() => import("../../components/spinner/Spinner"));

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
