import React from "react";

const Footer = ({ dict }) => {
	return (
		<footer class="py-6 md:py-8 mt-8">
			<div class="container mx-auto">
				<p class="text-center text-sm text-black/30 dark:text-[#EEEEEE]/60">
					{dict.footer.copyright_text}
				</p>
			</div>
		</footer>
	);
};

export default Footer;

