import PropTypes from "prop-types";

export default function Card({ props }) {
	return (
		<article className={props?.styles?.card}>
			<h4 className={props?.styles?.card_header}>{props?.card?.title}</h4>
			<p className={props?.styles?.card_text}>{props?.card?.paragraph}</p>
		</article>
	);
}

Card.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
	card: PropTypes.object,
};
