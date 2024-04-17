"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

const LanguageSwitch = () => {
	const router = useRouter();
	const params = useParams();
	const pathname = usePathname();
	const lang = params?.lang
		? ["en", "bn"].includes(params?.lang)
			? params?.lang
			: "en"
		: "en";

	console.log(pathname);
	// pathname change with selected lang
	const handleLangChange = (lang) => {
		const update_pathname = pathname.replace(`/${params?.lang}`, "");
		console.log(
			{ update_pathname, pathname },
			`/${lang == "bn" ? "en" : "bn"}`
		);
		router.replace(`/${lang}/${update_pathname}`);
	};

	return (
		<div>
			{lang !== "bn" && (
				<button
					className="flex items-center justify-start  gap-2 hover:bg-white bg-transparent hover:bg-opacity-10 p-2 rounded-sm "
					onClick={() => handleLangChange("bn")}
				>
					<Image
						src={"/image/bd.png"}
						height={24}
						width={24}
					/>
					BN
				</button>
			)}
			{lang !== "en" && (
				<button
					className="flex items-center justify-start  gap-2 hover:bg-white bg-transparent hover:bg-opacity-10 p-2 rounded-sm "
					onClick={() => handleLangChange("en")}
				>
					<Image
						src={"/image/en.png"}
						height={24}
						width={24}
					/>
					EN
				</button>
			)}
		</div>
	);
};

export default LanguageSwitch;

