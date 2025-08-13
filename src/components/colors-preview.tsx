import type { GenericTheme } from "../themes/generic-theme";
import { mapToSimpleTheme } from "../themes/simple-theme";

interface ColorsPreviewProps {
	theme: GenericTheme;
}

export function ColorsPreview({ theme }: ColorsPreviewProps) {
	const simple = mapToSimpleTheme(theme);
	const { primary, secondary, canvas } = simple.colors;

	const swatches: Array<{ label: string; value: string }> = [
		// Core brand/text
		{ label: "Primary", value: primary },
		{ label: "Secondary", value: secondary },
		{ label: "Text Muted", value: theme.text.muted },
		{ label: "Text Disabled", value: theme.text.disabled },
		{ label: "Text Inverse", value: theme.text.inverse },
		{ label: "Link", value: theme.text.link.default },
		{ label: "Link Active", value: theme.text.link.active },

		// Canvas
		{ label: "Canvas Primary Background", value: canvas.primary.background },
		{ label: "Canvas Primary Foreground", value: canvas.primary.foreground },
		{ label: "Canvas Secondary Background", value: canvas.secondary.background },
		{ label: "Canvas Secondary Foreground", value: canvas.secondary.foreground },
		{ label: "Canvas Elevated", value: theme.surfaces.elevated },
		{ label: "Canvas Overlay", value: theme.surfaces.overlay },
		{ label: "Selection", value: theme.surfaces.selection },

		// Borders
		{ label: "Border Subtle", value: theme.border.subtle },
		{ label: "Border", value: theme.border.default },
		{ label: "Border Strong", value: theme.border.strong },
		{ label: "Focus Ring", value: theme.border.focusRing },

		// Brand
		{ label: "Brand Primary Hover", value: theme.brand.primaryHover },
		{ label: "On Brand Primary", value: theme.brand.onPrimary },

		// Inputs
		{ label: "Input Background", value: theme.input.bg },
		{ label: "Input Foreground", value: theme.input.fg },
		{ label: "Input Border", value: theme.input.border },
		{ label: "Input Placeholder", value: theme.input.placeholder },
		{ label: "Input Option Active BG", value: theme.input.optionActiveBg },
		{ label: "Input Option Active FG", value: theme.input.optionActiveFg },

		// Controls
		{ label: "Button Primary BG", value: theme.controls.buttonPrimaryBg },
		{ label: "Button Primary Hover BG", value: theme.controls.buttonPrimaryHoverBg },
		{ label: "Button Primary FG", value: theme.controls.buttonPrimaryFg },
		{ label: "Button Secondary BG", value: theme.controls.buttonSecondaryBg },
		{ label: "Progress Bar BG", value: theme.controls.progressBarBg },
		{ label: "Badge BG", value: theme.controls.badgeBg },
		{ label: "Badge FG", value: theme.controls.badgeFg },
		{ label: "Toolbar Active BG", value: theme.controls.toolbarActiveBg },
		{ label: "Toolbar Hover BG", value: theme.controls.toolbarHoverBg },

		// Terminal
		{ label: "Terminal Background", value: theme.terminal.bg },
		{ label: "Terminal Foreground", value: theme.terminal.fg },
	];

	return (
		<div className="grid w-full max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
			{swatches.map((s) => (
				<div key={s.label} className="flex items-center gap-4">
					<div
						className="h-14 w-14 shrink-0 rounded-md border sm:h-12 sm:w-12"
						style={{ backgroundColor: s.value, borderColor: "#00000022" }}
					/>
					<div className="flex min-w-0 flex-col text-sm">
						<span className="truncate font-semibold" title={s.label}>
							{s.label}
						</span>
						<span className="break-all opacity-70">{s.value}</span>
					</div>
				</div>
			))}
		</div>
	);
}