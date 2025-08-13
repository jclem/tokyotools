import type { GenericTheme } from "../themes/generic-theme";
import { mapToSimpleTheme } from "../themes/simple-theme";

interface ColorsPreviewProps {
	theme: GenericTheme;
}

export function ColorsPreview({ theme }: ColorsPreviewProps) {
	const simple = mapToSimpleTheme(theme);
	const { primary, secondary, canvas } = simple.colors;

	const swatches: Array<{ label: string; value: string }> = [
		{ label: "Primary", value: primary },
		{ label: "Secondary", value: secondary },
		{ label: "Canvas Primary Background", value: canvas.primary.background },
		{ label: "Canvas Primary Foreground", value: canvas.primary.foreground },
		{ label: "Canvas Secondary Background", value: canvas.secondary.background },
		{ label: "Canvas Secondary Foreground", value: canvas.secondary.foreground },
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