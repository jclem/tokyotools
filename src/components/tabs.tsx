interface TabsProps {
	children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
	return (
		<div className="w-full overflow-x-auto">
			<div className="flex min-w-max gap-2 pr-2">{children}</div>
		</div>
	);
}
