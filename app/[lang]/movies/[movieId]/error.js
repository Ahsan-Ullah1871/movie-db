"use client";
import OOPS from "@/components/errors/OOPS";
import CustomLink from "@/components/link/CustomLink";
import { useParams } from "next/navigation";
import React from "react";

const PageNotFound = ({ error }) => {
	const { movieId, lang } = useParams();

	return (
		<OOPS
			message={
				lang === "bn"
					? `এই মুভি এর সাথে ${
							movieId ?? ""
					  } আইডি পাওয়া যায়নি!`
					: `This movie with ${
							movieId ?? ""
					  } id was not found!`
			}
			spacial_text={"⚠️"}
			isShowHomeBtn={true}
		>
			<CustomLink
				href={"/"}
				className="w-full   bg-primary hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full duration-300"
			>
				{lang === "bn"
					? "ট্রেডিং এ ফিরুন"
					: "Go To Trending"}
			</CustomLink>
		</OOPS>
	);
};

export default PageNotFound;

