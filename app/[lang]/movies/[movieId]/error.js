"use client";
import OOPS from "@/components/errors/OOPS";
import CustomLink from "@/components/link/CustomLink";
import React from "react";

const PageNotFound = ({ error }) => {
	return (
		<OOPS
			message={
				error.message ??
				"Movie Not Found! Please check the URL and try again."
			}
			spacial_text={"⚠️"}
			isShowHomeBtn={true}
		>
			<CustomLink
				href={"/"}
				className="w-full   bg-primary hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full duration-300"
			>
				Go To Trending
			</CustomLink>
		</OOPS>
	);
};

export default PageNotFound;

