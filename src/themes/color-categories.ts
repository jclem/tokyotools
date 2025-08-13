import type { GenericTheme } from "./generic-theme.ts";

export interface ColorCategories {
	primary: string;
	secondary: string;
	canvas: {
		foreground: string;
		background: string;
	};
}

export function getColorCategories(theme: GenericTheme): ColorCategories {
	return {
		primary: theme.brand.primary,
		secondary: theme.text.secondary,
		canvas: {
			foreground: theme.text.primary,
			background: theme.surfaces.canvas,
		},
	};
}
