import { Tab } from "./tab";
import { Tabs } from "./tabs";

interface PreviewSwitcherProps {
	selectedPreview: "ide" | "terminal";
	onPreviewChange: (preview: "ide" | "terminal") => void;
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
		</Tabs>
	);
}
