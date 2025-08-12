interface TabProps {
	label: string;
	isSelected: boolean;
	onClick: () => void;
}

export function Tab({ label, isSelected, onClick }: TabProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
				isSelected ? "bg-[#2959aa] text-white" : "hover:bg-[#2959aaAA]"
			}`}
		>
			{label}
		</button>
	);
}
