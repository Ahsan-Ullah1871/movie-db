import Link from "next/link";
import ALink from "../ui/ALink";

const CustomLink = ({ children, href, className }) => {
	return (
		<ALink
			className={className}
			href={href}
		>
			{children}
		</ALink>
	);
};

export default CustomLink;

