// Generic color system that abstracts VS Code theme color slots into
// reusable semantic tokens. Each theme implementation should populate
// these tokens using as few distinct values as possible while ensuring
// that every source color is represented by some token.

export type ThemeMode = "dark" | "light";

export type Hex = `#${string}`;

export interface GenericThemeMeta {
	name: string;
	mode: ThemeMode;
}

export interface GenericTheme {
	meta: GenericThemeMeta;

	// Core surface and typography tokens
	text: {
		primary: Hex;
		secondary: Hex;
		muted: Hex;
		disabled: Hex;
		inverse: Hex;
		description: Hex;
		link: { default: Hex; active: Hex };
	};

	icon: { foreground: Hex };

	border: {
		subtle: Hex;
		default: Hex;
		strong: Hex;
		focusRing: Hex; // e.g. focusBorder
		shadow: Hex; // e.g. scrollbar.shadow / widget.shadow where applicable
	};

	surfaces: {
		canvas: Hex; // primary background (editor background)
		sunken: Hex; // deeper/backdrop (panels, side areas)
		elevated: Hex; // raised controls/panels
		overlay: Hex; // popovers/menus/widgets
		selection: Hex; // global selection background tint
	};

	brand: {
		primary: Hex; // brand/accent primary
		primaryHover: Hex;
		onPrimary: Hex;
	};

	// Controls (buttons, badges, progress)
	controls: {
		buttonPrimaryBg: Hex;
		buttonPrimaryHoverBg: Hex;
		buttonPrimaryFg: Hex;
		buttonSecondaryBg: Hex;
		progressBarBg: Hex;
		badgeBg: Hex;
		badgeFg: Hex;
		toolbarActiveBg: Hex;
		toolbarHoverBg: Hex;
	};

	// Inputs and validation
	input: {
		bg: Hex;
		fg: Hex;
		border: Hex;
		placeholder: Hex;
		optionActiveFg: Hex;
		optionActiveBg: Hex;
		validation: {
			info: { fg: Hex; bg: Hex; border: Hex };
			warning: { fg: Hex; bg: Hex; border: Hex };
			error: { fg: Hex; bg: Hex; border: Hex };
		};
		dropdown: {
			bg: Hex;
			fg: Hex;
			listBg: Hex;
			border?: Hex;
		};
	};

	// Navigation and containers
	navigation: {
		activityBar: {
			bg: Hex;
			fg: Hex;
			inactiveFg: Hex;
			border: Hex;
			activeBorder?: Hex;
			badgeBg: Hex;
			badgeFg: Hex;
			top?: { fg: Hex; inactiveFg: Hex; activeBorder?: Hex };
		};
		sideBar: {
			bg: Hex;
			fg: Hex;
			border: Hex;
			titleFg: Hex;
			sectionHeaderBg: Hex;
			sectionHeaderFg: Hex;
			sectionHeaderBorder: Hex;
			dropBg: Hex;
			indentGuide: Hex;
		};
		tabs: {
			activeBg: Hex;
			inactiveBg: Hex;
			activeFg: Hex;
			hoverFg: Hex;
			inactiveFg: Hex;
			border: Hex;
			activeBorder: Hex;
			activeModifiedBorder: Hex;
			inactiveModifiedBorder: Hex;
			unfocusedActiveFg: Hex;
			unfocusedInactiveFg: Hex;
			unfocusedHoverFg: Hex;
			lastPinnedBorder: Hex;
			hoverBg?: Hex;
			selectedBg?: Hex;
			unfocusedActiveBorder?: Hex;
		};
		panel: {
			bg: Hex;
			border: Hex;
			titleActiveFg: Hex;
			titleInactiveFg: Hex;
			titleActiveBorder: Hex;
			inputBorder?: Hex;
		};
		statusBar: {
			bg: Hex;
			fg: Hex;
			border: Hex;
			noFolderBg: Hex;
			debuggingBg: Hex;
			debuggingFg: Hex;
			itemActiveBg: Hex;
			itemHoverBg: Hex;
			itemProminentBg: Hex;
			itemProminentHoverBg: Hex;
		};
		titleBar: {
			bg: Hex;
			fg: Hex;
			inactiveBg: Hex;
			inactiveFg: Hex;
			border: Hex;
		};
		menu: {
			menubarSelectionFg: Hex;
			menubarSelectionBg: Hex;
			menubarSelectionBorder: Hex;
			menuFg: Hex;
			menuBg: Hex;
			menuSelectionFg: Hex;
			menuSelectionBg: Hex;
			menuSeparatorBg: Hex;
			menuBorder: Hex;
		};
	};

	// Lists and pickers
	list: {
		dropBg: Hex;
		deemphasizedFg: Hex;
		activeSelectionBg: Hex;
		activeSelectionFg: Hex;
		inactiveSelectionBg: Hex;
		inactiveSelectionFg: Hex;
		focusBg: Hex;
		focusFg: Hex;
		hoverBg: Hex;
		hoverFg: Hex;
		highlightFg: Hex;
		invalidItemFg: Hex;
		errorFg: Hex;
		warningFg: Hex;
		filterWidgetBg: Hex;
		filterWidgetOutline: Hex;
		filterWidgetNoMatchesOutline: Hex;
		pickerGroupFg: Hex;
		pickerGroupBorder: Hex;
	};

	scrollbar: {
		sliderBg: Hex;
		sliderHoverBg: Hex;
		sliderActiveBg: Hex;
		shadow: Hex;
	};

	// Editor and code area
	editor: {
		bg: Hex;
		fg: Hex;
		foldBg: Hex;
		linkActiveFg: Hex;

		selectionBg: Hex;
		inactiveSelectionBg: Hex;
		selectionHighlightBg: Hex;

		findMatchBg: Hex;
		findMatchBorder?: Hex;
		findMatchHighlightBg: Hex;
		findRangeHighlightBg: Hex;
		rangeHighlightBg: Hex;
		wordHighlightBg: Hex;
		wordHighlightStrongBg: Hex;

		cursorFg: Hex;
		indentGuideBg1: Hex;
		indentGuideActiveBg1: Hex;
		lineNumberFg: Hex;
		lineNumberActiveFg: Hex;
		lineHighlightBg: Hex;
		whitespaceFg: Hex;

		rulerFg: Hex;

		problems: {
			error: Hex;
			warning: Hex;
			info: Hex;
			hint: Hex;
		};

		gutter: {
			modified: Hex;
			added: Hex;
			deleted: Hex;
		};

		minimapGutter?: {
			modified: Hex;
			added: Hex;
			deleted: Hex;
		};

		minimap?: {
			errorHighlight?: Hex;
		};

		markerNavigationBg: Hex;
		hoverWidgetBg: Hex;
		hoverWidgetBorder: Hex;

		bracketMatchBg: Hex;
		bracketMatchBorder: Hex;

		ghostTextFg?: Hex;

		bracketHighlight: {
			foreground1: Hex;
			foreground2: Hex;
			foreground3: Hex;
			foreground4: Hex;
			foreground5: Hex;
			foreground6: Hex;
			unexpectedFg: Hex;
		};

		bracketPairGuideActive: {
			background1: Hex;
			background2: Hex;
			background3: Hex;
			background4: Hex;
			background5: Hex;
			background6: Hex;
		};

		overviewRuler: {
			border: Hex;
			error: Hex;
			warning: Hex;
			info: Hex;
			bracketMatch: Hex;
			findMatch: Hex;
			rangeHighlight: Hex;
			selectionHighlight: Hex;
			wordHighlight: Hex;
			wordHighlightStrong: Hex;
			modified: Hex;
			added: Hex;
			deleted: Hex;
		};

		widget: {
			fg: Hex;
			bg: Hex;
			border: Hex;
			resizeBorder: Hex;
			suggestWidgetBg: Hex;
			suggestWidgetBorder: Hex;
			suggestWidgetSelectedBg: Hex;
			suggestWidgetHighlightFg: Hex;
			codeLensFg: Hex;
			inlayHintFg: Hex;
			lightBulbFg?: Hex;
			lightBulbAutoFixFg?: Hex;
		};

		peekView: {
			border: Hex;
			editorBg: Hex;
			matchHighlightBg: Hex;
			titleBg: Hex;
			titleLabelFg: Hex;
			titleDescriptionFg: Hex;
			resultBg: Hex;
			resultSelectionFg: Hex;
			resultSelectionBg: Hex;
			resultLineFg: Hex;
			resultFileFg: Hex;
			resultMatchHighlightBg: Hex;
		};

		diffEditor: {
			insertedTextBg: Hex;
			removedTextBg: Hex;
			insertedLineBg: Hex;
			removedLineBg: Hex;
			gutterInsertedLineBg: Hex;
			gutterRemovedLineBg: Hex;
			overviewInsertedFg: Hex;
			overviewRemovedFg: Hex;
			diagonalFill: Hex;
			unchangedCodeBg?: Hex;
		};

		multiDiffEditor: {
			headerBg: Hex;
			border: Hex;
		};

		group: {
			border: Hex;
			emptyBg?: Hex;
			dropBg: Hex;
			headerTabsBorder: Hex;
			headerTabsBg: Hex;
			headerNoTabsBg: Hex;
			headerBorder: Hex;
		};

		paneBg: Hex;
	};

	breadcrumb: {
		bg: Hex;
		pickerBg: Hex;
		fg: Hex;
		focusFg: Hex;
		activeSelectionFg: Hex;
	};

	// Debug & inspection
	debug: {
		exceptionWidgetBorder: Hex;
		exceptionWidgetBg: Hex;
		toolbarBg: Hex;
		consoleInfoFg: Hex;
		consoleErrorFg: Hex;
		consoleSourceFg?: Hex;
		consoleWarningFg: Hex;
		consoleInputIconFg?: Hex;
		view: {
			stateLabelFg: Hex;
			stateLabelBg: Hex;
			valueChangedHighlight: Hex;
		};
		tokenExpression: {
			name: Hex;
			value: Hex;
			string: Hex;
			boolean: Hex;
			number: Hex;
			error: Hex;
		};
		icon: {
			breakpointFg: Hex;
			breakpointDisabledFg: Hex;
			breakpointUnverifiedFg: Hex;
			startFg?: Hex;
			pauseFg?: Hex;
			stepOverFg?: Hex;
			stepIntoFg?: Hex;
			stepOutFg?: Hex;
			continueFg?: Hex;
			stepBackFg?: Hex;
		};
		stackFrameHighlightBg: Hex;
		focusedStackFrameHighlightBg: Hex;
	};

	// VCS & Git decorations
	gitDecoration: {
		modified: Hex;
		ignored: Hex;
		deleted: Hex;
		renamed: Hex;
		added: Hex;
		untracked: Hex;
		conflicting: Hex;
		stageDeleted: Hex;
		stageModified: Hex;
	};

	// Notebook areas
	notebook: {
		editorBg: Hex;
		cellEditorBg: Hex;
		cellBorderColor: Hex;
		focusedCellBorder: Hex;
		cellStatusBarItemHoverBg: Hex;
	};

	// Charts
	charts: {
		red: Hex;
		blue: Hex;
		yellow: Hex;
		orange: Hex;
		green: Hex;
		purple: Hex;
		foreground: Hex;
		lines: Hex;
	};

	// SCM Graph visuals
	scmGraph?: {
		historyItemHoverLabelFg?: Hex;
		foreground1: Hex;
		foreground2: Hex;
		foreground3: Hex;
		foreground4: Hex;
		foreground5: Hex;
		historyItemHoverAdditionsFg?: Hex;
		historyItemHoverDeletionsFg?: Hex;
		historyItemRefColor?: Hex;
		historyItemRemoteRefColor?: Hex;
		historyItemBaseRefColor?: Hex;
		historyItemHoverDefaultLabelFg?: Hex;
	};

	// Merge editor visuals
	merge: {
		currentHeaderBg: Hex;
		currentContentBg: Hex;
		incomingHeaderBg: Hex;
		incomingContentBg: Hex;
		editor: {
			changeBg: Hex;
			changeWordBg: Hex;
			conflictUnhandledUnfocusedBorder: Hex;
			conflictUnhandledFocusedBorder: Hex;
			conflictHandledUnfocusedBorder: Hex;
			conflictHandledFocusedBorder: Hex;
			conflictHandledMinimapOverViewRuler: Hex;
			conflictUnhandledMinimapOverViewRuler: Hex;
		};
	};

	// GitLens extension accents
	gitlens?: {
		trailingLineFg: Hex;
		gutterUncommittedFg: Hex;
		gutterFg: Hex;
		gutterBg: Hex;
	};

	// Notifications
	notification: {
		centerHeaderBg: Hex;
		background: Hex;
		linkFg: Hex;
		errorIconFg: Hex;
		warningIconFg: Hex;
		infoIconFg: Hex;
	};

	// Window frame & sashes
	window: {
		activeBorder: Hex;
		inactiveBorder: Hex;
		sashHoverBorder: Hex;
	};

	// Misc text containers
	typography: {
		preformatFg: Hex;
		blockQuoteBg: Hex;
		codeBlockBg: Hex;
		separatorFg: Hex;
	};

	// Walkthroughs
	walkThrough: { embeddedEditorBg: Hex };

	// Chat and Inline Chat
	chat: {
		requestBorder: Hex;
		avatarBackground: Hex;
		avatarForeground: Hex;
		slashCommandBackground: Hex;
		slashCommandForeground: Hex;
	};

	inlineChat: {
		foreground: Hex;
		inputBackground: Hex;
		diffInserted: Hex;
		diffRemoved: Hex;
		background?: Hex;
	};

	// Terminal & ANSI colors
	terminal: {
		bg: Hex;
		fg: Hex;
		selectionBg: Hex;
		cursorFg?: Hex;
		ansi: {
			black: Hex;
			red: Hex;
			green: Hex;
			yellow: Hex;
			blue: Hex;
			magenta: Hex;
			cyan: Hex;
			white: Hex;
			brightBlack: Hex;
			brightRed: Hex;
			brightGreen: Hex;
			brightYellow: Hex;
			brightBlue: Hex;
			brightMagenta: Hex;
			brightCyan: Hex;
			brightWhite: Hex;
		};
	};
}
