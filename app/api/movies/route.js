import { movieList } from "@/data/data";

export async function GET(request) {
	const searchParams = request.nextUrl.searchParams;
	const data = movieList.results;
	const page = searchParams.get("page") ?? 1;
	const per_page = searchParams.get("per_page") ?? data?.length;

	// split data by page and per_page
	const pageData = data.slice((page - 1) * per_page, page * per_page);

	return Response.json({
		data: pageData,
		meta_data: {
			total_results: data?.length,
			current_page: Number(page),
			per_page: Number(per_page),
			total_pages: Math.ceil(data?.length / per_page),
		},
	});
}

