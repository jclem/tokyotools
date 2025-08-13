import { useState } from "react";
import { IDEPreview } from "./components/ide-preview";
import { PreviewSwitcher } from "./components/preview-switcher";
import { TerminalPreview } from "./components/terminal-preview";
import { ThemeSelector } from "./components/theme-selector";
import { themes } from "./themes/themes";
import { ColorsPreview } from "./components/colors-preview";

export function App() {
	const [selectedTheme, setSelectedTheme] =
		useState<keyof typeof themes>("Tokyo Night");
	const [selectedPreview, setSelectedPreview] = useState<
		"ide" | "terminal" | "colors"
	>("ide");
	const theme = themes[selectedTheme];

	return (
		<div className="mx-auto flex w-full max-w-7xl flex-col gap-16 p-8">
			<header className="flex items-start justify-between">
				<div className="flex flex-col gap-2">
					<ThemeSelector
						selectedTheme={selectedTheme}
						onThemeChange={setSelectedTheme}
					/>
					<PreviewSwitcher
						selectedPreview={selectedPreview}
						onPreviewChange={setSelectedPreview}
					/>
				</div>

				<h1 className="py-2 font-bold">Tokyo Tools</h1>
			</header>

			<main className="flex justify-center">
				{selectedPreview === "ide" ? (
					<IDEPreview theme={theme} />
				) : selectedPreview === "terminal" ? (
					<TerminalPreview theme={theme} />
				) : (
					<ColorsPreview theme={theme} />
				)}
			</main>
		</div>
	);
}
