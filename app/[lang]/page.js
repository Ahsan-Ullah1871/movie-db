import HomePage from "@/containers/home/HomePage";
import { getDictionary } from "@/utils/dictionaries";
import { getMovies } from "@/utils/getMovies";

export default async function Home({ params }) {
	const dict = await getDictionary(params?.lang ?? "en"); // en
	return (
		<>
			<HomePage dict={dict} />
		</>
	);
}

