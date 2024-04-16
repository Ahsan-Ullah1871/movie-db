import MovieCard from "@/components/home/MovieCard";
import { getMovies } from "@/utils/getMovies";
import React from "react";

const HomePage = async () => {
	const movies = await getMovies(); // en

	return (
		<div class="content">
			<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
				{movies?.map((movie) => (
					<MovieCard
						movie={movie}
						key={movie.id}
					/>
				))}
			</div>
		</div>
	);
};

export default HomePage;

