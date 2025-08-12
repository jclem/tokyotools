export interface VSCodeInterface {
	name: string;
	author: string;
	maintainers: string[];
	type: "dark" | "light";
	semanticTokenColors: {
		"parameter.declaration": { foreground: string };
		parameter: { foreground: string };
		"property.declaration": { foreground: string };
		"property.defaultLibrary": { foreground: string };
		"*.defaultLibrary": { foreground: string };
		"variable.defaultLibrary": { foreground: string };
		"variable.declaration": { foreground: string };
		variable: { foreground: string };
	};
	semanticClass: string;
	colors: {
		foreground: string;
		descriptionForeground: string;
		disabledForeground: string;
		focusBorder: string;
		errorForeground: string;
		"widget.shadow": string;
		"scrollbar.shadow": string;
		"badge.background": string;
		"badge.foreground": string;
		"icon.foreground": string;
		"settings.headerForeground": string;
		"window.activeBorder": string;
		"window.inactiveBorder": string;
		"sash.hoverBorder": string;

		"toolbar.activeBackground": string;
		"toolbar.hoverBackground": string;

		"extensionButton.prominentBackground": string;
		"extensionButton.prominentHoverBackground": string;
		"extensionButton.prominentForeground": string;
		"extensionBadge.remoteBackground": string;
		"extensionBadge.remoteForeground": string;

		"button.background": string;
		"button.hoverBackground": string;
		"button.secondaryBackground": string;
		"button.foreground": string;
		"progressBar.background": string;

		"input.background": string;
		"input.foreground": string;
		"input.border": string;
		"input.placeholderForeground": string;
		"inputOption.activeForeground"?: string;
		"inputOption.activeBackground": string;

		"inputValidation.infoForeground": string;
		"inputValidation.infoBackground": string;
		"inputValidation.infoBorder": string;
		"inputValidation.warningForeground": string;
		"inputValidation.warningBackground": string;
		"inputValidation.warningBorder": string;
		"inputValidation.errorForeground": string;
		"inputValidation.errorBackground": string;
		"inputValidation.errorBorder": string;

		"dropdown.foreground": string;
		"dropdown.background": string;
		"dropdown.border"?: string;
		"dropdown.listBackground": string;

		"activityBar.background": string;
		"activityBar.foreground": string;
		"activityBar.activeBorder"?: string;
		"activityBar.inactiveForeground": string;
		"activityBar.border": string;
		"activityBarBadge.background": string;
		"activityBarBadge.foreground": string;

		"activityBarTop.foreground": string;
		"activityBarTop.inactiveForeground": string;
		"activityBarTop.activeBorder"?: string;

		"tree.indentGuidesStroke": string;
		"sideBar.foreground": string;
		"sideBar.background": string;
		"sideBar.border": string;
		"sideBarTitle.foreground": string;
		"sideBarSectionHeader.background": string;
		"sideBarSectionHeader.foreground": string;
		"sideBarSectionHeader.border": string;
		"sideBar.dropBackground": string;

		"list.dropBackground": string;
		"list.deemphasizedForeground": string;
		"list.activeSelectionBackground": string;
		"list.activeSelectionForeground": string;
		"list.inactiveSelectionBackground": string;
		"list.inactiveSelectionForeground": string;
		"list.focusBackground": string;
		"list.focusForeground": string;
		"list.hoverBackground": string;
		"list.hoverForeground": string;
		"list.highlightForeground": string;
		"list.invalidItemForeground": string;
		"list.errorForeground": string;
		"list.warningForeground": string;

		"listFilterWidget.background": string;
		"listFilterWidget.outline": string;
		"listFilterWidget.noMatchesOutline": string;

		"pickerGroup.foreground": string;
		"pickerGroup.border": string;

		"scrollbarSlider.background": string;
		"scrollbarSlider.hoverBackground": string;
		"scrollbarSlider.activeBackground": string;

		"editorBracketHighlight.foreground1": string;
		"editorBracketHighlight.foreground2": string;
		"editorBracketHighlight.foreground3": string;
		"editorBracketHighlight.foreground4": string;
		"editorBracketHighlight.foreground5": string;
		"editorBracketHighlight.foreground6": string;
		"editorBracketHighlight.unexpectedBracket.foreground": string;

		"editorBracketPairGuide.activeBackground1": string;
		"editorBracketPairGuide.activeBackground2": string;
		"editorBracketPairGuide.activeBackground3": string;
		"editorBracketPairGuide.activeBackground4": string;
		"editorBracketPairGuide.activeBackground5": string;
		"editorBracketPairGuide.activeBackground6": string;

		"selection.background": string;
		"editor.background": string;
		"editor.foreground": string;
		"editor.foldBackground": string;
		"editorLink.activeForeground": string;

		"editor.selectionBackground": string;
		"editor.inactiveSelectionBackground": string;

		"editor.findMatchBackground": string;
		"editor.findMatchBorder"?: string;
		"editor.findMatchHighlightBackground": string;
		"editor.findRangeHighlightBackground": string;
		"editor.rangeHighlightBackground": string;
		"editor.wordHighlightBackground": string;
		"editor.wordHighlightStrongBackground": string;
		"editor.selectionHighlightBackground": string;

		"editorCursor.foreground": string;
		"editorIndentGuide.background1": string;
		"editorIndentGuide.activeBackground1": string;
		"editorLineNumber.foreground": string;
		"editorLineNumber.activeForeground": string;
		"editor.lineHighlightBackground": string;
		"editorWhitespace.foreground": string;

		"editorMarkerNavigation.background": string;
		"editorHoverWidget.background": string;
		"editorHoverWidget.border": string;

		"editorBracketMatch.background": string;
		"editorBracketMatch.border": string;

		"editorOverviewRuler.border": string;
		"editorOverviewRuler.errorForeground": string;
		"editorOverviewRuler.warningForeground": string;
		"editorOverviewRuler.infoForeground": string;
		"editorOverviewRuler.bracketMatchForeground": string;
		"editorOverviewRuler.findMatchForeground": string;
		"editorOverviewRuler.rangeHighlightForeground": string;
		"editorOverviewRuler.selectionHighlightForeground": string;
		"editorOverviewRuler.wordHighlightForeground": string;
		"editorOverviewRuler.wordHighlightStrongForeground": string;
		"editorOverviewRuler.modifiedForeground": string;
		"editorOverviewRuler.addedForeground": string;
		"editorOverviewRuler.deletedForeground": string;

		"editorRuler.foreground": string;
		"editorError.foreground": string;
		"editorWarning.foreground": string;
		"editorInfo.foreground": string;
		"editorHint.foreground": string;

		"editorGutter.modifiedBackground": string;
		"editorGutter.addedBackground": string;
		"editorGutter.deletedBackground": string;

		"editorGhostText.foreground": string;

		"minimapGutter.modifiedBackground": string;
		"minimapGutter.addedBackground": string;
		"minimapGutter.deletedBackground": string;

		"editorGroup.border": string;
		"editorGroup.dropBackground": string;
		"editorGroupHeader.tabsBorder": string;
		"editorGroupHeader.tabsBackground": string;
		"editorGroupHeader.noTabsBackground": string;
		"editorGroupHeader.border": string;

		"editorPane.background": string;

		"editorWidget.foreground": string;
		"editorWidget.background": string;
		"editorWidget.border": string;
		"editorWidget.resizeBorder": string;

		"editorSuggestWidget.background": string;
		"editorSuggestWidget.border": string;
		"editorSuggestWidget.selectedBackground": string;
		"editorSuggestWidget.highlightForeground": string;

		"editorCodeLens.foreground": string;
		"editorLightBulb.foreground": string;
		"editorLightBulbAutoFix.foreground": string;

		"editorInlayHint.foreground": string;

		"peekView.border": string;
		"peekViewEditor.background": string;
		"peekViewEditor.matchHighlightBackground": string;
		"peekViewTitle.background": string;
		"peekViewTitleLabel.foreground": string;
		"peekViewTitleDescription.foreground": string;
		"peekViewResult.background": string;
		"peekViewResult.selectionForeground": string;
		"peekViewResult.selectionBackground": string;
		"peekViewResult.lineForeground": string;
		"peekViewResult.fileForeground": string;
		"peekViewResult.matchHighlightBackground": string;

		"diffEditor.insertedTextBackground": string;
		"diffEditor.removedTextBackground": string;
		"diffEditor.insertedLineBackground": string;
		"diffEditor.removedLineBackground": string;
		"diffEditorGutter.insertedLineBackground": string;
		"diffEditorGutter.removedLineBackground": string;
		"diffEditorOverview.insertedForeground": string;
		"diffEditorOverview.removedForeground": string;
		"diffEditor.diagonalFill": string;
		"diffEditor.unchangedCodeBackground"?: string;

		"multiDiffEditor.headerBackground": string;
		"multiDiffEditor.border": string;

		"breadcrumb.background": string;
		"breadcrumbPicker.background": string;
		"breadcrumb.foreground": string;
		"breadcrumb.focusForeground": string;
		"breadcrumb.activeSelectionForeground": string;

		"tab.activeBackground": string;
		"tab.inactiveBackground": string;
		"tab.activeForeground": string;
		"tab.hoverForeground": string;
		"tab.activeBorder": string;
		"tab.inactiveForeground": string;
		"tab.border": string;
		"tab.unfocusedActiveForeground": string;
		"tab.unfocusedInactiveForeground": string;
		"tab.unfocusedHoverForeground": string;
		"tab.activeModifiedBorder": string;
		"tab.inactiveModifiedBorder": string;
		"tab.unfocusedActiveBorder"?: string;
		"tab.lastPinnedBorder": string;

		"panel.background": string;
		"panel.border": string;
		"panelTitle.activeForeground": string;
		"panelTitle.inactiveForeground": string;
		"panelTitle.activeBorder": string;
		"panelInput.border"?: string;

		"statusBar.foreground": string;
		"statusBar.background": string;
		"statusBar.border": string;
		"statusBar.noFolderBackground": string;
		"statusBar.debuggingBackground": string;
		"statusBar.debuggingForeground": string;
		"statusBarItem.activeBackground": string;
		"statusBarItem.hoverBackground": string;
		"statusBarItem.prominentBackground": string;
		"statusBarItem.prominentHoverBackground": string;

		"titleBar.activeForeground": string;
		"titleBar.inactiveForeground": string;
		"titleBar.activeBackground": string;
		"titleBar.inactiveBackground": string;
		"titleBar.border": string;

		"walkThrough.embeddedEditorBackground": string;
		"textLink.foreground": string;
		"textLink.activeForeground": string;
		"textPreformat.foreground": string;
		"textBlockQuote.background": string;
		"textCodeBlock.background": string;
		"textSeparator.foreground": string;

		"debugExceptionWidget.border": string;
		"debugExceptionWidget.background": string;
		"debugToolBar.background": string;

		"debugConsole.infoForeground": string;
		"debugConsole.errorForeground": string;
		"debugConsole.sourceForeground"?: string;
		"debugConsole.warningForeground": string;
		"debugConsoleInputIcon.foreground"?: string;

		"editor.stackFrameHighlightBackground": string;
		"editor.focusedStackFrameHighlightBackground": string;
		"debugView.stateLabelForeground": string;
		"debugView.stateLabelBackground": string;
		"debugView.valueChangedHighlight": string;
		"debugTokenExpression.name": string;
		"debugTokenExpression.value": string;
		"debugTokenExpression.string": string;
		"debugTokenExpression.boolean": string;
		"debugTokenExpression.number": string;
		"debugTokenExpression.error": string;

		"debugIcon.breakpointForeground": string;
		"debugIcon.breakpointDisabledForeground": string;
		"debugIcon.breakpointUnverifiedForeground": string;

		"terminal.background": string;
		"terminal.foreground": string;
		"terminal.selectionBackground": string;
		"terminal.ansiBlack": string;
		"terminal.ansiRed": string;
		"terminal.ansiGreen": string;
		"terminal.ansiYellow": string;
		"terminal.ansiBlue": string;
		"terminal.ansiMagenta": string;
		"terminal.ansiCyan": string;
		"terminal.ansiWhite": string;
		"terminal.ansiBrightBlack": string;
		"terminal.ansiBrightRed": string;
		"terminal.ansiBrightGreen": string;
		"terminal.ansiBrightYellow": string;
		"terminal.ansiBrightBlue": string;
		"terminal.ansiBrightMagenta": string;
		"terminal.ansiBrightCyan": string;
		"terminal.ansiBrightWhite": string;

		"gitDecoration.modifiedResourceForeground": string;
		"gitDecoration.ignoredResourceForeground": string;
		"gitDecoration.deletedResourceForeground": string;
		"gitDecoration.renamedResourceForeground": string;
		"gitDecoration.addedResourceForeground": string;
		"gitDecoration.untrackedResourceForeground": string;
		"gitDecoration.conflictingResourceForeground": string;
		"gitDecoration.stageDeletedResourceForeground": string;
		"gitDecoration.stageModifiedResourceForeground": string;

		"notebook.editorBackground": string;
		"notebook.cellEditorBackground": string;
		"notebook.cellBorderColor": string;
		"notebook.focusedCellBorder": string;
		"notebook.cellStatusBarItemHoverBackground": string;

		"charts.red": string;
		"charts.blue": string;
		"charts.yellow": string;
		"charts.orange": string;
		"charts.green": string;
		"charts.purple": string;
		"charts.foreground": string;
		"charts.lines": string;

		"scmGraph.historyItemHoverLabelForeground"?: string;
		"scmGraph.foreground1": string;
		"scmGraph.foreground2": string;
		"scmGraph.foreground3": string;
		"scmGraph.foreground4": string;
		"scmGraph.foreground5": string;
		"scmGraph.historyItemHoverAdditionsForeground": string;
		"scmGraph.historyItemHoverDeletionsForeground": string;
		"scmGraph.historyItemRefColor": string;
		"scmGraph.historyItemRemoteRefColor": string;
		"scmGraph.historyItemBaseRefColor": string;
		"scmGraph.historyItemHoverDefaultLabelForeground": string;

		"merge.currentHeaderBackground": string;
		"merge.currentContentBackground": string;
		"merge.incomingHeaderBackground": string;
		"merge.incomingContentBackground": string;
		"mergeEditor.change.background": string;
		"mergeEditor.change.word.background": string;
		"mergeEditor.conflict.unhandledUnfocused.border": string;
		"mergeEditor.conflict.unhandledFocused.border": string;
		"mergeEditor.conflict.handledUnfocused.border": string;
		"mergeEditor.conflict.handledFocused.border": string;
		"mergeEditor.conflict.handled.minimapOverViewRuler": string;
		"mergeEditor.conflict.unhandled.minimapOverViewRuler": string;

		"gitlens.trailingLineForegroundColor"?: string;
		"gitlens.gutterUncommittedForegroundColor"?: string;
		"gitlens.gutterForegroundColor"?: string;
		"gitlens.gutterBackgroundColor"?: string;

		"notificationCenterHeader.background": string;
		"notifications.background": string;
		"notificationLink.foreground": string;
		"notificationsErrorIcon.foreground": string;
		"notificationsWarningIcon.foreground": string;
		"notificationsInfoIcon.foreground": string;

		"menubar.selectionForeground": string;
		"menubar.selectionBackground": string;
		"menubar.selectionBorder": string;
		"menu.foreground": string;
		"menu.background": string;
		"menu.selectionForeground": string;
		"menu.selectionBackground": string;
		"menu.separatorBackground": string;
		"menu.border": string;

		"chat.requestBorder": string;
		"chat.avatarBackground": string;
		"chat.avatarForeground": string;
		"chat.slashCommandBackground": string;
		"chat.slashCommandForeground": string;

		"inlineChat.foreground": string;
		"inlineChatInput.background": string;
		"inlineChatDiff.inserted": string;
		"inlineChatDiff.removed": string;
	};
	tokenColors: TokenColor[];
}

export interface TokenColor {
	name: string;
	scope: string | string[];
	settings: {
		foreground?: string;
		background?: string;
		fontStyle?: string;
	};
}
