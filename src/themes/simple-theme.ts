import type { GenericTheme, Hex, ThemeMode } from "./generic-theme";

export interface SimpleThemeMeta {
	name: string;
	mode: ThemeMode;
}

export interface SimpleThemeColors {
	primary: Hex;
	secondary: Hex;
	canvas: {
		primary: { background: Hex; foreground: Hex };
		secondary: { background: Hex; foreground: Hex };
	};
}

export interface SimpleTheme {
	meta: SimpleThemeMeta;
	colors: SimpleThemeColors;
}

export function mapToSimpleTheme(theme: GenericTheme): SimpleTheme {
	return {
		meta: { name: theme.meta.name, mode: theme.meta.mode },
		colors: {
			primary: theme.brand.primary,
			secondary: theme.text.secondary,
			canvas: {
				primary: {
					background: theme.surfaces.canvas,
					foreground: theme.text.primary,
				},
				secondary: {
					background: theme.surfaces.sunken,
					foreground: theme.text.secondary,
				},
			},
		},
	};
}