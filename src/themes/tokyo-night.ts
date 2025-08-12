import type { GenericTheme } from "./generic-theme.ts";

export const tokyoNight: GenericTheme = {
	meta: { name: "Tokyo Night", mode: "dark" },

	text: {
		primary: "#a9b1d6",
		secondary: "#787c99",
		muted: "#9699a8",
		disabled: "#545c7e",
		inverse: "#ffffff",
		description: "#515670",
		link: { default: "#6183bb", active: "#7dcfff" },
	},

	icon: { foreground: "#787c99" },

	border: {
		subtle: "#101014",
		default: "#101014",
		strong: "#0d0f17",
		focusRing: "#545c7e33",
		shadow: "#ffffff00",
	},

	surfaces: {
		canvas: "#1a1b26",
		sunken: "#16161e",
		elevated: "#16161e",
		overlay: "#16161e",
		selection: "#515c7e40",
	},

	brand: {
		primary: "#3d59a1",
		primaryHover: "#3d59a1AA",
		onPrimary: "#ffffff",
	},

	controls: {
		buttonPrimaryBg: "#3d59a1dd",
		buttonPrimaryHoverBg: "#3d59a1AA",
		buttonPrimaryFg: "#ffffff",
		buttonSecondaryBg: "#3b3e52",
		progressBarBg: "#3d59a1",
		badgeBg: "#7e83b230",
		badgeFg: "#acb0d0",
		toolbarActiveBg: "#202330",
		toolbarHoverBg: "#202330",
	},

	input: {
		bg: "#14141b",
		fg: "#a9b1d6",
		border: "#0f0f14",
		placeholder: "#787c998A",
		optionActiveFg: "#c0caf5",
		optionActiveBg: "#3d59a144",
		validation: {
			info: { fg: "#bbc2e0", bg: "#3d59a15c", border: "#3d59a1" },
			warning: { fg: "#000000", bg: "#c2985b", border: "#e0af68" },
			error: { fg: "#bbc2e0", bg: "#85353e", border: "#963c47" },
		},
		dropdown: {
			bg: "#14141b",
			fg: "#787c99",
			listBg: "#14141b",
		},
	},

	navigation: {
		activityBar: {
			bg: "#16161e",
			fg: "#787c99",
			inactiveFg: "#3b3e52",
			border: "#16161e",
			badgeBg: "#3d59a1",
			badgeFg: "#ffffff",
			top: { fg: "#787c99", inactiveFg: "#3b3e52" },
		},
		sideBar: {
			bg: "#16161e",
			fg: "#787c99",
			border: "#101014",
			titleFg: "#787c99",
			sectionHeaderBg: "#16161e",
			sectionHeaderFg: "#a9b1d6",
			sectionHeaderBorder: "#101014",
			dropBg: "#1e202e",
			indentGuide: "#2b2b3b",
		},
		tabs: {
			activeBg: "#16161e",
			inactiveBg: "#16161e",
			activeFg: "#a9b1d6",
			hoverFg: "#a9b1d6",
			inactiveFg: "#787c99",
			border: "#101014",
			activeBorder: "#3d59a1",
			activeModifiedBorder: "#1a1b26",
			inactiveModifiedBorder: "#1f202e",
			unfocusedActiveFg: "#a9b1d6",
			unfocusedInactiveFg: "#787c99",
			unfocusedHoverFg: "#a9b1d6",
			lastPinnedBorder: "#222333",
			unfocusedActiveBorder: "#1f202e",
		},
		panel: {
			bg: "#16161e",
			border: "#101014",
			titleActiveFg: "#787c99",
			titleInactiveFg: "#42465d",
			titleActiveBorder: "#16161e",
			inputBorder: "#16161e",
		},
		statusBar: {
			bg: "#16161e",
			fg: "#787c99",
			border: "#101014",
			noFolderBg: "#16161e",
			debuggingBg: "#16161e",
			debuggingFg: "#787c99",
			itemActiveBg: "#101014",
			itemHoverBg: "#20222c",
			itemProminentBg: "#101014",
			itemProminentHoverBg: "#20222c",
		},
		titleBar: {
			bg: "#16161e",
			fg: "#787c99",
			inactiveBg: "#16161e",
			inactiveFg: "#787c99",
			border: "#101014",
		},
		menu: {
			menubarSelectionFg: "#a9b1d6",
			menubarSelectionBg: "#1e202e",
			menubarSelectionBorder: "#1b1e2e",
			menuFg: "#787c99",
			menuBg: "#16161e",
			menuSelectionFg: "#a9b1d6",
			menuSelectionBg: "#1e202e",
			menuSeparatorBg: "#101014",
			menuBorder: "#101014",
		},
	},

	list: {
		dropBg: "#1e202e",
		deemphasizedFg: "#787c99",
		activeSelectionBg: "#202330",
		activeSelectionFg: "#a9b1d6",
		inactiveSelectionBg: "#1c1d29",
		inactiveSelectionFg: "#a9b1d6",
		focusBg: "#1c1d29",
		focusFg: "#a9b1d6",
		hoverBg: "#13131a",
		hoverFg: "#a9b1d6",
		highlightFg: "#668ac4",
		invalidItemFg: "#c97018",
		errorFg: "#bb616b",
		warningFg: "#c49a5a",
		filterWidgetBg: "#101014",
		filterWidgetOutline: "#3d59a1",
		filterWidgetNoMatchesOutline: "#a6333f",
		pickerGroupFg: "#a9b1d6",
		pickerGroupBorder: "#101014",
	},

	scrollbar: {
		sliderBg: "#868bc415",
		sliderHoverBg: "#868bc410",
		sliderActiveBg: "#868bc422",
		shadow: "#00000033",
	},

	editor: {
		bg: "#1a1b26",
		fg: "#a9b1d6",
		foldBg: "#1111174a",
		linkActiveFg: "#acb0d0",

		selectionBg: "#515c7e4d",
		inactiveSelectionBg: "#515c7e25",
		selectionHighlightBg: "#515c7e44",

		findMatchBg: "#3d59a166",
		findMatchBorder: "#e0af68",
		findMatchHighlightBg: "#3d59a166",
		findRangeHighlightBg: "#515c7e33",
		rangeHighlightBg: "#515c7e20",
		wordHighlightBg: "#515c7e44",
		wordHighlightStrongBg: "#515c7e55",

		cursorFg: "#c0caf5",
		indentGuideBg1: "#232433",
		indentGuideActiveBg1: "#363b54",
		lineNumberFg: "#363b54",
		lineNumberActiveFg: "#787c99",
		lineHighlightBg: "#1e202e",
		whitespaceFg: "#363b54",

		rulerFg: "#101014",

		problems: {
			error: "#db4b4b",
			warning: "#e0af68",
			info: "#0da0ba",
			hint: "#0da0ba",
		},

		gutter: { modified: "#394b70", added: "#164846", deleted: "#823c41" },

		minimapGutter: {
			modified: "#425882",
			added: "#1C5957",
			deleted: "#944449",
		},

		markerNavigationBg: "#16161e",
		hoverWidgetBg: "#16161e",
		hoverWidgetBorder: "#101014",

		bracketMatchBg: "#16161e",
		bracketMatchBorder: "#42465d",

		ghostTextFg: "#646e9c",

		bracketHighlight: {
			foreground1: "#698cd6",
			foreground2: "#68b3de",
			foreground3: "#9a7ecc",
			foreground4: "#25aac2",
			foreground5: "#80a856",
			foreground6: "#c49a5a",
			unexpectedFg: "#db4b4b",
		},

		bracketPairGuideActive: {
			background1: "#698cd6",
			background2: "#68b3de",
			background3: "#9a7ecc",
			background4: "#25aac2",
			background5: "#80a856",
			background6: "#c49a5a",
		},

		overviewRuler: {
			border: "#101014",
			error: "#db4b4b",
			warning: "#e0af68",
			info: "#1abc9c",
			bracketMatch: "#101014",
			findMatch: "#a9b1d644",
			rangeHighlight: "#a9b1d644",
			selectionHighlight: "#a9b1d622",
			wordHighlight: "#bb9af755",
			wordHighlightStrong: "#bb9af766",
			modified: "#394b70",
			added: "#164846",
			deleted: "#703438",
		},

		widget: {
			fg: "#787c99",
			bg: "#16161e",
			border: "#101014",
			resizeBorder: "#545c7e33",
			suggestWidgetBg: "#16161e",
			suggestWidgetBorder: "#101014",
			suggestWidgetSelectedBg: "#20222c",
			suggestWidgetHighlightFg: "#6183bb",
			codeLensFg: "#51597d",
			inlayHintFg: "#646e9c",
			lightBulbFg: "#e0af68",
			lightBulbAutoFixFg: "#e0af68",
		},

		peekView: {
			border: "#101014",
			editorBg: "#16161e",
			matchHighlightBg: "#3d59a166",
			titleBg: "#101014",
			titleLabelFg: "#a9b1d6",
			titleDescriptionFg: "#787c99",
			resultBg: "#101014",
			resultSelectionFg: "#a9b1d6",
			resultSelectionBg: "#3d59a133",
			resultLineFg: "#a9b1d6",
			resultFileFg: "#787c99",
			resultMatchHighlightBg: "#3d59a166",
		},

		diffEditor: {
			insertedTextBg: "#41a6b520",
			removedTextBg: "#db4b4b22",
			insertedLineBg: "#41a6b520",
			removedLineBg: "#db4b4b22",
			gutterInsertedLineBg: "#41a6b525",
			gutterRemovedLineBg: "#db4b4b22",
			overviewInsertedFg: "#41a6b525",
			overviewRemovedFg: "#db4b4b22",
			diagonalFill: "#292e42",
			unchangedCodeBg: "#282a3b66",
		},

		multiDiffEditor: { headerBg: "#1a1b26", border: "#1a1b26" },

		group: {
			border: "#101014",
			dropBg: "#1e202e",
			headerTabsBorder: "#101014",
			headerTabsBg: "#16161e",
			headerNoTabsBg: "#16161e",
			headerBorder: "#101014",
		},

		paneBg: "#1a1b26",
	},

	breadcrumb: {
		bg: "#16161e",
		pickerBg: "#16161e",
		fg: "#515670",
		focusFg: "#a9b1d6",
		activeSelectionFg: "#a9b1d6",
	},

	debug: {
		exceptionWidgetBorder: "#963c47",
		exceptionWidgetBg: "#101014",
		toolbarBg: "#101014",
		consoleInfoFg: "#787c99",
		consoleErrorFg: "#bb616b",
		consoleSourceFg: "#787c99",
		consoleWarningFg: "#c49a5a",
		consoleInputIconFg: "#73daca",
		view: {
			stateLabelFg: "#787c99",
			stateLabelBg: "#14141b",
			valueChangedHighlight: "#3d59a1aa",
		},
		tokenExpression: {
			name: "#7dcfff",
			value: "#9aa5ce",
			string: "#9ece6a",
			boolean: "#ff9e64",
			number: "#ff9e64",
			error: "#bb616b",
		},
		icon: {
			breakpointFg: "#db4b4b",
			breakpointDisabledFg: "#414761",
			breakpointUnverifiedFg: "#c24242",
		},
		stackFrameHighlightBg: "#E2BD3A20",
		focusedStackFrameHighlightBg: "#73daca20",
	},

	gitDecoration: {
		modified: "#6183bb",
		ignored: "#515670",
		deleted: "#914c54",
		renamed: "#449dab",
		added: "#449dab",
		untracked: "#449dab",
		conflicting: "#e0af68cc",
		stageDeleted: "#914c54",
		stageModified: "#6183bb",
	},

	notebook: {
		editorBg: "#1a1b26",
		cellEditorBg: "#16161e",
		cellBorderColor: "#101014",
		focusedCellBorder: "#29355a",
		cellStatusBarItemHoverBg: "#1c1d29",
	},

	charts: {
		red: "#f7768e",
		blue: "#7aa2f7",
		yellow: "#e0af68",
		orange: "#ff9e64",
		green: "#41a6b5",
		purple: "#9d7cd8",
		foreground: "#9AA5CE",
		lines: "#16161e",
	},

	scmGraph: {
		historyItemHoverLabelFg: "#1b1e2e",
		foreground1: "#ff9e64",
		foreground2: "#e0af68",
		foreground3: "#41a6b5",
		foreground4: "#7aa2f7",
		foreground5: "#bb9af7",
		historyItemHoverAdditionsFg: "#41a6b5",
		historyItemHoverDeletionsFg: "#f7768e",
		historyItemRefColor: "#506FCA",
		historyItemRemoteRefColor: "#41a6b5",
		historyItemBaseRefColor: "#9d7cd8",
		historyItemHoverDefaultLabelFg: "#a9b1d6",
	},

	merge: {
		currentHeaderBg: "#41a6b525",
		currentContentBg: "#007a7544",
		incomingHeaderBg: "#3d59a1aa",
		incomingContentBg: "#3d59a144",
		editor: {
			changeBg: "#41a6b525",
			changeWordBg: "#41a6b540",
			conflictUnhandledUnfocusedBorder: "#e0af6888",
			conflictUnhandledFocusedBorder: "#e0af68b0",
			conflictHandledUnfocusedBorder: "#41a6b525",
			conflictHandledFocusedBorder: "#41a6b565",
			conflictHandledMinimapOverViewRuler: "#449dab",
			conflictUnhandledMinimapOverViewRuler: "#e0af68",
		},
	},

	gitlens: {
		trailingLineFg: "#646e9c",
		gutterUncommittedFg: "#7aa2f7",
		gutterFg: "#787c99",
		gutterBg: "#16161e",
	},

	notification: {
		centerHeaderBg: "#101014",
		background: "#101014",
		linkFg: "#6183bb",
		errorIconFg: "#bb616b",
		warningIconFg: "#bba461",
		infoIconFg: "#0da0ba",
	},

	window: {
		activeBorder: "#0d0f17",
		inactiveBorder: "#0d0f17",
		sashHoverBorder: "#29355a",
	},

	typography: {
		preformatFg: "#9699a8",
		blockQuoteBg: "#16161e",
		codeBlockBg: "#16161e",
		separatorFg: "#363b54",
	},

	walkThrough: { embeddedEditorBg: "#16161e" },

	chat: {
		requestBorder: "#0f0f14",
		avatarBackground: "#3d59a1",
		avatarForeground: "#a9b1d6",
		slashCommandBackground: "#14141b",
		slashCommandForeground: "#7aa2f7",
	},

	inlineChat: {
		foreground: "#a9b1d6",
		inputBackground: "#14141b",
		diffInserted: "#41a6b540",
		diffRemoved: "#db4b4b42",
	},

	terminal: {
		bg: "#16161e",
		fg: "#787c99",
		selectionBg: "#515c7e4d",
		ansi: {
			black: "#363b54",
			red: "#f7768e",
			green: "#73daca",
			yellow: "#e0af68",
			blue: "#7aa2f7",
			magenta: "#bb9af7",
			cyan: "#7dcfff",
			white: "#787c99",
			brightBlack: "#363b54",
			brightRed: "#f7768e",
			brightGreen: "#73daca",
			brightYellow: "#e0af68",
			brightBlue: "#7aa2f7",
			brightMagenta: "#bb9af7",
			brightCyan: "#7dcfff",
			brightWhite: "#acb0d0",
		},
	},
};

export default tokyoNight;
