import { getMovieDetails } from "@/utils/getMovieDetials";
import Image from "next/image";
import React from "react";

const MovieDetailsPage = async ({ params: { movieId } }) => {
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
	} = await getMovieDetails(movieId);
	return (
		<section>
			<div>
				<Image
					class="w-full object-cover max-h-[300px] lg:max-h-[500px]"
					width={1100}
					height={500}
					src={backdrop_path}
					alt=""
				/>
			</div>

			<div class="grid grid-cols-12 py-12 gap-8">
				<div class="col-span-2">
					<Image
						src={poster_path}
						height={300}
						width={300}
						alt=""
					/>
				</div>
				<div class="col-span-8">
					<h2 class="font-bold text-slate-300 text-2xl">
						{title}
					</h2>
					<p class="my-2 text-slate-400 italic">
						{overview}
					</p>
					<ul class="text-slate-300 space-y-2 my-8">
						<li>Release Date : {release_date}</li>
						<li>Average Vote : {vote_average}</li>
						<li>Vote Count : {vote_count}</li>
						<li>Popularity : {popularity}</li>
					</ul>
				</div>
				<div class="col-span-2 space-y-4">
					<button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
						Stream In HD
					</button>
					<button class="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
						Download In HD
					</button>
				</div>
			</div>
		</section>
	);
};

export default MovieDetailsPage;

