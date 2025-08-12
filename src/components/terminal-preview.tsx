import type { GenericTheme } from "../themes/generic-theme";

interface Props {
	theme: GenericTheme;
}

export function TerminalPreview({ theme }: Props) {
	return (
		<div
			className="flex h-[800px] w-full flex-col rounded-sm border-2 shadow-sm transition-colors"
			style={{
				backgroundColor: theme.terminal.bg,
				color: theme.terminal.fg,
				borderColor: theme.window.activeBorder,
			}}
		>
			<TerminalHeader theme={theme} />
			<TerminalContent theme={theme} />
		</div>
	);
}

function TerminalHeader({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex items-center justify-between border-b px-4 py-2 font-medium text-sm"
			style={{
				backgroundColor: theme.navigation.titleBar.bg,
				color: theme.navigation.titleBar.fg,
				borderBottomColor: theme.navigation.titleBar.border,
			}}
		>
			<div className="flex items-center gap-2">
				<span>💻</span>
				<span>Terminal</span>
			</div>
			<div className="flex gap-1 font-light text-xs">
				<span>●</span>
				<span>●</span>
				<span>●</span>
			</div>
		</div>
	);
}

function TerminalContent({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex-1 p-4 font-mono text-sm leading-relaxed"
			style={{
				fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
			}}
		>
			{/* Welcome message */}
			<div className="mb-4">
				<span style={{ color: theme.terminal.ansi.blue }}>
					Welcome to Tokyo Night Terminal
				</span>
			</div>

			{/* Command prompt */}
			<div className="mb-2">
				<span style={{ color: theme.terminal.ansi.green }}>user@tokyo</span>
				<span style={{ color: theme.terminal.ansi.blue }}>:</span>
				<span style={{ color: theme.terminal.ansi.yellow }}>~/projects</span>
				<span style={{ color: theme.terminal.ansi.blue }}>$</span>{" "}
				<span style={{ color: theme.terminal.fg }}>ls -la</span>
			</div>

			{/* Directory listing */}
			<div className="mb-4 ml-4">
				<div style={{ color: theme.terminal.ansi.blue }}>total 24</div>
				<div style={{ color: theme.terminal.fg }}>
					drwxr-xr-x 5 user user 4096 Dec 15 10:30 .
				</div>
				<div style={{ color: theme.terminal.fg }}>
					drwxr-xr-x 3 user user 4096 Dec 15 10:25 ..
				</div>
				<div style={{ color: theme.terminal.ansi.blue }}>
					drwxr-xr-x 2 user user 4096 Dec 15 10:28 src
				</div>
				<div style={{ color: theme.terminal.ansi.green }}>
					-rw-r--r-- 1 user user 1234 Dec 15 10:30 package.json
				</div>
				<div style={{ color: theme.terminal.ansi.green }}>
					-rw-r--r-- 1 user user 5678 Dec 15 10:29 README.md
				</div>
			</div>

			{/* Another command */}
			<div className="mb-2">
				<span style={{ color: theme.terminal.ansi.green }}>user@tokyo</span>
				<span style={{ color: theme.terminal.ansi.blue }}>:</span>
				<span style={{ color: theme.terminal.ansi.yellow }}>~/projects</span>
				<span style={{ color: theme.terminal.ansi.blue }}>$</span>{" "}
				<span style={{ color: theme.terminal.fg }}>cat package.json</span>
			</div>

			{/* JSON content */}
			<div className="mb-4 ml-4">
				<div style={{ color: theme.terminal.ansi.cyan }}>{"{"}</div>
				<div className="ml-4">
					<span style={{ color: theme.terminal.ansi.yellow }}>"name"</span>
					<span style={{ color: theme.terminal.fg }}>: </span>
					<span style={{ color: theme.terminal.ansi.green }}>
						"tokyo-tools"
					</span>
					<span style={{ color: theme.terminal.fg }}>,</span>
				</div>
				<div className="ml-4">
					<span style={{ color: theme.terminal.ansi.yellow }}>"version"</span>
					<span style={{ color: theme.terminal.fg }}>: </span>
					<span style={{ color: theme.terminal.ansi.green }}>"1.0.0"</span>
					<span style={{ color: theme.terminal.fg }}>,</span>
				</div>
				<div className="ml-4">
					<span style={{ color: theme.terminal.ansi.yellow }}>
						"dependencies"
					</span>
					<span style={{ color: theme.terminal.fg }}>: </span>
					<span style={{ color: theme.terminal.ansi.cyan }}>{"{"}</span>
				</div>
				<div className="ml-8">
					<span style={{ color: theme.terminal.ansi.yellow }}>"react"</span>
					<span style={{ color: theme.terminal.fg }}>: </span>
					<span style={{ color: theme.terminal.ansi.green }}>"^18.0.0"</span>
				</div>
				<div className="ml-4">
					<div style={{ color: theme.terminal.ansi.cyan }}>{"}"}</div>
				</div>
				<div style={{ color: theme.terminal.ansi.cyan }}>{"}"}</div>
			</div>

			{/* Current command prompt */}
			<div>
				<span style={{ color: theme.terminal.ansi.green }}>user@tokyo</span>
				<span style={{ color: theme.terminal.ansi.blue }}>:</span>
				<span style={{ color: theme.terminal.ansi.yellow }}>~/projects</span>
				<span style={{ color: theme.terminal.ansi.blue }}>$</span>{" "}
				<span
					className="animate-pulse"
					style={{
						backgroundColor: theme.terminal.fg,
						width: "8px",
						height: "16px",
						display: "inline-block",
						verticalAlign: "text-bottom",
					}}
				></span>
			</div>
		</div>
	);
}
