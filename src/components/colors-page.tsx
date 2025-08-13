import { getColorCategories } from "../themes/color-categories.ts";
import type { GenericTheme } from "../themes/generic-theme.ts";

interface ColorsPageProps {
	theme: GenericTheme;
}

export function ColorsPage({ theme }: ColorsPageProps) {
	const colors = getColorCategories(theme);

	return (
		<div className="flex flex-col gap-4">
			<ColorItem label="Primary" color={colors.primary} />
			<ColorItem label="Secondary" color={colors.secondary} />
			<ColorItem label="Canvas Foreground" color={colors.canvas.foreground} />
			<ColorItem label="Canvas Background" color={colors.canvas.background} />
		</div>
	);
}

function ColorItem({ label, color }: { label: string; color: string }) {
	return (
		<div className="flex items-center gap-4">
			<div className="h-8 w-8 rounded" style={{ backgroundColor: color }} />
			<span className="font-mono">
				{label}: {color}
			</span>
		</div>
	);
}
