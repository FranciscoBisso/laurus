import PropTypes from "prop-types";
import Card from "../card/Card";

export default function CardsStack({ props }) {
	const cards = [
		{
			title: "What we do",
			paragraph:
				"Laurus reimagines urban agriculture and provides an efficient and sustainable way to deliver hyper-local, fresh and affordable food to people in cities.",
		},
		{
			title: "How we do it",
			paragraph:
				"With our automated inflatable farms, designed to utilize idle spaces in cities, such as rooftops and parking lots, we enable cultivation regardless of the season and weather.",
		},
		{
			title: "What we achieve",
			paragraph:
				"Fresh food for everyone. Thanks to our technology, we can provide high-quality food at affordable prices, strengthening food systems and delivering nutritious food to everyone, regardless of where they live or how much they earn.",
		},
	];
	return (
		<div className={props?.styles?.cards_wrapper}>
			{cards?.map((card, index) => (
				<Card
					key={index}
					props={{ card, ...props }}
				/>
			))}
		</div>
	);
}

CardsStack.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
};
