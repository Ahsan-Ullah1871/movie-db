import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import React from "react";

const MainLayout = ({ children, dict }) => {
	return (
		<>
			<Header />
			<main>
				<div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
					<Sidebar dict={dict} />
					{children}
				</div>
			</main>
			<Footer dict={dict} />
		</>
	);
};

export default MainLayout;

