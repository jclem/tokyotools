import type { GenericTheme } from "../themes/generic-theme";

interface Props {
	theme: GenericTheme;
}

export function IDEPreview({ theme }: Props) {
	return (
		<div
			className="flex h-[800px] w-full flex-col rounded-sm border-2 shadow-sm transition-colors"
			style={{
				backgroundColor: theme.editor.bg,
				color: theme.editor.fg,
				borderColor: theme.window.activeBorder,
			}}
		>
			<TitleBar theme={theme} />
			<MainContent theme={theme} />
		</div>
	);
}

function TitleBar({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex items-center justify-between border-b px-2 py-2 font-medium text-base"
			style={{
				backgroundColor: theme.navigation.titleBar.bg,
				color: theme.navigation.titleBar.fg,
				borderBottomColor: theme.navigation.titleBar.border,
			}}
		>
			<div className="flex gap-2">
				<span>📁</span>
				<span>main.ts</span>
			</div>
			<div className="flex gap-1 font-light text-xs">
				<span>●</span>
				<span>●</span>
				<span>●</span>
			</div>
		</div>
	);
}

function MainContent({ theme }: { theme: GenericTheme }) {
	return (
		<div className="flex flex-1 flex-col">
			<div className="flex flex-1">
				<ActivityBar theme={theme} />
				<Sidebar theme={theme} />
				<Editor theme={theme} />
			</div>
			<StatusBar theme={theme} />
		</div>
	);
}

function ActivityBar({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex h-full w-12 flex-col items-center border-r pt-4"
			style={{
				backgroundColor: theme.navigation.activityBar.bg,
				color: theme.navigation.activityBar.fg,
				borderRightColor: theme.navigation.activityBar.border,
			}}
		>
			<div
				className="mb-2 flex h-8 w-8 items-center justify-center rounded"
				style={{
					backgroundColor: theme.navigation.activityBar.badgeBg,
					color: theme.navigation.activityBar.badgeFg,
				}}
			>
				📁
			</div>
			<div
				className="mb-2 flex h-8 w-8 items-center justify-center"
				style={{
					color: theme.navigation.activityBar.inactiveFg,
				}}
			>
				🔍
			</div>
			<div
				className="mb-2 flex h-8 w-8 items-center justify-center"
				style={{
					color: theme.navigation.activityBar.inactiveFg,
				}}
			>
				⚙️
			</div>
		</div>
	);
}

function Sidebar({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex w-64 flex-col border-r"
			style={{
				backgroundColor: theme.navigation.sideBar.bg,
				color: theme.navigation.sideBar.fg,
				borderRightColor: theme.navigation.sideBar.border,
			}}
		>
			<div
				className="border-b px-4 py-2 font-semibold text-xs uppercase tracking-wider"
				style={{
					backgroundColor: theme.navigation.sideBar.sectionHeaderBg,
					color: theme.navigation.sideBar.sectionHeaderFg,
					borderBottomColor: theme.navigation.sideBar.sectionHeaderBorder,
				}}
			>
				Explorer
			</div>
			<div className="flex-1 py-2">
				<div
					className="flex items-center px-4 py-1 text-sm"
					style={{
						backgroundColor: theme.list.activeSelectionBg,
						color: theme.list.activeSelectionFg,
					}}
				>
					<span className="mr-2">📄</span>
					main.ts
				</div>
				<div
					className="flex items-center px-4 py-1 text-sm"
					style={{
						color: theme.navigation.sideBar.fg,
					}}
				>
					<span className="mr-2">📄</span>
					package.json
				</div>
				<div
					className="flex items-center px-4 py-1 text-sm"
					style={{
						color: theme.navigation.sideBar.fg,
					}}
				>
					<span className="mr-2">📁</span>
					src/
				</div>
			</div>
		</div>
	);
}

function Editor({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex flex-1 flex-col"
			style={{
				backgroundColor: theme.editor.bg,
				color: theme.editor.fg,
			}}
		>
			{/* Editor Header */}
			<div
				className="flex h-9 items-center border-b px-4"
				style={{
					backgroundColor: theme.editor.group.headerTabsBg,
					borderBottomColor: theme.editor.group.headerTabsBorder,
				}}
			>
				<div
					className="mr-px border-b-2 px-4 py-2 text-sm"
					style={{
						backgroundColor: theme.navigation.tabs.activeBg,
						color: theme.navigation.tabs.activeFg,
						borderBottomColor: theme.navigation.tabs.activeBorder,
					}}
				>
					main.ts
				</div>
			</div>

			{/* Editor Content */}
			<div
				className="flex-1 p-4 font-mono text-sm leading-relaxed"
				style={{
					fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
				}}
			>
				<div
					className="py-0.5"
					style={{
						backgroundColor: theme.editor.lineHighlightBg,
					}}
				>
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						1
					</span>
					<span style={{ color: theme.editor.bracketHighlight.foreground1 }}>
						import
					</span>{" "}
					<span style={{ color: theme.terminal.ansi.green }}>'react'</span>{" "}
					<span style={{ color: theme.editor.bracketHighlight.foreground1 }}>
						from
					</span>{" "}
					<span style={{ color: theme.terminal.ansi.green }}>'react'</span>
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						2
					</span>
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						3
					</span>
					<span style={{ color: theme.editor.bracketHighlight.foreground1 }}>
						function
					</span>{" "}
					<span
						style={{
							color: theme.editor.bracketHighlight.foreground4,
						}}
					>
						App
					</span>
					() {"{"}
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						4
					</span>
					{"  "}
					<span style={{ color: theme.editor.bracketHighlight.foreground1 }}>
						return
					</span>{" "}
					(
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						5
					</span>
					{"    "}
					<span style={{ color: theme.terminal.ansi.red }}>&lt;div&gt;</span>
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						6
					</span>
					{"      "}
					<span style={{ color: theme.terminal.ansi.green }}>
						Hello, Tokyo Night!
					</span>
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						7
					</span>
					{"    "}
					<span style={{ color: theme.terminal.ansi.red }}>&lt;/div&gt;</span>
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						8
					</span>
					{"  "});
				</div>
				<div className="py-0.5">
					<span
						className="mr-4"
						style={{
							color: theme.editor.lineNumberFg,
						}}
					>
						9
					</span>
					{"}"}
				</div>
			</div>
		</div>
	);
}

function StatusBar({ theme }: { theme: GenericTheme }) {
	return (
		<div
			className="flex items-center justify-between border-t px-4 py-1 text-xs"
			style={{
				backgroundColor: theme.navigation.statusBar.bg,
				color: theme.navigation.statusBar.fg,
				borderTopColor: theme.navigation.statusBar.border,
			}}
		>
			<div className="flex">
				<span className="mr-4">TypeScript</span>
				<span className="mr-4">main.ts</span>
			</div>
			<div className="flex">
				<span className="mr-4">Ln 9, Col 1</span>
				<span className="mr-4">Spaces: 2</span>
				<span>UTF-8</span>
			</div>
		</div>
	);
}
