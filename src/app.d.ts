// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			/** Shown by the site layout behind the content of the page. */
			backgroundImage?: string;
			/** Shown by the site layout right before the footer. */
			ribbon?: import('#lib/content.ts').Entry<import('#lib/content.ts').Ribbon>;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
