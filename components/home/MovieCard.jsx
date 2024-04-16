import { getGenre } from "@/utils/getGenre";
import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
	const {
		adult,
		backdrop_path,
		genre_ids,
		id,
		original_language,
		original_title,
		overview,
		popularity,
		poster_path,
		release_date,
		title,
		video,
		vote_average,
		vote_count,
	} = movie || {};

	// genres
	const genres = genre_ids?.map(async (g_id, index, array) => {
		const genre = await getGenre(g_id);
		return `${genre}${index === array.length - 1 ? "" : "/"}`;
	});

	return (
		<figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
			<Image
				class="w-full   object-cover"
				src={poster_path}
				alt={title}
				height={300}
				width={300}
			/>
			<figcaption class="pt-4">
				<h3 class="text-xl mb-1">{title}</h3>
				<p class="text-[#575A6E] text-sm mb-2">{genres}</p>
				<div class="flex items-center space-x-1 mb-5">
					<img
						src="/star.svg"
						width="14"
						height="14"
						alt=""
					/>
					<img
						src="/star.svg"
						width="14"
						height="14"
						alt=""
					/>
					<img
						src="/star.svg"
						width="14"
						height="14"
						alt=""
					/>
					<img
						src="/star.svg"
						width="14"
						height="14"
						alt=""
					/>
					<img
						src="/star.svg"
						width="14"
						height="14"
						alt=""
					/>
				</div>
				<a
					class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
					href="./modal.html"
				>
					<img
						src="/tag.svg"
						alt=""
					/>
					<span>Details</span>
				</a>
			</figcaption>
		</figure>
	);
};

export default MovieCard;

