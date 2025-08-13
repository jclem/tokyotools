import { Tab } from "./tab";
import { Tabs } from "./tabs";

interface PreviewSwitcherProps {
	selectedPreview: "ide" | "terminal" | "colors";
	onPreviewChange: (preview: "ide" | "terminal" | "colors") => void;
}

export function PreviewSwitcher({
	selectedPreview,
	onPreviewChange,
}: PreviewSwitcherProps) {
	return (
		<Tabs>
			<Tab
				label="IDE"
				isSelected={selectedPreview === "ide"}
				onClick={() => onPreviewChange("ide")}
			/>
			<Tab
				label="Terminal"
				isSelected={selectedPreview === "terminal"}
				onClick={() => onPreviewChange("terminal")}
			/>
			<Tab
				label="Colors"
				isSelected={selectedPreview === "colors"}
				onClick={() => onPreviewChange("colors")}
			/>
		</Tabs>
	);
}
