import "server-only";

const dictionaries = {
	en: () =>
		import("@/data/dictionaries/en.json").then(
			(module) => module.default
		),
	bn: () =>
		import("@/data/dictionaries/bn.json").then(
			(module) => module.default
		),
};

export const getDictionary = async (locale) => {
	return ["en", "bn"].includes(locale)
		? dictionaries[locale ? locale : "en"]()
		: dictionaries.en();
};

