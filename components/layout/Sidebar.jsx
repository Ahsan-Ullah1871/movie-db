import Image from "next/image";
import Link from "next/link";
import React from "react";
import ALink from "../ui/ALink";

const Sidebar = ({ dict }) => {
	return (
		<aside>
			<ul class="space-y-2">
				<li>
					<ALink
						class="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
						href="/"
					>
						<Image
							src="/image/icons/trending.svg"
							width="24"
							height="24"
							alt="Logo"
						/>
						<span>{dict.sidebar.trending}</span>
					</ALink>
				</li>
				<li>
					<ALink class="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
						<Image
							src="/image/icons/newRelease.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>
							{dict.sidebar.new_release}
						</span>
					</ALink>
				</li>
				<li>
					<ALink class="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
						<Image
							src="/image/icons/commingSoon.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>
							{dict.sidebar.coming_soon}
						</span>
					</ALink>
				</li>
				<li>
					<ALink class="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
						<Image
							src="/image/icons/favourite.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span> {dict.sidebar.favorites}</span>
					</ALink>
				</li>
				<li>
					<ALink class="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
						<Image
							src="/image/icons/watchLater.svg"
							width="24"
							height="24"
							alt=""
						/>
						<span>
							{dict.sidebar.watch_later}
						</span>
					</ALink>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;

