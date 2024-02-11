import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export default function MetaTags({ props }) {
	return (
		<Helmet>
			{/* Standard tags */}
			<title>{props.title}</title>
			<link
				rel="canonical"
				href="https://www.laurusag.tech"
			/>
			<meta
				itemProp="url"
				content="https://www.laurusag.tech"
			/>
			<meta
				name="description"
				content={props.description}
			/>
			<link
				rel="icon"
				type="image/x-icon"
				href="../../assets/imgs/brand/bgless_half_arch.webp"
			/>
			{/* Facebook's tags */}
			<meta
				property="og:type"
				content="website"
			/>
			<meta
				property="og:title"
				content={props.title}
			/>
			<meta
				property="og:description"
				content={props.description}
			/>
			<meta
				property="og:image"
				content="../../assets/imgs/laurus.webp"
			/>

			{/* Twitter's tags */}
			<meta
				name="twitter:creator"
				content="Laurus"
			/>
			<meta
				name="twitter:card"
				content="website"
			/>
			<meta
				name="twitter:title"
				content={props.title}
			/>
			<meta
				name="twitter:description"
				content={props.description}
			/>
			<meta
				property="twitter:image"
				content="../../assets/imgs/laurus.webp"
			/>
		</Helmet>
	);
}

MetaTags.propTypes = {
	props: PropTypes.object,
	title: PropTypes.string,
	description: PropTypes.string,
};
