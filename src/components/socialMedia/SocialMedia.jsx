import PropTypes from "prop-types";
import {
	RiTwitterXLine,
	RiMailSendLine,
	RiInstagramLine,
	RiLinkedinLine,
} from "react-icons/ri";

export default function SocialMedia({ props }) {
	return (
		<>
			<nav className={props?.styles?.link_wrapper}>
				<a
					className={props?.styles?.link}
					href="http://twitter.com/laurusag"
					target="_blank"
					rel="noopener noreferrer">
					<RiTwitterXLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					href="mailto:nicolas@laurusag.tech"
					target="_blank"
					rel="noopener noreferrer">
					<RiMailSendLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					href="http://instagram.com/laurus.ag"
					target="_blank"
					rel="noopener noreferrer">
					<RiInstagramLine className={props?.styles?.link_icon} />
				</a>

				<a
					className={props?.styles?.link}
					href="https://www.linkedin.com/company/laurus-ag/"
					target="_blank"
					rel="noopener noreferrer">
					<RiLinkedinLine className={props?.styles?.link_icon} />
				</a>
			</nav>
		</>
	);
}

SocialMedia.propTypes = {
	props: PropTypes.object,
	styles: PropTypes.object,
};
