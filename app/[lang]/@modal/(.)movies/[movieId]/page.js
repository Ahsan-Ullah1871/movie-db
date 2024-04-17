import Modal from "@/components/ui/Modal";
import MovieDetailsPage from "@/containers/movieDetails/MovieDetailsPage";
import React from "react";

const page = async ({ params }) => {
	return (
		<Modal>
			<MovieDetailsPage params={params} />
		</Modal>
	);
};

export default page;

