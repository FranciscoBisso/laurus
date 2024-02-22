import PropTypes from "prop-types";

export default function FooterContent({ props }) {
	return (
		<div className={props?.styles?.footer_wrapper}>
			<span className={props?.styles?.txt}>
				San Martín, 750, Buenos Aires, CABA 1004 Copyright © 2024 LA
				Tech S.A.
			</span>
		</div>
	);
}

FooterContent.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
};
