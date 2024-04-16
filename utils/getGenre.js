import "server-only";

const data = (id) =>
	import("@/data/GenreIDS.json").then((module) => module.default[id]);

export const getGenre = async (id) => data(id);

