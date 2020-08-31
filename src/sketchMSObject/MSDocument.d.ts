
declare class MSDocument extends NSDocument /* implements MSCloudExportableDocument, MSSidebarControllerDelegate, BCSideBarViewControllerDelegate, NSMenuDelegate, NSToolbarDelegate, NSWindowDelegate, MSEventHandlerManagerDelegate, MSDocumentDataDelegate, MSMenuBuilderDelegate */ {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    UIMetadata(): NSDictionary;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(retain,nonatomic) */
    UIMetadata(): NSDictionary;
    /* typeEncoding=@"MSActionController", ivar=_actionsController, attributes=(retain,nonatomic) */
    actionsController(): MSActionController;
    /* typeEncoding=@"MSBackButtonController", ivar=_backButtonController, attributes=(retain,nonatomic) */
    backButtonController(): MSBackButtonController;
    /* typeEncoding=@"MSBadgeController", ivar=_badgeController, attributes=(retain,nonatomic) */
    badgeController(): MSBadgeController;
    /* typeEncoding=c, ivar=_cacheFlushInProgress, attributes=(assign) */
    cacheFlushInProgress(): boolean;
    /* typeEncoding=@"MSCacheManager", ivar=(null), attributes=(assign,nonatomic,readonly) */
    cacheManager(): MSCacheManager;
    /* typeEncoding=@"MSCacheManager", ivar=_cacheManager, attributes=(assign,nonatomic,readonly) */
    cacheManager(): MSCacheManager;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    canvasColorSpace(): NSColorSpace;
    /* typeEncoding=@"NSView", ivar=_canvasPlaceholderView, attributes=(retain,nonatomic) */
    canvasPlaceholderView(): NSView;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    cloudName(): NSString;
    /* typeEncoding=@"SCKShare", ivar=(null), attributes=(retain,nonatomic) */
    cloudShare(): SCKShare;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    colorSpace(): NSColorSpace;
    /* typeEncoding=@, ivar=_colorSpaceMismatchWarning, attributes=(retain,nonatomic) */
    colorSpaceMismatchWarning(): any;
    /* typeEncoding=@"MSContentDrawViewController", ivar=_currentContentViewController, attributes=(retain,nonatomic) */
    currentContentViewController(): MSContentDrawViewController;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSResponder", ivar=(null), attributes=(assign,nonatomic,readonly) */
    defaultFirstResponder(): NSResponder;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"NSColorSpace", ivar=(null), attributes=(assign,nonatomic,readonly) */
    documentColorSpace(): NSColorSpace;
    /* typeEncoding=@"MSDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    documentData(): MSDocumentData;
    /* typeEncoding=@"MSDocumentData", ivar=_documentData, attributes=(retain,nonatomic) */
    documentData(): MSDocumentData;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentDataUsedForSupplementaryViews, attributes=(retain,nonatomic) */
    documentDataUsedForSupplementaryViews(): MSImmutableDocumentData;
    /* typeEncoding=@"NSWindow", ivar=_documentWindow, attributes=(retain,nonatomic) */
    documentWindow(): NSWindow;
    /* typeEncoding=@, ivar=_editingLibraryWarning, attributes=(retain,nonatomic) */
    editingLibraryWarning(): any;
    /* typeEncoding=@"MSEventHandlerManager", ivar=_eventHandlerManager, attributes=(retain,nonatomic) */
    eventHandlerManager(): MSEventHandlerManager;
    /* typeEncoding=@"NSArray", ivar=_exportableLayerSelection, attributes=(retain,nonatomic) */
    exportableLayerSelection(): NSArray;
    /* typeEncoding=c, ivar=_hasOpenedImageFile, attributes=(assign,nonatomic) */
    hasOpenedImageFile(): boolean;
    /* typeEncoding=c, ivar=_hasScheduledDocumentDidChange, attributes=(assign,nonatomic) */
    hasScheduledDocumentDidChange(): boolean;
    /* typeEncoding=c, ivar=_hasScheduledInspectorReload, attributes=(assign,nonatomic) */
    hasScheduledInspectorReload(): boolean;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=@"MSHistoryMaker", ivar=_historyMaker, attributes=(retain,nonatomic) */
    historyMaker(): MSHistoryMaker;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=(null), attributes=(assign,nonatomic,readonly) */
    immutableDocumentData(): MSImmutableDocumentData;
    /* typeEncoding=@"MSInspectorController", ivar=_inspectorController, attributes=(retain,nonatomic) */
    inspectorController(): MSInspectorController;
    /* typeEncoding=@"NSView", ivar=_inspectorPlaceholderView, attributes=(retain,nonatomic) */
    inspectorPlaceholderView(): NSView;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    isCurrent(): boolean;
    /* typeEncoding=@"NSMutableSet", ivar=_layersWithHiddenSelectionHandles, attributes=(retain,nonatomic) */
    layersWithHiddenSelectionHandles(): NSMutableSet;
    /* typeEncoding=@"NSView", ivar=_messageView, attributes=(retain,nonatomic) */
    messageView(): NSView;
    /* typeEncoding=d, ivar=_mostRecentCacheFlushingTime, attributes=(assign) */
    mostRecentCacheFlushingTime(): number;
    /* typeEncoding=@"NSMutableDictionary", ivar=_mutableUIMetadata, attributes=(retain,nonatomic) */
    mutableUIMetadata(): NSMutableDictionary;
    /* typeEncoding=c, ivar=_nextReadFromURLIsReload, attributes=(assign,nonatomic) */
    nextReadFromURLIsReload(): boolean;
    /* typeEncoding=@"NSMutableDictionary", ivar=_originalViewportsForEditedSymbols, attributes=(retain,nonatomic) */
    originalViewportsForEditedSymbols(): NSMutableDictionary;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
    pageListCollapsed(): boolean;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    pageListHeight(): number;
    /* typeEncoding=@"MSLayerArray", ivar=_previousSelectedLayers, attributes=(copy,nonatomic) */
    previousSelectedLayers(): MSLayerArray;
    /* typeEncoding=@"NSTimer", ivar=_resetHiddenSelectionHandlesTimer, attributes=(retain,nonatomic) */
    resetHiddenSelectionHandlesTimer(): NSTimer;
    /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
    scrollOrigin(): CGPoint;
    /* typeEncoding=@"BCSideBarViewController", ivar=_sidebarController, attributes=(retain,nonatomic) */
    sidebarController(): BCSideBarViewController;
    /* typeEncoding=@"MSMainSplitViewController", ivar=_splitViewController, attributes=(assign,nonatomic,weak) */
    splitViewController(): MSMainSplitViewController;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
    /* typeEncoding=c, ivar=_supplementaryViewRefreshIsScheduled, attributes=(assign,nonatomic) */
    supplementaryViewRefreshIsScheduled(): boolean;
    /* typeEncoding=c, ivar=_temporarilyDisableSelectionHiding, attributes=(assign,nonatomic) */
    temporarilyDisableSelectionHiding(): boolean;
    /* typeEncoding=@"MSToolbarConstructor", ivar=_toolbarConstructor, attributes=(retain,nonatomic) */
    toolbarConstructor(): MSToolbarConstructor;
    /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic) */
    zoomValue(): number;
  
    /* typeEncoding=c16@0:8 */
    static autosavesInPlace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    static currentDocument(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    static isNativeType(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    static readableTypes(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    static windowForSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    static writableTypes(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    UIMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    actionClasses(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    actionForMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    actionsController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    addBlankPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    addLayer(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    addLayer_changeName(...args: any[]): any;
    /* typeEncoding=@44@0:8@16@24c32^@36 */
    addLayerFromImageAtURL_toGroup_fitPixels_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    alertDocumentCorruptionWasDetected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allExportableLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    artboards(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    askForUserInput_initialValue(...args: any[]): any;
    /* typeEncoding=@40@0:8@16q24@32 */
    askForUserInput_ofType_initialValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    askToOpenDocumentRepairingMetadata(...args: any[]): any;
    /* typeEncoding=c28@0:8@16c24 */
    askToOpenDocumentWithMissingFonts_savingWillChangeFonts(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    askToOpenNewerDocument(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    awakeFromNib(): void;
    /* typeEncoding=@16@0:8 */
    backButtonController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    badgeController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    cacheFlushInProgress(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cacheManager(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24Q32 */
    canAsynchronouslyWriteToURL_ofType_forSaveOperation(...args: any[]): any;
    /* typeEncoding=v40@0:8@16:24^v32 */
    canCloseDocumentWithDelegate_shouldCloseSelector_contextInfo(
      ...args: any[]
    ): any;
    /* typeEncoding=c24@0:8@16 */
    canRestoreViewportAfterArtboardEdit(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    canvasColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    canvasPlaceholderView(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    changeToImmutableDocumentData_selecting_onPage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    checkForTextLayerChanges(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    close(): void;
    /* typeEncoding=@24@0:8@16 */
    closestVisibleIdentifierInToolbarForIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cloudDocumentKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cloudName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cloudShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    coalescedDetermineArtboardNotification(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    colorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    colorSpaceMismatchWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    commitHistoryIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    contactSupportAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    contentDrawView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    createActions(): void;
    /* typeEncoding=v16@0:8 */
    currentArtboardDidChange(): void;
    /* typeEncoding=@16@0:8 */
    currentContentViewController(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    currentHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    currentHandlerChanged(): void;
    /* typeEncoding=@16@0:8 */
    currentHandlerKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    currentHorizontalRulerData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    /**
     * 获取当前页面
     **/
    currentPage(...args: any[]): MSPage;
    /* typeEncoding=@16@0:8 */
    currentVerticalRulerData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    dataForRequest_ofType(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    dealloc(): void;
    /* typeEncoding=v32@0:8@16@24 */
    debugCountObject_counts(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    debugCountObjects(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    debugRunJSAPIUnitTests(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    defaultFirstResponder(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    deleteSymbolMasters(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    determineCurrentArtboard(): void;
    /* typeEncoding=@16@0:8 */
    documentColorSpace(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    documentData(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    documentData_didChangeToPage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    documentData_immediatelyShowSelectionForLayer(...args: any[]): any;
    /* typeEncoding=@40@0:8@16@24@32 */
    documentData_metadataForKey_object(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24@32@40 */
    documentData_storeMetadata_forKey_object(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    documentData_temporarilyHideSelectionForLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    documentDataImmediatelyShowSelectionForAllLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    documentDataUsedForSupplementaryViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    documentDidChange(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    documentWindow(...args: any[]): any;
    /* typeEncoding=@24@0:8^@16 */
    duplicateAndReturnError(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    editingLibraryWarning(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    eventHandlerManager(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    eventHandlerManager_didChangeCurrentHandler(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    exportRequestForArtboardOrSlice(...args: any[]): any;
    /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
    exportRequestWithName_rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    exportSliceLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    exportableLayerSelection(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    findCurrentArtboardGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    flagsChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    flagsChangedNotification(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    flushCachesIfNecessary(): void;
    /* typeEncoding=c32@0:8@16^@24 */
    handleNewerDocument_error(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    hasArtboards(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    hasLayerSelectionChanged(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    hasOpenedImageFile(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    hasScheduledDocumentDidChange(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    hasScheduledInspectorReload(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    historyMaker(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    historyMaker_didApplyHistoryUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    historyMakerDidProgressHistory(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    historyMakerDidRevertHistory(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    hudClientName(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    hudDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    hudSetMonitor(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    immutableDocumentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    init(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    inspectorController(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    inspectorIsMain(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    inspectorPlaceholderView(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    installedFontsDidChange(): void;
    /* typeEncoding=c16@0:8 */
    isCurrent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isInspectorVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isLayerListVisible(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isLibraryDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isRulersVisible(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    isSeparatorIdentifier(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isShowingMeasurements(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    layerHasHoverStateInCanvas(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    layerPositionPossiblyChanged(): void;
    /* typeEncoding=v16@0:8 */
    layerSelectionDidChange(): void;
    /* typeEncoding=@16@0:8 */
    layerStyles(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    layerTreeLayoutDidChange(): void;
    /* typeEncoding=c32@0:8@16@24 */
    layerWouldOverlapExistingLayer_inGroup(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    layersWithHiddenSelectionHandles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    libraryControllerDidChange(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    loadInspectorPanel(): void;
    /* typeEncoding=v16@0:8 */
    loadLayerListPanel(): void;
    /* typeEncoding=@24@0:8@16 */
    localObjectForObjectReference(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    menuNeedsUpdate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    menuWillOpen(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    messageView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    migrateUIMetadataWithDocumentData(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    mostRecentCacheFlushingTime(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    mutableUIMetadata(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    nextReadFromURLIsReload(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    normalHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    notifyIfDocumentBecameCurrent(): void;
    /* typeEncoding=v16@0:8 */
    notifyIfDocumentResignedCurrent(): void;
    /* typeEncoding=v48@0:8@16@24@32^v40 */
    observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    offsetLayerIfNecessary_forInsertingInGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    onFilterChanged(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    openLibrariesForForeignObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    originalViewportsForEditedSymbols(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    pageListCollapsed(...args: any[]): any;
    /* typeEncoding=d16@0:8 */
    pageListHeight(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    pageTreeLayoutDidChange(): void;
    /* typeEncoding=@16@0:8 */
    pages(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    performPostPageSwitchUpdates(): void;
    /* typeEncoding=@16@0:8 */
    pluginContext(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    prepareForSaveOperation(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    previewColorSpaceForItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    previousSelectedLayers(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    printOperationWithSettings_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    putSelectionBackInCanvasIfPossible(): void;
    /* typeEncoding=c40@0:8@16@24^@32 */
    readDocumentFromURL_ofType_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    readEPSFromURL_error(...args: any[]): any;
    /* typeEncoding=c48@0:8@16@24^c32^@40 */
    readFromDocumentWrapper_ofType_corruptionDetected_error(...args: any[]): any;
    /* typeEncoding=c40@0:8@16@24^@32 */
    readFromURL_ofType_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    readImageFromPath_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    readPDFFromURL_error(...args: any[]): any;
    /* typeEncoding=c32@0:8@16^@24 */
    readSVGFromURL_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    refreshInspectorIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    refreshLayerListIfNecessary(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    refreshOverlay(): void;
    /* typeEncoding=v24@0:8Q16 */
    refreshSidebarWithMask(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    refreshWindowBadge(): void;
    /* typeEncoding=v24@0:8@16 */
    registerHistoryMomentTitle(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    reloadInspector(): void;
    /* typeEncoding=v16@0:8 */
    reloadTouchBars(): void;
    /* typeEncoding=v16@0:8 */
    reloadView(): void;
    /* typeEncoding=v24@0:8@16 */
    removePage(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    removeViewportForArtboard(...args: any[]): any;
    /* typeEncoding=v28@0:8@16c24 */
    reportSaveActionAtURL_wasAutosave(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    resetDocumentData(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    resetHiddenSelectionHandles(): void;
    /* typeEncoding=@16@0:8 */
    resetHiddenSelectionHandlesTimer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    resetImportedDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    restoreViewportAfterArtboardEdit(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    returnToDefaultFirstResponder(): void;
    /* typeEncoding=v16@0:8 */
    returnToNormalHandler(): void;
    /* typeEncoding=c40@0:8@16@24^@32 */
    revertToContentsOfURL_ofType_error(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    saveArtboardOrSlice_toFile(...args: any[]): any;
    /* typeEncoding=v48@0:8@16Q24@32@40 */
    saveDocumentToURL_saveMode_context_callback(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    saveExportRequest_toFile(...args: any[]): any;
    /* typeEncoding=v48@0:8@16@24Q32@?40 */
    saveToURL_ofType_forSaveOperation_completionHandler(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    scheduleReloadInspector(): void;
    /* typeEncoding=v16@0:8 */
    scheduleSupplementaryViewRefresh(): void;
    /* typeEncoding={CGPoint=dd}16@0:8 */
    scrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    selectToolbarItemWithIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    selectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setActionsController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setBackButtonController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setBadgeController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setCacheFlushInProgress(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCanvasPlaceholderView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCloudShare(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setColorSpaceMismatchWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCurrentArtboard(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCurrentContentViewController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCurrentPage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    setDelegatesToNil(): void;
    /* typeEncoding=v24@0:8@16 */
    setDocumentData(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setDocumentDataUsedForSupplementaryViews(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setDocumentWindow(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setEditingLibraryWarning(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setEventHandlerManager(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setExportableLayerSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setFileURL(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setHasOpenedImageFile(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setHasScheduledDocumentDidChange(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setHasScheduledInspectorReload(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setHistoryMaker(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setInspectorController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setInspectorPlaceholderView(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setLayersWithHiddenSelectionHandles(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setMessageView(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    setMostRecentCacheFlushingTime(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setMutableUIMetadata(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setNextReadFromURLIsReload(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setOriginalViewportsForEditedSymbols(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setPageListCollapsed(...args: any[]): any;
    /* typeEncoding=v24@0:8d16 */
    setPageListHeight(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setPreviousSelectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setResetHiddenSelectionHandlesTimer(...args: any[]): any;
    /* typeEncoding=v32@0:8{CGPoint=dd}16 */
    setScrollOrigin(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setSidebarController(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setSplitViewController(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setSupplementaryViewRefreshIsScheduled(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setTemporarilyDisableSelectionHiding(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setToolbarConstructor(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setUIMetadata(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    setViewControllersToNil(): void;
    /* typeEncoding=v16@0:8 */
    setViewsToNil(): void;
    /* typeEncoding=v24@0:8d16 */
    setZoomValue(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    shouldCreateToolbar(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    shouldDrawSelectionForLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    showMessage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    showNonDefaultColorSpaceWarningIfApplicable(): void;
    /* typeEncoding=v16@0:8 */
    showWindows(): void;
    /* typeEncoding=@16@0:8 */
    sidebarController(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    sidebarController_didChangeSelection(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    sidebarController_didHandleBadgePressOn(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    sidebarController_hoveredLayerDidChangeTo(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    sidebarController_validateRemovalOfPages_withRemovalBlock(
      ...args: any[]
    ): any;
    /* typeEncoding=@24@0:8@16 */
    sidebarControllerContextMenuItemsForCurrentSelection(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    sidebarControllerDidUpdate(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    splitViewController(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    storeViewport_andInstance_forArtboard(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    supplementaryViewRefreshIsScheduled(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    symbolReferenceForRecipe(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    temporarilyDisableSelectionHiding(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    temporarilyDisableSelectionHidingDuringBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    toggleClickThrough(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    toggleHandlerClass(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    toolbar(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    toolbarConstructor(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    updateCountDownButton(): void;
    /* typeEncoding=v16@0:8 */
    updateFilterSettings(): void;
    /* typeEncoding=v16@0:8 */
    updateHistoryWithSelection(): void;
    /* typeEncoding=v16@0:8 */
    updateSelectionFollowingChangeToImmutableDocumentData(): void;
    /* typeEncoding=c32@0:8@16^@24 */
    validateDocument_error(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    validateMenuItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    validateMenuItemTitleAndState(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    validateSelectionOfLayer_proposedIDsOfLayersToSelect(...args: any[]): any;
    /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
    visibleCanvasRectForDocumentData(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    visitSymbolMaster_withReturnInstance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    visitSymbolMasterWithID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    warnIfEditingLibrary(): void;
    /* typeEncoding=v16@0:8 */
    warnIfPluginsDisabled(): void;
    /* typeEncoding=@16@0:8 */
    window(
      ...args: any[]
    ): {
      convertRectToScreen(rect: NSRect): CGRect;
    };
    /* typeEncoding=v24@0:8@16 */
    windowControllerDidLoadNib(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidBecomeKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidBecomeMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidEndSheet(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidEnterVersionBrowser(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidExitFullScreen(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidExitVersionBrowser(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidResignKey(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidResignMain(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowDidResize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    windowNibName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowWillBeginSheet(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowWillClose(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    windowWillEnterFullScreen(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    wireDocumentDataToUI(): void;
    /* typeEncoding=c56@0:8@16@24Q32@40^@48 */
    writeToURL_ofType_forSaveOperation_originalContentsURL_error(
      ...args: any[]
    ): any;
    /* typeEncoding=d16@0:8 */
    zoomValue(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    zoomValueDidChange(): void;
  }
  
  declare class MSDocumentAction extends MSAction /* implements NSMenuDelegate, NSTouchBarDelegate */ {
    /* typeEncoding=@"NSTouchBarItem", ivar=_cachedTouchedBarItem, attributes=(retain,nonatomic) */
    cachedTouchedBarItem(): NSTouchBarItem;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"MSDocument", ivar=_document, attributes=(assign,nonatomic,weak) */
    document(): MSDocument;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
    historyMomentTitle(): NSString;
    /* typeEncoding=@"NSEvent", ivar=_previousEvent, attributes=(assign,nonatomic,weak) */
    previousEvent(): NSEvent;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    cachedTouchedBarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    contentDrawView(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    contextForActionObservers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    currentHandler(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    currentPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    document(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    historyMomentTitle(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    initWithDocument(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isInNormalHandler(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isTouchBarItemSelected(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    makeTouchBarItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    makeTouchBarItemButton(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    menu(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    performAction(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    previousEvent(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    refreshOverlay(): void;
    /* typeEncoding=v16@0:8 */
    refreshTouchBarItem(): void;
    /* typeEncoding=v24@0:8@16 */
    repopulateMenu(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    selectedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCachedTouchedBarItem(...args: any[]): any;
    /* typeEncoding=@24@0:8#16 */
    setCurrentHandlerClass(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setPreviousEvent(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    shouldUseImageForTouchBarItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    showTouchBarPopover(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    switchToNormalHandler(): void;
    /* typeEncoding=@24@0:8#16 */
    toggleHandlerClass(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    touchBar_makeItemForIdentifier(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    touchBarImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    touchBarItem(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    touchBarItemButtonShouldShowState(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    touchBarItemSizing(...args: any[]): any;
  }
  
  declare class MSDocumentController extends NSDocumentController {
    /* typeEncoding=v24@0:8@16 */
    noteNewRecentDocument(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    noteNewRecentDocumentURL(...args: any[]): any;
    /* typeEncoding=v36@0:8@16c24@?28 */
    openDocumentWithContentsOfURL_display_completionHandler(...args: any[]): any;
    /* typeEncoding=v44@0:8@16c24@28@36 */
    openDocumentWithContentsOfURL_display_context_callback(...args: any[]): any;
    /* typeEncoding=v44@0:8@16@24c32@?36 */
    reopenDocumentForURL_withContentsOfURL_display_completionHandler(
      ...args: any[]
    ): any;
    /* typeEncoding=c24@0:8@16 */
    shoudNoteRecentDocumentForType(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    typeForContentsOfURL_error(...args: any[]): any;
  }
  
  declare class MSDocumentData extends _MSDocumentData /* implements MSLayerContainment, MSDocumentData */ {
    /* typeEncoding=c, ivar=_autoExpandGroupsInLayerList, attributes=(assign,nonatomic) */
    autoExpandGroupsInLayerList(): boolean;
    /* typeEncoding=@"BCCache", ivar=_cache, attributes=(retain,nonatomic) */
    cache(): BCCache;
    /* typeEncoding=@"MSPage", ivar=(null), attributes=(retain,nonatomic) */
    currentPage(): MSPage;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"<MSDocumentDataDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
    delegate(): MSDocumentDataDelegate;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"MSFontList", ivar=_fontList, attributes=(retain,nonatomic) */
    fontList(): MSFontList;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=@"NSDictionary", ivar=_metadata, attributes=(retain,nonatomic) */
    metadata(): NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    pages(): NSArray;
    /* typeEncoding=@"NSArray", ivar=_selectedOverrides, attributes=(retain,nonatomic) */
    selectedOverrides(): NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
    /* typeEncoding=@"NSDictionary", ivar=_symbolMap, attributes=(assign,nonatomic,readonly) */
    symbolMap(): NSDictionary;
    /* typeEncoding=@"NSData", ivar=_textPreviewData, attributes=(retain,nonatomic) */
    textPreviewData(): NSData;
  
    /* typeEncoding=v16@0:8 */
    static initialize(): void;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    UIMetadataKey(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    addBlankPage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    addCopyOfInstanceMasterToDocumentIfNecessary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    addCopyOfMasterToDocumentIfNecessary(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    addSymbolMaster(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allArtboards(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allForeignObjects(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allLayerStyles(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    allTextStyles(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    artboardWithID(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    assignColorSpace(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    autoExpandGroupsInLayerList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    containedLayers(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    containedLayersCount(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsMultipleLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsNoOrOneLayers(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsOneLayer(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    convertToColorSpace(...args: any[]): any;
    /* typeEncoding=v32@0:8@16Q24 */
    copyPropertiesToObject_options(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    correctInvalidGamma(): void;
    /* typeEncoding=@16@0:8 */
    currentPage(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    dealloc(): void;
    /* typeEncoding=@16@0:8 */
    defaultPagesArray(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    delegate(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    determineCurrentArtboard(): void;
    /* typeEncoding=@16@0:8 */
    documentData(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    documentIsEmpty(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    enumerateColorConvertiblesIgnoringForeignSymbols(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@?32 */
    enumerateForeignObjects_withLibraries_block(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    enumerateLayers(...args: any[]): any;
    /* typeEncoding=c32@0:8Q16@?24 */
    enumerateLayersWithOptions_block(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    firstLayer(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    fontList(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    images(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    immediatelyShowSelectionForAllLayers(): void;
    /* typeEncoding=Q24@0:8@16 */
    indexOfLayer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    invalidateAffectedSymbolInstances(): void;
    /* typeEncoding=v16@0:8 */
    invalidateFonts(): void;
    /* typeEncoding=@16@0:8 */
    lastLayer(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    layerAtIndex(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    layerStyleWithID(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    layerTreeLayoutDidChange(): void;
    /* typeEncoding=@24@0:8@16 */
    layerWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    layersByObjectID(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    libraryForForeignObject_inLibraries(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    localSymbols(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    metadata(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    metadataForKey_object(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    nameForNewPage(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    object_didChangeProperty(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    objectDidInit(): void;
    /* typeEncoding=v16@0:8 */
    performInitEmptyObject(): void;
    /* typeEncoding=v24@0:8@16 */
    performInitWithImmutableModelObject(...args: any[]): any;
    /* typeEncoding=v32@0:8@16@24 */
    populateDictionary_withChildrenOf(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    purgeForeignObjects(): void;
    /* typeEncoding=v16@0:8 */
    purgeForeignStyles(): void;
    /* typeEncoding=v16@0:8 */
    purgeForeignSymbols(): void;
    /* typeEncoding=v16@0:8 */
    refreshOverlay(): void;
    /* typeEncoding=v28@0:8@16c24 */
    removePages_detachInstances(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    removeShareableObjectsFromInstanceOverrides(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    replaceExistingCreationMetadata(): void;
    /* typeEncoding=v24@0:8@16 */
    replaceFonts(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24c32c36 */
    replaceInstancesOfColor_withColor_ignoreAlphaWhenMatching_replaceAlphaOfOriginalColor(
      ...args: any[]
    ): any;
    /* typeEncoding=@16@0:8 */
    selectedLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    selectedOverrides(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setAutoExpandGroupsInLayerList(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCurrentPage(...args: any[]): any;
    /* typeEncoding=v24@0:8Q16 */
    setCurrentPageIndex(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setDelegate(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setFontList(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setMetadata(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setSelectedOverrides(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setTextPreviewData(...args: any[]): any;
    /* typeEncoding=@24@0:8Q16 */
    sharedObjectContainerOfType(...args: any[]): any;
    /* typeEncoding=v40@0:8@16@24@32 */
    storeMetadata_forKey_object(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    stylesReferencedInDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    symbolMap(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    symbolWithID(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    symbolsPage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    symbolsPageOrCreateIfNecessary(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    symbolsReferencedByInstances(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    symbolsReferencedBySymbolInstances(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    symbolsReferencedBySymbolMasters(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    temporarilyHideSelectionForLayers(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    textPreviewData(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    textStyleWithID(...args: any[]): any;
  }
  
  declare class MSDocumentError extends NSError {
    /* typeEncoding=@24@0:8Q16 */
    static errorWithCode(...args: any[]): any;
  
    /* typeEncoding=@16@0:8 */
    localizedFailureReason(...args: any[]): any;
  }
  
  declare class MSDocumentImporter extends NSObject {
    /* typeEncoding=@"NSArray", ivar=_addedLayers, attributes=(retain,nonatomic) */
    addedLayers(): NSArray;
    /* typeEncoding=@"NSURL", ivar=_fileURL, attributes=(retain,nonatomic) */
    fileURL(): NSURL;
    /* typeEncoding=@"MSLayerGroup", ivar=_group, attributes=(retain,nonatomic) */
    group(): MSLayerGroup;
    /* typeEncoding=@"<MSImporter>", ivar=_importer, attributes=(retain,nonatomic) */
    importer(): MSImporter;
    /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
    name(): NSString;
    /* typeEncoding=@"CHProgressSheet", ivar=_sheet, attributes=(retain,nonatomic) */
    sheet(): CHProgressSheet;
    /* typeEncoding=@"MSContentDrawView", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly,weak) */
    view(): MSContentDrawView;
  
    /* typeEncoding=v40@0:8@16@24@32 */
    static importFromURL_inPage_importer(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    addedLayers(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    close(): void;
    /* typeEncoding=v16@0:8 */
    collapseSinglePage(): void;
    /* typeEncoding=c16@0:8 */
    expandPages(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    fileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    group(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    importer(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    importerDidFinish(): void;
    /* typeEncoding=@16@0:8 */
    name(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    run(): void;
    /* typeEncoding=v24@0:8@16 */
    setAddedLayers(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setFileURL(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setGroup(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setImporter(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setName(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    sheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    showProgressSheet(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    view(...args: any[]): any;
  }
  
  declare class MSDocumentReader extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    UIMetadata(): NSDictionary;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    compatibilityVersion(): number;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    containsPreviewImage(): boolean;
    /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
    documentWasMigrated(): boolean;
    /* typeEncoding=@"NSError", ivar=_error, attributes=(retain,nonatomic) */
    error(): NSError;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    libraryPreviewImage(): NSImage;
    /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
    metadata(): NSDictionary;
    /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
    missingFonts(): NSArray;
    /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
    previewImage(): NSImage;
    /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
    version(): number;
  
    /* typeEncoding=I24@0:8@16 */
    static first4bytesOfFileAtURL(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    static readerForDocumentAtURL(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    UIMetadata(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    compatibilityVersion(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsLibraryPreviewImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsPreviewImage(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    documentWasMigrated(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    error(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    libraryPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    metadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    missingFonts(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    open(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    previewImage(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    previewImageWithMaximumSize(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    readDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    readImmutableDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    repair(): void;
    /* typeEncoding=v24@0:8@16 */
    setError(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    validate(...args: any[]): any;
    /* typeEncoding=q16@0:8 */
    version(...args: any[]): any;
  }
  
  declare class MSDocumentTree extends NSObject {
    /* typeEncoding=@"BCCache", ivar=_cache, attributes=(retain,nonatomic) */
    cache(): BCCache;
    /* typeEncoding=@"MSImmutableDocumentData", ivar=_documentData, attributes=(assign,nonatomic,readonly) */
    documentData(): MSImmutableDocumentData;
    /* typeEncoding=@"NSMapTable", ivar=_parentByObject, attributes=(retain,nonatomic) */
    parentByObject(): NSMapTable;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@24@0:8@16 */
    ancestorLayersOfObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    ancestorsOfObject(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    cache(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    documentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    initWithDocumentData(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    parentByObject(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    parentForObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setCache(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setParentByObject(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    storeParentsForLayersContainedInParent(...args: any[]): any;
  }
  
  declare class MSDocumentWindow extends NSWindow {
    /* typeEncoding=@"NSEvent", ivar=_lastForwardedKeyEvent, attributes=(assign,nonatomic,weak) */
    lastForwardedKeyEvent(): NSEvent;
    /* typeEncoding=@"BCWindowBadge", ivar=_titleBarBadge, attributes=(retain,nonatomic) */
    titleBarBadge(): BCWindowBadge;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=v24@0:8@16 */
    cancelOperation(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    keyDown(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    lastForwardedKeyEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    mouseDown(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    refreshAppearanceDependentViews(): void;
    /* typeEncoding=c24@0:8:16 */
    respondsToSelector(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    sendEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setAppearance(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setLastForwardedKeyEvent(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setTitleBarBadge(...args: any[]): any;
    /* typeEncoding=c32@0:8@16@24 */
    shouldDismissPopover_event(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    titleBarBadge(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    touchBar(...args: any[]): any;
  }
  
  declare class MSDocumentWindowContentView extends NSView {
    /* typeEncoding=v16@0:8 */
    viewDidChangeEffectiveAppearance(): void;
  }
  
  declare class MSDocumentWriter extends NSObject /* implements MSDocumentTextPreviews, MSDocumentPreviewGeneration */ {
    /* typeEncoding=@"NSDictionary", ivar=_UIMetadata, attributes=(retain,nonatomic) */
    UIMetadata(): NSDictionary;
    /* typeEncoding=@"MSJSONZippedArchiver", ivar=_archiver, attributes=(retain,nonatomic) */
    archiver(): MSJSONZippedArchiver;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=@"NSData", ivar=_libraryPreview, attributes=(retain,nonatomic) */
    libraryPreview(): NSData;
    /* typeEncoding=@"NSData", ivar=_previewData, attributes=(retain,nonatomic) */
    previewData(): NSData;
    /* typeEncoding=@?, ivar=_previewGenerationBlock, attributes=(copy,nonatomic) */
    previewGenerationBlock(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
  
    /* typeEncoding=@16@0:8 */
    static metadataForNewFile(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    UIMetadata(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    archiver(...args: any[]): any;
    /* typeEncoding=@32@0:8@16@24 */
    createPreviewPDFDataForTextLayers_document(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    createTextPreviewPDFDataForDocumentData(...args: any[]): any;
    /* typeEncoding=@32@0:8@16^@24 */
    findLibraryPreviewArtboardForDocument_outPage(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    generatePreviewsForDocument(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    initWithFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    libraryPreview(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    previewData(...args: any[]): any;
    /* typeEncoding=@?16@0:8 */
    previewGenerationBlock(...args: any[]): any;
    /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
    previewImageForDocument_page_rect(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setArchiver(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setLibraryPreview(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setPreviewData(...args: any[]): any;
    /* typeEncoding=v24@0:8@?16 */
    setPreviewGenerationBlock(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setUIMetadata(...args: any[]): any;
    /* typeEncoding=c36@0:8@16c24^@28 */
    writeDocumentData_isAutosave_error(...args: any[]): any;
  }
  
  declare class MSDocumentZippedJSONReader extends MSDocumentReader {
    /* typeEncoding=@"MSJSONZippedUnarchiver", ivar=_unarchiver, attributes=(retain,nonatomic) */
    unarchiver(): MSJSONZippedUnarchiver;
  
    /* typeEncoding=q40@0:8^{CGImageSource=}16{CGSize=dd}24 */
    static maximumPixelSizeForImageSource_maximumSize(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    UIMetadata(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    containsPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    initWithFileURL(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    libraryPreviewImage(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    metadata(...args: any[]): any;
    /* typeEncoding=c24@0:8^@16 */
    open(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    previewBitmapImageRepWithSize(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    previewImage(...args: any[]): any;
    /* typeEncoding=@32@0:8{CGSize=dd}16 */
    previewImageWithMaximumSize(...args: any[]): any;
    /* typeEncoding=@32@0:8^c16^@24 */
    readImmutableDataWithCorruptionDetected_error(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setUnarchiver(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    unarchiver(...args: any[]): any;
    /* typeEncoding=Q16@0:8 */
    validate(...args: any[]): any;
  }
  
  declare class MSDocumentationSearchEntry extends NSObject {
    /* typeEncoding=@"NSDictionary", ivar=_data, attributes=(copy,nonatomic) */
    data(): NSDictionary;
    /* typeEncoding=c, ivar=_isDuplicateResult, attributes=(assign) */
    isDuplicateResult(): boolean;
  
    /* typeEncoding=v24@0:8@16 */
    static markSearchEntriesAsDuplicates(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    static searchEntryWithDictionary(...args: any[]): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=@16@0:8 */
    data(...args: any[]): any;
    /* typeEncoding=c16@0:8 */
    isDuplicateResult(...args: any[]): any;
    /* typeEncoding=c24@0:8@16 */
    matchesSearchQuery(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setData(...args: any[]): any;
    /* typeEncoding=v20@0:8c16 */
    setIsDuplicateResult(...args: any[]): any;
    /* typeEncoding=v16@0:8 */
    show(): void;
    /* typeEncoding=@16@0:8 */
    titles(...args: any[]): any;
  }
  
  declare class MSDocumentationSearcher extends NSObject /* implements NSUserInterfaceItemSearching */ {
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    debugDescription(): NSString;
    /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
    description(): NSString;
    /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
    hash(): number;
    /* typeEncoding=@"NSOperationQueue", ivar=_queue, attributes=(retain) */
    queue(): NSOperationQueue;
    /* typeEncoding=@"NSArray", ivar=_searchEntries, attributes=(retain) */
    searchEntries(): NSArray;
    /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
    superclass(): any;
  
    /* typeEncoding=v16@0:8 */
    _cxx_destruct(): void;
    /* typeEncoding=v16@0:8 */
    addDownloadOperation(): void;
    /* typeEncoding=v32@0:8@16@?24 */
    addSearchOperationForItemsWithSearchString_completionBlock(
      ...args: any[]
    ): any;
    /* typeEncoding=v16@0:8 */
    documentationMightHaveChanged(): void;
    /* typeEncoding=@16@0:8 */
    downloadRequest(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    init(...args: any[]): any;
    /* typeEncoding=@24@0:8@16 */
    localizedTitlesForItem(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    performActionForItem(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    queue(...args: any[]): any;
    /* typeEncoding=@16@0:8 */
    searchEntries(...args: any[]): any;
    /* typeEncoding=v40@0:8@16q24@?32 */
    searchForItemsWithSearchString_resultLimit_matchedItemHandler(
      ...args: any[]
    ): any;
    /* typeEncoding=v24@0:8@16 */
    setQueue(...args: any[]): any;
    /* typeEncoding=v24@0:8@16 */
    setSearchEntries(...args: any[]): any;
  }