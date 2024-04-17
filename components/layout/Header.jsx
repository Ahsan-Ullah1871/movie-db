import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitch from "./LanguageSwitch";
import ALink from "../ui/ALink";

const Header = () => {
	return (
		<header>
			<nav class="container flex items-center justify-between space-x-10 py-6">
				<ALink href="/">
					<Image
						src="/image/logo.svg"
						width="139"
						height="26"
						alt=""
					/>
				</ALink>

				<ul class="flex items-center space-x-5">
					<li>
						<LanguageSwitch />
					</li>
					<li>
						<a
							class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							href="#"
						>
							<Image
								src="/image/ring.svg"
								width="24"
								height="24"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a
							class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							href="#"
						>
							<Image
								src="/image/icons/sun.svg"
								width="24"
								height="24"
								alt=""
							/>
						</a>
					</li>
					<li>
						<a
							class="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
							href="#"
						>
							<Image
								src="/image/shopping-cart.svg"
								width="24"
								height="24"
								alt=""
							/>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

