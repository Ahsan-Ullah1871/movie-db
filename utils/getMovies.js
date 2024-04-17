import "server-only";

const data = () =>
	import("@/data/MovieData.json").then((module) => module.default.results);

export const getMovies = async () => data();

