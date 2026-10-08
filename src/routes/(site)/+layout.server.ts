import type { Footer } from '#lib/content.ts';
import { getEntry } from '#lib/server/content.ts';

export function load() {
	return { footer: getEntry<Footer>('site', 'footer') };
}
