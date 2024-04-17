import MovieDetailsPage from "@/containers/movieDetails/MovieDetailsPage";
import React from "react";

const page = async ({ params }) => {
	return <MovieDetailsPage params={params} />;
};

export default page;

