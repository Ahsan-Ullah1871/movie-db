import React from "react";
import Image from "next/image";
import CustomLink from "../link/CustomLink";

const OOPS = ({
	message_style,
	spacial_text,
	message,
	image_style,
	isShowHomeBtn,
	children,
}) => {
	return (
		<div className=" max-w-lg mx-auto  flex flex-col items-center justify-center py-40">
			<Image
				src={"/image/oops.png"}
				alt="error"
				width={320}
				height={320}
				className={[" max-w-xs ", image_style].join(" ")}
			/>

			<h1
				className={[
					" text-4xl font-bold text-center mt-4",
					message_style,
				].join(" ")}
			>
				<span className=" text-[#F6CC01]">
					{spacial_text}
				</span>{" "}
				{message}
			</h1>

			{children}
		</div>
	);
};

export default OOPS;

