import Link from "next/link";

const CustomLink = ({ children, href, className }) => {
	return (
		<Link
			className={className}
			href={href}
		>
			{children}
		</Link>
	);
};

export default CustomLink;

