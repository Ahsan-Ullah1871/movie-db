import "server-only";

const data = () =>
	import("@/data/MovieData.json").then((module) => module.default.results);

export const getMovieDetails = async (movieID) => {
	const res = await data();
	const movie = res.find((item) => item.id == movieID);

	// if movie available send data else throw error
	if (movie) {
		return movie;
	} else {
		throw new Error(`This movie with ${movieID} id was not found!`);
	}
};

