"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

const ALink = ({ href, children, ...props }) => {
	const router = useRouter();
	const params = useParams();
	const pathname = usePathname();
	const lang = params?.lang ?? "en";

	return (
		<Link
			href={{
				pathname: `/${lang}${href ?? "/"}`,
			}}
			{...props}
		>
			{children}
		</Link>
	);
};

export default ALink;

