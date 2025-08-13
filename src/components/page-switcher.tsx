import { Tab } from "./tab";
import { Tabs } from "./tabs";

interface PageSwitcherProps {
	selectedPage: "preview" | "colors";
	onPageChange: (page: "preview" | "colors") => void;
}

export function PageSwitcher({
	selectedPage,
	onPageChange,
}: PageSwitcherProps) {
	return (
		<Tabs>
			<Tab
				label="Preview"
				isSelected={selectedPage === "preview"}
				onClick={() => onPageChange("preview")}
			/>
			<Tab
				label="Colors"
				isSelected={selectedPage === "colors"}
				onClick={() => onPageChange("colors")}
			/>
		</Tabs>
	);
}
