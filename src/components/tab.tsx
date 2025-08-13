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
			className={`whitespace-nowrap rounded-md px-5 py-3 text-base outline-none transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2959aa] ${
				isSelected
					? "bg-[#2959aa] text-white shadow-sm"
					: "bg-transparent hover:bg-[#2959aa1a]"
			}`}
		>
			{label}
		</button>
	);
}
