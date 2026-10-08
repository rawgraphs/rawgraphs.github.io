import { config } from './config.ts';

type Node = { name: string; label?: string; files?: Node[]; fields?: Node[] };

/**
 * The label of a field in the CMS configuration, used on the site as a section title.
 * The path goes from the collection to the field, e.g. `fieldLabel('pages', 'home', 'features')`.
 */
export function fieldLabel(collection: string, ...path: string[]): string {
	let node = (config.collections as Node[]).find(({ name }) => name === collection);
	for (const step of path) {
		node = [...(node?.files ?? []), ...(node?.fields ?? [])].find(({ name }) => name === step);
	}
	if (!node) throw new Error(`Unknown CMS field: ${[collection, ...path].join('.')}`);
	return node.label ?? node.name;
}
