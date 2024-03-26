import styles from "./purposeSkeleton.module.css";
export default function PurposeSection() {
	const cards = [
		{
			title: "What we do",
			txt: "We reinvent urban agriculture by providing a sustainable and efficient way to deliver hyper-local, nutritious and affordable food to people in cities.",
		},
		{
			title: "How we do it",
			txt: "Our automated inflatable farms, designed to utilize idle spaces in cities, enable cultivation regardless of the season and weather.",
		},
		{
			title: "What we achieve",
			txt: "Our farms can provide fresh and premium food at affordable prices to anyone, regardless of where they live or how much they earn.",
		},
	];

	return (
		<section
			className={styles.purpose_section}
			tabIndex={0}>
			<div className={styles.filter}></div>
			<div className={styles.wrapper}>
				<div className={styles.frame}>
					<div
						width="100%"
						height="100%"
						className={styles.img}></div>
				</div>

				{cards?.map((card, index) => (
					<article
						className={styles.card}
						key={index}>
						<div className={styles.card_txt_wrapper}>
							<h2 className={styles.card_title}>{card.title}</h2>
							<p className={styles.card_txt}>{card.txt}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
