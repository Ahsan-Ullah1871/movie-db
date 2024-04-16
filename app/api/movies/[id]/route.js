import { movieList } from "@/data/data";

// Get request for single movie
export async function GET(request, { params }) {
	const id = params.id;
	// find data by id
	const data = movieList.results.find((item) => item.id == id);

	// error return if not found
	if (data === undefined) {
		const body = JSON.stringify({
			error: "Movie not found",
		});
		return new Response(body, {
			status: 404,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	// data return
	return Response.json(data);
}

// Patch request for update movie
export async function PATCH(request, { params }) {
	const id = params.id;
	const body = await request.json();

	// find data by id
	const data = movieList.results.find((item) => item.id == id);

	// error return if not found
	if (data === undefined) {
		const body = JSON.stringify({
			error: "Movie not found",
		});
		return new Response(body, {
			status: 404,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	// update data
	data.title = body.title;
	// data.overview = body.overview;
	// data.poster_path = body.poster_path;

	// update main db data
	movieList.results = movieList.results.map((item) => {
		if (item.id == id) {
			return data;
		} else {
			return item;
		}
	});

	// data return
	return Response.json(data);
}

// delete request for delete movie
export async function DELETE(request, { params }) {
	const id = params.id;

	// find data by id
	const data = movieList.results.find((item) => item.id == id);

	// error return if not found
	if (data === undefined) {
		const body = JSON.stringify({
			error: "Movie not found",
		});
		return new Response(body, {
			status: 404,
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	// delete data
	movieList.results = movieList.results.filter((item) => item.id != id);

	// data return
	return Response.json(data);
}
