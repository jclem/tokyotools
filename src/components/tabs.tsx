interface TabsProps {
	children: React.ReactNode;
}

export function Tabs({ children }: TabsProps) {
	return <div className="flex gap-2">{children}</div>;
}
