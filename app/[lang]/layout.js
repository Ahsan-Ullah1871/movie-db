import MainLayout from "@/containers/layout/MainLayout";
import { getDictionary } from "@/utils/dictionaries";

export default async function RootLayout({ children, modal, params }) {
	const dict = await getDictionary(params?.lang ?? "en"); // en

	return (
		<MainLayout dict={dict}>
			{modal}
			{children}
		</MainLayout>
	);
}

