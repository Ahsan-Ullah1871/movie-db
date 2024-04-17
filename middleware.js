import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let defaultLocale = "en";
let locales = ["en", "bn"];

function getLocale(request) {
	const acceptedLanguage =
		request.headers.get("accept-language") ?? undefined;
	const headers = { "accept-language": acceptedLanguage };
	const languages = new Negotiator({ headers }).languages();

	return match(languages, locales, defaultLocale); // en or bn
}

export function middleware(request) {
	// get the pathname from request url
	const pathname = request.nextUrl.pathname;

	const pathNameIsMissingLocale = locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}`) &&
			!pathname.startsWith(`/${locale}/`)
	);

	// response
	const response = NextResponse.next();

	if (pathNameIsMissingLocale) {
		// detect user's preference & redirect with a locale with a path eg: /en/about
		const is_available_in_cookie = request.cookies.has("locale");

		const locale = is_available_in_cookie
			? request.cookies.get("locale")
			: getLocale(request);

		response.cookies.set({
			name: "locale",
			value: locale,
			path: "*",
		});

		const cookie = response.cookies.get("locale");
		console.log({ cookie });

		return NextResponse.redirect(
			new URL(`/${locale}/${pathname}`, request.url)
		);
	}

	return response;
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico|image).*)"],
};

