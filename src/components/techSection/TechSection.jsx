import NavBar from "../navBar/NavBar";
import styles from "./techSection.module.css";
import poster from "../../assets/videos/videoframe.webp";
import demo_480 from "../../assets/videos/short_demo_480.webm";
import demo_720 from "../../assets/videos/short_demo_720.webm";
import demo_1080 from "../../assets/videos/short_demo_1080.webm";
import demo from "../../assets/videos/short_demo_original.webm";

export default function TechSection() {
	return (
		<section
			id="tech"
			className={styles.tech_section}>
			<video
				loading="lazy"
				className={styles.video}
				poster={poster}
				playsInline
				loop
				autoPlay
				muted>
				<source
					src={demo_480}
					media="(max-width: 500px)"
					type="video/webm"
				/>
				<source
					src={demo_720}
					media="(max-width: 1024px)"
					type="video/webm"
				/>
				<source
					src={demo_1080}
					media="(max-width: 1368px)"
					type="video/webm"
				/>
				<source
					src={demo}
					type="video/webm"
				/>
			</video>
			<NavBar props={{ styles }} />
		</section>
	);
}
