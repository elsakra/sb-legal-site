declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">;
  render(): Render[".md"];
}>;
"case-results": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "case-results";
  data: InferEntrySchema<"case-results">;
  render(): Render[".md"];
}>;
"faq": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "faq";
  data: InferEntrySchema<"faq">;
  render(): Render[".md"];
}>;
"services": {
"athletes-entertainers-artists.md": {
	id: "athletes-entertainers-artists.md";
  slug: "athletes-entertainers-artists";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"bia-appeals.md": {
	id: "bia-appeals.md";
  slug: "bia-appeals";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"burglary-robbery.md": {
	id: "burglary-robbery.md";
  slug: "burglary-robbery";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"business-investor-employment-visas.md": {
	id: "business-investor-employment-visas.md";
  slug: "business-investor-employment-visas";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"cancellation-of-removal.md": {
	id: "cancellation-of-removal.md";
  slug: "cancellation-of-removal";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"child-abuse-victims.md": {
	id: "child-abuse-victims.md";
  slug: "child-abuse-victims";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"circuit-court-appeals-petitions.md": {
	id: "circuit-court-appeals-petitions.md";
  slug: "circuit-court-appeals-petitions";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"criminal-defense.md": {
	id: "criminal-defense.md";
  slug: "criminal-defense";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"deportation-removal-defense.md": {
	id: "deportation-removal-defense.md";
  slug: "deportation-removal-defense";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"domestic-violence.md": {
	id: "domestic-violence.md";
  slug: "domestic-violence";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"dui-dwi-defense.md": {
	id: "dui-dwi-defense.md";
  slug: "dui-dwi-defense";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"expungement.md": {
	id: "expungement.md";
  slug: "expungement";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"federal-crimes.md": {
	id: "federal-crimes.md";
  slug: "federal-crimes";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"fraud-forgery-identity-theft.md": {
	id: "fraud-forgery-identity-theft.md";
  slug: "fraud-forgery-identity-theft";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"green-cards-permanent-resident-status.md": {
	id: "green-cards-permanent-resident-status.md";
  slug: "green-cards-permanent-resident-status";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"gun-charges.md": {
	id: "gun-charges.md";
  slug: "gun-charges";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"homicide-assault-battery.md": {
	id: "homicide-assault-battery.md";
  slug: "homicide-assault-battery";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"immigration.md": {
	id: "immigration.md";
  slug: "immigration";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"jail-release-bail-issues.md": {
	id: "jail-release-bail-issues.md";
  slug: "jail-release-bail-issues";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"lawsuits-challenge-prolonged-detention.md": {
	id: "lawsuits-challenge-prolonged-detention.md";
  slug: "lawsuits-challenge-prolonged-detention";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"probation-parole-violations.md": {
	id: "probation-parole-violations.md";
  slug: "probation-parole-violations";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"release-from-detention.md": {
	id: "release-from-detention.md";
  slug: "release-from-detention";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"sex-crimes-child-abuse.md": {
	id: "sex-crimes-child-abuse.md";
  slug: "sex-crimes-child-abuse";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"students-interns-trainees.md": {
	id: "students-interns-trainees.md";
  slug: "students-interns-trainees";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"white-collar-crime.md": {
	id: "white-collar-crime.md";
  slug: "white-collar-crime";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
"work-permits-labor-certifications.md": {
	id: "work-permits-labor-certifications.md";
  slug: "work-permits-labor-certifications";
  body: string;
  collection: "services";
  data: InferEntrySchema<"services">
} & { render(): Render[".md"] };
};
"team": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "team";
  data: InferEntrySchema<"team">;
  render(): Render[".md"];
}>;
"testimonials": Record<string, {
  id: string;
  slug: string;
  body: string;
  collection: "testimonials";
  data: InferEntrySchema<"testimonials">;
  render(): Render[".md"];
}>;

	};

	type DataEntryMap = {
		"athletics": Record<string, {
  id: string;
  collection: "athletics";
  data: any;
}>;
"events": Record<string, {
  id: string;
  collection: "events";
  data: any;
}>;
"faculty": Record<string, {
  id: string;
  collection: "faculty";
  data: any;
}>;
"industries": Record<string, {
  id: string;
  collection: "industries";
  data: any;
}>;
"insights": Record<string, {
  id: string;
  collection: "insights";
  data: any;
}>;
"listings": Record<string, {
  id: string;
  collection: "listings";
  data: any;
}>;
"locations": Record<string, {
  id: string;
  collection: "locations";
  data: any;
}>;
"menu": Record<string, {
  id: string;
  collection: "menu";
  data: any;
}>;
"news": Record<string, {
  id: string;
  collection: "news";
  data: any;
}>;
"portfolio": Record<string, {
  id: string;
  collection: "portfolio";
  data: any;
}>;
"pricing-plans": Record<string, {
  id: string;
  collection: "pricing-plans";
  data: any;
}>;
"products": Record<string, {
  id: string;
  collection: "products";
  data: any;
}>;
"programs": Record<string, {
  id: string;
  collection: "programs";
  data: any;
}>;

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
