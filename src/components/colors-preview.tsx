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
		<div className="grid w-full max-w-2xl grid-cols-2 gap-6">
			{swatches.map((s) => (
				<div key={s.label} className="flex items-center gap-4">
					<div
						className="size-12 rounded border"
						style={{ backgroundColor: s.value, borderColor: "#00000022" }}
					/>
					<div className="flex flex-col text-sm">
						<span className="font-semibold">{s.label}</span>
						<span className="opacity-70">{s.value}</span>
					</div>
				</div>
			))}
		</div>
	);
}