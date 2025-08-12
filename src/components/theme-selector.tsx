import { themes } from "../themes/themes";
import { Tab } from "./tab";
import { Tabs } from "./tabs";

interface ThemeSelectorProps {
	selectedTheme: string;
	onThemeChange: (theme: keyof typeof themes) => void;
}

export function ThemeSelector({
	selectedTheme,
	onThemeChange,
}: ThemeSelectorProps) {
	return (
		<Tabs>
			{Object.keys(themes).map((theme) => (
				<Tab
					key={theme}
					label={theme}
					isSelected={selectedTheme === theme}
					onClick={() => onThemeChange(theme as keyof typeof themes)}
				/>
			))}
		</Tabs>
	);
}
