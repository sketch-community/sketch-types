declare class MSAssetPickerHeaderViewDelegate {}

declare class MSAssetPreferenceItemDelegate {}

declare class MSAssetCollection extends _MSAssetCollection {
  /* typeEncoding=v24@0:8@16 */
  addAsset(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  addAsset_withName(...args: any[]): any;
  /* typeEncoding=@24@0:8Q16 */
  arrayForType(...args: any[]): any;
  /* typeEncoding=@32@0:8Q16Q24 */
  assetAtIndex_ofType(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  indexesOfAsset(...args: any[]): any;
  /* typeEncoding=c40@0:8Q16Q24Q32 */
  moveAssetAtIndex_beforeObjectAtIndex_ofType(...args: any[]): any;
  /* typeEncoding=@40@0:8@16Q24Q32 */
  moveAssetInArray_fromIndex_toIndex(...args: any[]): any;
  /* typeEncoding=@32@0:8Q16Q24 */
  nameOfAssetAtIndex_ofType(...args: any[]): any;
  /* typeEncoding=Q24@0:8Q16 */
  numberOfAssetsOfType(...args: any[]): any;
  /* typeEncoding=v32@0:8Q16Q24 */
  removeAssetAtIndex_ofType(...args: any[]): any;
  /* typeEncoding=v40@0:8@16Q24Q32 */
  setName_forAssetAtIndex_ofType(...args: any[]): any;
}

declare class MSAssetCollectionLayout extends NSCollectionViewFlowLayout {
  /* typeEncoding=Q, ivar=_displayMode, attributes=(assign,nonatomic) */
  displayMode(): number;
  /* typeEncoding=Q, ivar=_itemSizeMode, attributes=(assign,nonatomic) */
  itemSizeMode(): number;
  /* typeEncoding=@"NSIndexSet", ivar=_updatedIndexes, attributes=(retain,nonatomic) */
  updatedIndexes(): NSIndexSet;

  /* typeEncoding=d24@0:8Q16 */
  static interItemSpacingForItemSizeMode(...args: any[]): any;
  /* typeEncoding={CGSize=dd}72@0:8Q16Q24d32{NSEdgeInsets=dddd}40 */
  static itemSizeForItemSizeMode_displayMode_collectionViewWidth_sectionInsets(
    ...args: any[]
  ): any;
  /* typeEncoding=#16@0:8 */
  static layoutAttributesClass(...args: any[]): any;
  /* typeEncoding=d32@0:8Q16Q24 */
  static lineSpacingForItemSizeMode_displayMode(...args: any[]): any;
  /* typeEncoding={NSEdgeInsets=dddd}32@0:8Q16Q24 */
  static sectionInsetsForItemSizeMode_displayMode(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=Q16@0:8 */
  displayMode(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  itemSizeMode(...args: any[]): any;
  /* typeEncoding=@32@0:8{CGPoint=dd}16 */
  layoutAttributesForDropTargetAtPoint(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  layoutAttributesForElementsInRect(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  layoutAttributesForSupplementaryViewOfKind_atIndexPath(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  recalculateLayoutParameters(): void;
  /* typeEncoding=v24@0:8Q16 */
  setDisplayMode(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setItemSizeMode(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setUpdatedIndexes(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  updatedIndexes(...args: any[]): any;
}

declare class MSAssetCollectionLayoutAttributes extends NSCollectionViewLayoutAttributes {
  /* typeEncoding=Q, ivar=_displayMode, attributes=(assign,nonatomic) */
  displayMode(): number;
  /* typeEncoding=Q, ivar=_itemSizeMode, attributes=(assign,nonatomic) */
  itemSizeMode(): number;

  /* typeEncoding=@24@0:8^{_NSZone=}16 */
  copyWithZone(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  displayMode(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  hash(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isEqual(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  itemSizeMode(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setDisplayMode(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setItemSizeMode(...args: any[]): any;
}

declare class MSAssetCollectionModifiedIndicator extends NSView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class MSAssetCollectionNoContentViewController extends NSViewController {}

declare class MSAssetCollectionNoContentViewPreviewPlaceholder extends NSView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class MSAssetCollectionViewDataSource extends NSObject /* implements NSCollectionViewDataSource */ {
  /* typeEncoding=@"MSAssetCollection", ivar=_assetCollection, attributes=(retain,nonatomic) */
  assetCollection(): MSAssetCollection;
  /* typeEncoding=Q, ivar=_assetType, attributes=(assign,nonatomic) */
  assetType(): number;
  /* typeEncoding=@"NSIndexSet", ivar=_cachedHighlightedIndexes, attributes=(retain,nonatomic) */
  cachedHighlightedIndexes(): NSIndexSet;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSAssetCollectionViewSourceDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSAssetCollectionViewSourceDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  editable(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"<MSAsset>", ivar=_highlightedAsset, attributes=(retain,nonatomic) */
  highlightedAsset(): MSAsset;
  /* typeEncoding=@"NSString", ivar=_identifier, attributes=(retain,nonatomic) */
  identifier(): NSString;
  /* typeEncoding=c, ivar=_isLibrary, attributes=(assign,nonatomic) */
  isLibrary(): boolean;
  /* typeEncoding=@"<MSAssetCollectionViewSourceItemProvider>", ivar=_itemProvider, attributes=(assign,nonatomic,weak) */
  itemProvider(): MSAssetCollectionViewSourceItemProvider;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
  name(): NSString;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSString", ivar=_title, attributes=(assign,nonatomic,readonly) */
  title(): NSString;

  /* typeEncoding=@32@0:8@16Q24 */
  static pasteboardRepresentationForAsset_ofType(...args: any[]): any;
  /* typeEncoding=@24@0:8Q16 */
  static pasteboardTypeForAssetType(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@24@0:8@16 */
  addAsset(...args: any[]): any;
  /* typeEncoding=@24@0:8Q16 */
  assetAtIndex(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  assetCollection(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  assetType(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  cachedHighlightedIndexes(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  collectionDidMutate(): void;
  /* typeEncoding=@32@0:8@16@24 */
  collectionView_itemForRepresentedObjectAtIndexPath(...args: any[]): any;
  /* typeEncoding=q32@0:8@16q24 */
  collectionView_numberOfItemsInSection(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24@32 */
  collectionView_viewForSupplementaryElementOfKind_atIndexPath(
    ...args: any[]
  ): any;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  deleteAssetAtIndexPath(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  editable(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  getUpdatedIndexes(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  highlightAsset_inCollectionView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  highlightedAsset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  identifier(...args: any[]): any;
  /* typeEncoding=@68@0:8@16Q24@32@40@48c56@60 */
  initWithAssetCollection_assetType_identifier_name_title_isLibrary_delegate(
    ...args: any[]
  ): any;
  /* typeEncoding=c16@0:8 */
  isLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  itemProvider(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  markUpdatedIndexesAsRead(): void;
  /* typeEncoding=v32@0:8@16@24 */
  moveAssetAtIndexPath_toIndexPath(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  nameOfAssetAtIndexPath(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  numberOfAssets(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  pasteboardRepresentationForIndexPath(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  prepareCollectionView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  registerDraggedTypesForCollectionView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAssetCollection(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setAssetType(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCachedHighlightedIndexes(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHighlightedAsset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIdentifier(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsLibrary(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setItemProvider(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  setName_ofAssetAtIndexPath(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  title(...args: any[]): any;
}

declare class MSAssetCollectionViewItem extends NSCollectionViewItem /* implements NSMenuDelegate */ {
  /* typeEncoding=@"NSArray", ivar=_alternativeCollections, attributes=(retain,nonatomic) */
  alternativeCollections(): NSArray;
  /* typeEncoding=@"<MSAsset>", ivar=_asset, attributes=(retain,nonatomic) */
  asset(): MSAsset;
  /* typeEncoding=c, ivar=_assetHighlighted, attributes=(assign,nonatomic) */
  assetHighlighted(): boolean;
  /* typeEncoding=@"NSString", ivar=_assetName, attributes=(retain,nonatomic) */
  assetName(): NSString;
  /* typeEncoding=@"NSArray", ivar=_currentSpecialMenuItems, attributes=(retain,nonatomic) */
  currentSpecialMenuItems(): NSArray;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSAssetCollectionViewItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSAssetCollectionViewItemDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=_displayMode, attributes=(assign,nonatomic) */
  displayMode(): number;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=Q, ivar=_itemSizeMode, attributes=(assign,nonatomic) */
  itemSizeMode(): number;
  /* typeEncoding=@"NSLayoutConstraint", ivar=_leadingPreviewConstraint, attributes=(retain,nonatomic) */
  leadingPreviewConstraint(): NSLayoutConstraint;
  /* typeEncoding=@"NSTextField", ivar=_nameField, attributes=(retain,nonatomic) */
  nameField(): NSTextField;
  /* typeEncoding=@"NSView", ivar=_previewView, attributes=(retain,nonatomic) */
  previewView(): NSView;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;

  /* typeEncoding=@60@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48d52 */
  static drawAssetViewBackgroundReturningContentPathInBounds_highlighted_scale(
    ...args: any[]
  ): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  alternativeCollections(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  applyLayoutAttributes(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  asset(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  assetHighlighted(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  assetName(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  beginNameEditingMode(): void;
  /* typeEncoding=v24@0:8@16 */
  commitNameEditing(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  copyToAssetCollection(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  currentSpecialMenuItems(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=@16@0:8 */
  defaultAssetName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  delete(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  displayMode(...args: any[]): any;
  /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
  drawAssetView_dirtyRect(...args: any[]): any;
  /* typeEncoding=v56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
  drawBackgroundView_dirtyRect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  effectiveAssetName(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  endEditingMode(): void;
  /* typeEncoding=Q16@0:8 */
  itemSizeMode(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  leadingPreviewConstraint(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  menuNeedsUpdate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  moveToAssetCollection(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  nameField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewColorSpace(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  rename(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAlternativeCollections(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAsset(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  setAsset_name(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setAssetHighlighted(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAssetName(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCurrentSpecialMenuItems(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setDisplayMode(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setItemSizeMode(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLeadingPreviewConstraint(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setNameField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewView(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setSelected(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setViewsNeedDisplay(): void;
  /* typeEncoding=c16@0:8 */
  shouldDrawHighlighted(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateUI(): void;
  /* typeEncoding=c24@0:8@16 */
  validateMenuItem(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
}

declare class MSAssetCollectionViewItemBackgroundView extends NSView {
  /* typeEncoding=@"MSAssetCollectionViewItem", ivar=_item, attributes=(assign,nonatomic,weak) */
  item(): MSAssetCollectionViewItem;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  item(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setItem(...args: any[]): any;
}

declare class MSAssetCollectionViewItemView extends NSView {
  /* typeEncoding=@"MSAssetCollectionViewItem", ivar=_item, attributes=(assign,nonatomic,weak) */
  item(): MSAssetCollectionViewItem;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  item(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setItem(...args: any[]): any;
}

declare class MSAssetContainer extends _MSAssetContainer {
  /* typeEncoding=@"<MSAsset>", ivar=(null), attributes=(retain,nonatomic) */
  asset(): MSAsset;

  /* typeEncoding=@16@0:8 */
  asset(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithAsset_name(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAsset(...args: any[]): any;
}

declare class MSAssetLibrariesPreferencePane extends MSPreferencePane /* implements MSAssetPreferenceItemDelegate, MSDropableViewDelegate, QLPreviewPanelDataSource, QLPreviewPanelDelegate, NSTableViewDelegate, NSTableViewDataSource, NSTextFieldDelegate */ {
  /* typeEncoding=@"MSAssetLibraryController", ivar=(null), attributes=(assign,nonatomic,readonly) */
  assetLibraryController(): MSAssetLibraryController;
  /* typeEncoding=@"NSWindow", ivar=_chooseLibraryPanelWindow, attributes=(assign,nonatomic,weak) */
  chooseLibraryPanelWindow(): NSWindow;
  /* typeEncoding=@"NSMenu", ivar=_contextMenu, attributes=(retain,nonatomic) */
  contextMenu(): NSMenu;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"NSWindow", ivar=_duplicateLibraryAlertWindow, attributes=(assign,nonatomic,weak) */
  duplicateLibraryAlertWindow(): NSWindow;
  /* typeEncoding=@"NSSearchField", ivar=_filterTextField, attributes=(retain,nonatomic) */
  filterTextField(): NSSearchField;
  /* typeEncoding=@"NSWindow", ivar=_genericAlertWindow, attributes=(assign,nonatomic,weak) */
  genericAlertWindow(): NSWindow;
  /* typeEncoding=c, ivar=_hasAssets, attributes=(assign,nonatomic) */
  hasAssets(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSArray", ivar=_items, attributes=(retain,nonatomic) */
  items(): NSArray;
  /* typeEncoding=@"NSArrayController", ivar=_librariesArrayController, attributes=(retain,nonatomic) */
  librariesArrayController(): NSArrayController;
  /* typeEncoding=@"NSPredicate", ivar=_librariesFilterPredicate, attributes=(copy,nonatomic) */
  librariesFilterPredicate(): NSPredicate;
  /* typeEncoding=@"NSWindow", ivar=_libraryInstallerAlertWindow, attributes=(assign,nonatomic,weak) */
  libraryInstallerAlertWindow(): NSWindow;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
  selectedLibraries(): NSArray;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
  selection(): NSArray;
  /* typeEncoding=c, ivar=_shouldEnableCogMenu, attributes=(assign,nonatomic) */
  shouldEnableCogMenu(): boolean;
  /* typeEncoding=@"NSButton", ivar=_spyglassFilterButton, attributes=(retain,nonatomic) */
  spyglassFilterButton(): NSButton;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"MSAssetLibraryTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
  tableView(): MSAssetLibraryTableView;

  /* typeEncoding=@16@0:8 */
  static identifier(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static title(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static toolbarIcon(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=c24@0:8@16 */
  acceptsPreviewPanelControl(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  activateSearchField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addLibrariesFromURLS(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addNextLibraryFromURLs(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  assetLibraryController(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  availableUserLibrariesFromLibraries(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  awakeFromNib(): void;
  /* typeEncoding=v24@0:8@16 */
  beginPreviewPanelControl(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  canLocateLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  chooseLibraryPanelWindow(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  contextMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  controlTextDidChange(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  controlTextDidEndEditing(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  currentLibrary(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dismissAlertSheet(): void;
  /* typeEncoding=@56@0:8@16@24@32@40@?48 */
  displayAlertSheetWithMessageText_informativeText_buttonTitle_cancelButton_completionHandler(
    ...args: any[]
  ): any;
  /* typeEncoding=v24@0:8@16 */
  displayCloudAlertSheetForError(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  displayDuplicateAlertSheetForRemoteAssetLibrary(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  displayGenericAlertSheetWithError_completionHandler(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  displayInstallerAlertSheetForRemoteAssetLibrary(): void;
  /* typeEncoding=c24@0:8@16 */
  doesNewPredicateGiveDifferentResult(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  draggedTypesForView(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  draggedURLsFromPasteboard(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  duplicateLibraryAlertWindow(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  endPreviewPanelControl(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  filterTextField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  genericAlertWindow(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasAssets(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasDisabledLibrariesSelected(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  importLibraryAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  items(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  learnMoreAboutLibraries(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  librariesArrayController(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  librariesFilterPredicate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  libraryControllerDidChange(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraryInstallerAlertWindow(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  locateLibraryAction(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  menuForEvent(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  multipleLibrariesSelected(...args: any[]): any;
  /* typeEncoding=q24@0:8@16 */
  numberOfPreviewItemsInPreviewPanel(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  openInSketchAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  preferenceItemHasUpdated(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@24 */
  previewPanel_handleEvent(...args: any[]): any;
  /* typeEncoding=@32@0:8@16q24 */
  previewPanel_previewItemAtIndex(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  reloadSelectingLibrary(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeLibraryAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  revealInFinderAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  searchString(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  selectedLibraries(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  selection(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setChooseLibraryPanelWindow(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setContextMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDuplicateLibraryAlertWindow(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFilterTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setGenericAlertWindow(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setHasAssets(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setItems(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibrariesArrayController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibrariesFilterPredicate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibraryInstallerAlertWindow(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldEnableCogMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSpyglassFilterButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTableView(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldEnableCogMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showContextMenu(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  sketchShareURLsFromLibraries(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  spyglassFilterButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  startDownloadForRemoteLibrary(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  syncLibraryItems(): void;
  /* typeEncoding=@24@0:8@16 */
  tableCellForLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tableView(...args: any[]): any;
  /* typeEncoding=c40@0:8@16@24@32 */
  tableView_shouldTypeSelectForEvent_withCurrentSearchString(
    ...args: any[]
  ): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_viewForTableColumn_row(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  tableViewSelectionDidChange(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  toggleLibraryEnabled(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  toggleQLPreview(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  updateAvailableForRemoteLibrary(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateQLPreview(): void;
  /* typeEncoding=c24@0:8@16 */
  validateLocateLibraryMenuItem(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateMenuItem(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateOpenInSketchMenuItem(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateRemoveLibraryMenuItem(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateRevealInFinderMenuItem(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateToggleLibraryMenuItem(...args: any[]): any;
  /* typeEncoding=Q32@0:8@16@24 */
  view_draggingEntered(...args: any[]): any;
  /* typeEncoding=Q32@0:8@16@24 */
  view_draggingUpdated(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@24 */
  view_performDragOperation(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidAppear(): void;
  /* typeEncoding=v16@0:8 */
  viewWillDisappear(): void;
}

declare class MSAssetLibrary extends NSObject /* implements QLPreviewItem, BCSortable, NSCoding, MSLibraryObject */ {
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  canLibraryBeRemoved(): boolean;
  /* typeEncoding=@"NSDate", ivar=(null), attributes=(assign,nonatomic,readonly) */
  dateLastModified(): NSDate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSAssetLibraryDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSAssetLibraryDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"MSDocumentData", ivar=_document, attributes=(retain,nonatomic) */
  document(): MSDocumentData;
  /* typeEncoding=c, ivar=_enabled, attributes=(assign,nonatomic) */
  enabled(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSString", ivar=_libraryID, attributes=(retain,nonatomic) */
  libraryID(): NSString;
  /* typeEncoding=Q, ivar=_libraryType, attributes=(assign,nonatomic,readonly) */
  libraryType(): number;
  /* typeEncoding=@"NSURL", ivar=(null), attributes=(retain) */
  locationOnDisk(): NSURL;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
  name(): NSString;
  /* typeEncoding=@, ivar=(null), attributes=(assign,readonly) */
  previewItemDisplayState(): any;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,readonly) */
  previewItemTitle(): NSString;
  /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,readonly) */
  previewItemURL(): NSURL;
  /* typeEncoding=@"NSURL", ivar=(null), attributes=(assign,nonatomic,readonly) */
  previewURL(): NSURL;
  /* typeEncoding=@"NSDictionary", ivar=_propertyListDictionaryRepresentation, attributes=(assign,nonatomic,readonly) */
  propertyListDictionaryRepresentation(): NSDictionary;
  /* typeEncoding=Q, ivar=_status, attributes=(assign,nonatomic) */
  status(): number;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  valid(): boolean;

  /* typeEncoding=@24@0:8@16 */
  static URLForTemplateLibraryNamed(...args: any[]): any;
  /* typeEncoding=Q24@0:8Q16 */
  static assetLibraryStatusForDocumentErrorCode(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static keyPathsForValuesAffectingValid(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=c16@0:8 */
  canLibraryBeRemoved(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  dateLastModified(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  document(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  enabled(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  encodeWithCoder(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  handleAssetLibraryUpdateWithCompletionHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  handleDocumentLoaded(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithCoder(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithDocumentAtURL(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraryID(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  libraryType(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  loadAsyncWithDispatchGroup_completionHandler(...args: any[]): any;
  /* typeEncoding=@24@0:8^Q16 */
  loadDocument(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  loadSynchronously(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  locationOnDisk(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewItemTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewItemURL(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewURL(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  propertyListDictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  resolveLocationOnDisk(): void;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDocument(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setEnabled(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibraryID(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLocationOnDisk(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setStatus(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  status(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  unload(): void;
  /* typeEncoding=c16@0:8 */
  valid(...args: any[]): any;
}

declare class MSAssetLibraryController extends NSObject /* implements MSAssetLibraryDelegate */ {
  /* typeEncoding=@"MSAssetLibraryUpdater", ivar=_assetLibraryUpdater, attributes=(assign,nonatomic,readonly) */
  assetLibraryUpdater(): MSAssetLibraryUpdater;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
  availableLibraries(): NSArray;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSHashTable", ivar=_delegates, attributes=(retain,nonatomic) */
  delegates(): NSHashTable;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,dynamic,nonatomic,readonly) */
  libraries(): NSArray;
  /* typeEncoding=@"NSArray", ivar=_remoteLibraries, attributes=(retain,nonatomic) */
  remoteLibraries(): NSArray;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSMutableArray", ivar=_userLibraries, attributes=(assign,nonatomic,readonly) */
  userLibraries(): NSMutableArray;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=q24@0:8@16 */
  addAssetLibraryAtURL(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24@32 */
  addRemoteLibraryFromAppcastURL_context_callback(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  addRemoteLibraryFromAppcastURL_withCompletionHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  assetLibraryChangedOnDisk(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  assetLibraryEnableStateChanged(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  assetLibraryUpdater(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  availableLibraries(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  copyInternalLibraryToApplicationSupport(): void;
  /* typeEncoding=v16@0:8 */
  createAssetLibraryFolder(): void;
  /* typeEncoding=@16@0:8 */
  delegates(...args: any[]): any;
  /* typeEncoding=v32@0:8@?16@?24 */
  downloadAssetLibraryAppcastsWithHandler_completionHandler(
    ...args: any[]
  ): any;
  /* typeEncoding=v44@0:8@16@24c32@?36 */
  enumerateForeignObjects_inDocument_includeDisabled_block(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  generatePreviewImageForLibrary_completionHandler(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  importShareableObjectReference_intoDocument(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  initialRemoteLibraryDefinitions(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraries(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  librariesWithUpdates(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  libraryForShareableObject(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  loadLibrariesForKey_dispatchGroup(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  loadLibrariesWithDispatchGroup(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  loadRemoteLibraryRepresentationWithCompletionHandler(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24@32 */
  loadVersionZeroLibrariesFromUnarchiver_forKey_dispatchGroup(
    ...args: any[]
  ): any;
  /* typeEncoding=v24@0:8@16 */
  loadVersionZeroLibrariesWithDispatchGroup(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  makeDuplicateRemoteLibraryError(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  notifyLibraryChange(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  previewFromDocumentReader(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  reloadLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  remoteLibraries(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  remoteLibraryWithAppcast(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeAssetLibrary(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeRemoteAssetLibrary(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeUserAssetLibrary(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  saveLibraries(): void;
  /* typeEncoding=v32@0:8@16@24 */
  saveLibraries_withLibrariesKey(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegates(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRemoteLibraries(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setupInitialRemoteLibrariesWithDispatchGroup(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldAttemptToLoadVersionZeroLibraries(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldLoadPreviouslySavedLibraries(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@?24@?32@?40 */
  startDownloadingAssetLibrary_progressHandler_downloadCompletionHandler_completionHandler(
    ...args: any[]
  ): any;
  /* typeEncoding=@32@0:8@16@24 */
  symbolIDsMappingFrom_toLibrary(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24@32 */
  syncForeignObject_withMaster_fromLibrary(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24@32 */
  syncNestedSymbolsOf_withMaster_fromLibrary(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  updateAndLoadAssetLibrary_completionHandler(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  userLibraries(...args: any[]): any;
}

declare class MSAssetLibraryPreview extends NSView {
  /* typeEncoding=@"NSBezierPath", ivar=(null), attributes=(assign,nonatomic,readonly) */
  contentPath(): NSBezierPath;
  /* typeEncoding=@"NSImage", ivar=_libraryPreview, attributes=(assign,nonatomic,weak) */
  libraryPreview(): NSImage;
  /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
  preview(): NSImage;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  previewFrame(): CGRect;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@24@0:8@16 */
  centeredThumbFromImage(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  contentPath(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraryPreview(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  preview(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  previewFrame(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibraryPreview(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreview(...args: any[]): any;
}

declare class MSAssetLibraryTableCellView extends NSTableCellView {
  /* typeEncoding=@"MSAssetPreferenceItem", ivar=(null), attributes=(assign,nonatomic,readonly) */
  assetPreferenceItem(): MSAssetPreferenceItem;
  /* typeEncoding=c, ivar=_downloadButtonHidden, attributes=(assign,nonatomic) */
  downloadButtonHidden(): boolean;
  /* typeEncoding=@"NSProgressIndicator", ivar=_downloadProgress, attributes=(assign,nonatomic,weak) */
  downloadProgress(): NSProgressIndicator;
  /* typeEncoding=c, ivar=_downloadProgressHidden, attributes=(assign,nonatomic) */
  downloadProgressHidden(): boolean;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
  enabled(): boolean;
  /* typeEncoding=@"MSAssetLibrariesPreferencePane", ivar=_libraryPreferencePane, attributes=(assign,nonatomic,weak) */
  libraryPreferencePane(): MSAssetLibrariesPreferencePane;
  /* typeEncoding=@"MSAssetLibraryPreview", ivar=_previewContainer, attributes=(assign,nonatomic,weak) */
  previewContainer(): MSAssetLibraryPreview;
  /* typeEncoding=@"NSTextField", ivar=_primaryTextField, attributes=(assign,nonatomic,weak) */
  primaryTextField(): NSTextField;
  /* typeEncoding=c, ivar=_quickLookButtonHidden, attributes=(assign,nonatomic) */
  quickLookButtonHidden(): boolean;
  /* typeEncoding=@"NSTextField", ivar=_secondaryTextField, attributes=(assign,nonatomic,weak) */
  secondaryTextField(): NSTextField;
  /* typeEncoding=@"NSTextField", ivar=_updateAvailablePrimaryTextField, attributes=(assign,nonatomic,weak) */
  updateAvailablePrimaryTextField(): NSTextField;
  /* typeEncoding=@"NSTextField", ivar=_updateAvailableSecondaryTextField, attributes=(assign,nonatomic,weak) */
  updateAvailableSecondaryTextField(): NSTextField;
  /* typeEncoding=@"NSTextField", ivar=_updateAvailableTextField, attributes=(assign,nonatomic,weak) */
  updateAvailableTextField(): NSTextField;

  /* typeEncoding=v16@0:8 */
  static initialize(): void;
  /* typeEncoding=@24@0:8@16 */
  static keyPathsForValuesAffectingValueForKey(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static missingLibraryPlaceholderImage(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static sketchRemoteLibraryPlaceholderImage(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  assetPreferenceItem(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  downloadButtonHidden(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  downloadLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  downloadProgress(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  downloadProgressHidden(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  enabled(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  generatePreviewImage(): void;
  /* typeEncoding=@16@0:8 */
  libraryPreferencePane(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32^v40 */
  observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewContainer(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  primaryTextField(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  quickLookButtonHidden(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  secondaryTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setBackgroundStyle(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setDownloadButtonHidden(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDownloadProgress(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setDownloadProgressHidden(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setEnabled(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibraryPreferencePane(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setObjectValue(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewContainer(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPrimaryTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPrimaryTextFieldTextColor(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setQuickLookButtonHidden(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSecondaryTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSecondaryTextFieldTextColor(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setUpdateAvailablePrimaryTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setUpdateAvailableSecondaryTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setUpdateAvailableTextField(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setupButtons(): void;
  /* typeEncoding=v20@0:8c16 */
  startDownloadWithEnable(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  startDownloading(): void;
  /* typeEncoding=@16@0:8 */
  updateAvailablePrimaryTextField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  updateAvailableSecondaryTextField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  updateAvailableTextField(...args: any[]): any;
}

declare class MSAssetLibraryTableView extends BCKeyEventActionTableView {
  /* typeEncoding=@24@0:8@16 */
  menuForEvent(...args: any[]): any;
}

declare class MSAssetLibraryUpdater extends NSObject {
  /* typeEncoding=@"BCDownloadManager", ivar=_downloadManager, attributes=(retain,nonatomic) */
  downloadManager(): BCDownloadManager;
  /* typeEncoding=@"NSMutableDictionary", ivar=_downloadTasks, attributes=(retain,nonatomic) */
  downloadTasks(): NSMutableDictionary;

  /* typeEncoding=@16@0:8 */
  static downloadManagerSessionConfiguration(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  cancelDownloadTaskWithIdentifier(...args: any[]): any;
  /* typeEncoding=@?24@0:8@16 */
  completionHandlerForIdentifier(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  dictionaryValueForDownloadTaskWithIdentifier_key(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  downloadAppcastAtURL_withCompletionHandler(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@?24@?32 */
  downloadAssetLibraryAppcasts_downloadAppcastHandler_completionHandler(
    ...args: any[]
  ): any;
  /* typeEncoding=@16@0:8 */
  downloadManager(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32q40 */
  downloadManager_downloadTaskFinishedForIdentifier_downloadedURL_httpStatusCode(
    ...args: any[]
  ): any;
  /* typeEncoding=v48@0:8@16@24Q32Q40 */
  downloadManager_downloadTaskHasUpdatedForIdentifier_downloadedSoFar_withDownloadSize(
    ...args: any[]
  ): any;
  /* typeEncoding=v40@0:8@16@24@32 */
  downloadManager_downloadTaskWithIdentifier_failedWithError(
    ...args: any[]
  ): any;
  /* typeEncoding=@16@0:8 */
  downloadTasks(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@?24@0:8@16 */
  progressHandlerForIdentifier(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDownloadManager(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDownloadTasks(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@?24@?32 */
  startDownloadingAssetLibrary_progressHandler_completionHandler(
    ...args: any[]
  ): any;
  /* typeEncoding=v32@0:8@16@?24 */
  startFileDownload_completionHandler(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@24 */
  updateAssetLibrary_withLibraryDownloadedTo(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  updatingInfoForLatestVersionInAppcast(...args: any[]): any;
}

declare class MSAssetLibraryUpdatingInfo extends NSObject /* implements NSCoding */ {
  /* typeEncoding=Q, ivar=_downloadSize, attributes=(assign,nonatomic,readonly) */
  downloadSize(): number;
  /* typeEncoding=@"NSString", ivar=_downloadTaskIdentifier, attributes=(copy,nonatomic) */
  downloadTaskIdentifier(): NSString;
  /* typeEncoding=@"NSURL", ivar=_downloadURL, attributes=(assign,nonatomic,readonly) */
  downloadURL(): NSURL;
  /* typeEncoding=@"MSFolderMonitor", ivar=_folderMonitor, attributes=(retain,nonatomic) */
  folderMonitor(): MSFolderMonitor;
  /* typeEncoding=@"NSURL", ivar=_imageURL, attributes=(assign,nonatomic,readonly) */
  imageURL(): NSURL;
  /* typeEncoding=@"NSString", ivar=_libraryName, attributes=(assign,nonatomic,readonly) */
  libraryName(): NSString;
  /* typeEncoding=@"NSURL", ivar=_shareLink, attributes=(assign,nonatomic,readonly) */
  shareLink(): NSURL;
  /* typeEncoding=@"NSString", ivar=_versionNumberForUpdate, attributes=(assign,nonatomic,readonly) */
  versionNumberForUpdate(): NSString;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=Q16@0:8 */
  downloadSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  downloadTaskIdentifier(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  downloadURL(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  encodeWithCoder(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  folderMonitor(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imageURL(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithCoder(...args: any[]): any;
  /* typeEncoding=@64@0:8@16@24@32@40@48Q56 */
  initWithDownloadURL_libraryName_imageURL_newVersionNumber_shareLink_downloadSize(
    ...args: any[]
  ): any;
  /* typeEncoding=c24@0:8@16 */
  isEqual(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isEqualToAssetLibraryUpdatingInfo(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isHigherVersionThan(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraryName(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDownloadTaskIdentifier(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFolderMonitor(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  shareLink(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  versionNumberForUpdate(...args: any[]): any;
}

declare class MSAssetMigrationSources extends NSObject {
  /* typeEncoding=@"MSVersionedArchive", ivar=_colorArchive, attributes=(retain,nonatomic) */
  colorArchive(): MSVersionedArchive;
  /* typeEncoding=@"MSVersionedArchive", ivar=_gradientArchive, attributes=(retain,nonatomic) */
  gradientArchive(): MSVersionedArchive;
  /* typeEncoding=@"NSURL", ivar=_imageURL, attributes=(copy,nonatomic) */
  imageURL(): NSURL;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  colorArchive(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  gradientArchive(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imageURL(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setColorArchive(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setGradientArchive(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setImageURL(...args: any[]): any;
}

declare class MSAssetPickerCollectionView extends NSCollectionView {
  /* typeEncoding=c16@0:8 */
  acceptsFirstResponder(...args: any[]): any;
}

declare class MSAssetPickerController extends NSViewController /* implements MSAssetCollectionViewSourceItemProvider, MSAssetCollectionViewItemDelegate, NSCollectionViewDelegate, NSMenuDelegate */ {
  /* typeEncoding=@"MSGenericButtonController", ivar=_addButtonController, attributes=(retain,nonatomic) */
  addButtonController(): MSGenericButtonController;
  /* typeEncoding=@"MSGenericButtonController", ivar=_assetDisplayModeButton, attributes=(retain,nonatomic) */
  assetDisplayModeButton(): MSGenericButtonController;
  /* typeEncoding=@"NSCollectionView", ivar=_collectionView, attributes=(retain,nonatomic) */
  collectionView(): NSCollectionView;
  /* typeEncoding=@"MSAssetCollectionViewDataSource", ivar=_currentDataSource, attributes=(retain,nonatomic) */
  currentDataSource(): MSAssetCollectionViewDataSource;
  /* typeEncoding=@"NSIndexPath", ivar=_currentDropTargetPath, attributes=(retain,nonatomic) */
  currentDropTargetPath(): NSIndexPath;
  /* typeEncoding=@"NSArray", ivar=_dataSources, attributes=(copy,nonatomic) */
  dataSources(): NSArray;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSAssetPickerControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSAssetPickerControllerDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"NSCollectionViewItem", ivar=_draggedItem, attributes=(retain,nonatomic) */
  draggedItem(): NSCollectionViewItem;
  /* typeEncoding=@"NSIndexPath", ivar=_draggingSourceIndexPath, attributes=(retain,nonatomic) */
  draggingSourceIndexPath(): NSIndexPath;
  /* typeEncoding=Q, ivar=_effectiveDisplayMode, attributes=(assign,nonatomic) */
  effectiveDisplayMode(): number;
  /* typeEncoding=@"MSAssetCollectionLayout", ivar=_flowLayout, attributes=(retain,nonatomic) */
  flowLayout(): MSAssetCollectionLayout;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  hasContent(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"<MSAsset>", ivar=_highlightedAsset, attributes=(retain,nonatomic) */
  highlightedAsset(): MSAsset;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
  sectionHeaderAccessoryViews(): NSArray;
  /* typeEncoding=@"NSView", ivar=(null), attributes=(assign,nonatomic,readonly) */
  sectionHeaderLabelView(): NSView;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"MSGenericButtonController", ivar=_switchCollectionButtonController, attributes=(retain,nonatomic) */
  switchCollectionButtonController(): MSGenericButtonController;

  /* typeEncoding=@24@0:8Q16 */
  static itemNibNameForAssetType(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addAsset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  addButtonController(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  adjustHeight(): void;
  /* typeEncoding=@16@0:8 */
  assetDisplayModeButton(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  assetItem_copyToCollection(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  assetItem_moveToCollection(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  assetItem_wantsRenameTo(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  assetItemDidEndRenaming(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  assetItemIsEditable(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  assetItemWantsStartRenaming(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  collectionView(...args: any[]): any;
  /* typeEncoding=c40@0:8@16@24@32 */
  collectionView_canDragItemsAtIndexPaths_withEvent(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  collectionView_didSelectItemsAtIndexPaths(...args: any[]): any;
  /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32Q48 */
  collectionView_draggingSession_endedAtPoint_dragOperation(
    ...args: any[]
  ): any;
  /* typeEncoding=v56@0:8@16@24{CGPoint=dd}32@48 */
  collectionView_draggingSession_willBeginAtPoint_forItemsAtIndexPaths(
    ...args: any[]
  ): any;
  /* typeEncoding=@32@0:8@16@24 */
  collectionView_pasteboardWriterForItemAtIndexPath(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  collectionView_shouldSelectItemsAtIndexPaths(...args: any[]): any;
  /* typeEncoding=Q48@0:8@16@24^@32^q40 */
  collectionView_validateDrop_proposedIndexPath_dropOperation(
    ...args: any[]
  ): any;
  /* typeEncoding=@52@0:8@16@24@32@40c48 */
  collectionViewSource_vendItemForIndexPath_asset_name_highlighted(
    ...args: any[]
  ): any;
  /* typeEncoding=@40@0:8@16@24@32 */
  collectionViewSource_vendSupplementaryViewOfKind_forIndexPath(
    ...args: any[]
  ): any;
  /* typeEncoding=v16@0:8 */
  commitNameEditingIfNecessary(): void;
  /* typeEncoding=v24@0:8@16 */
  connectCollectionViewWithDataSource(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  currentDataSource(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  currentDropTargetPath(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  dataSources(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  deleteAssetItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  disconnectCollectionViewFromDataSource(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24@32 */
  doAddAsset_toDataSource_forCollectionView(...args: any[]): any;
  /* typeEncoding=v44@0:8@16@24@32c40 */
  doDeleteAssetAtIndexPath_fromDataSource_collectionView_animated(
    ...args: any[]
  ): any;
  /* typeEncoding=@16@0:8 */
  draggedItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  draggingSourceIndexPath(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  effectiveDisplayMode(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  flowLayout(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasContent(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  highlightedAsset(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithNibName_bundle(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  prepareUI(): void;
  /* typeEncoding=@24@0:8@16 */
  previewColorSpaceForClient(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  reloadDataAndUpdateSize(): void;
  /* typeEncoding=v16@0:8 */
  requestUpdatedIndexesForCurrentDataSource(): void;
  /* typeEncoding=v24@0:8@16 */
  scrollPathToVisible(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  scrollPathToVisibleAndStartEditing(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sectionHeaderAccessoryViews(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sectionHeaderLabelView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAddButtonController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAssetDisplayModeButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCollectionView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCurrentDataSource(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCurrentDropTargetPath(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDataSources(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDraggedItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDraggingSourceIndexPath(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setEffectiveDisplayMode(...args: any[]): any;
  /* typeEncoding=v36@0:8Q16c24@?28 */
  setEffectiveDisplayMode_animated_completionHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFlowLayout(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHighlightedAsset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSwitchCollectionButtonController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  switchAssetCollection(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  switchCollectionButtonController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  switchDisplayMode(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  switchToDataSourceAtIndex(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateAssetDisplayModeButton(): void;
  /* typeEncoding=v16@0:8 */
  updateHighlightedAssets(): void;
  /* typeEncoding=v16@0:8 */
  updateLayoutParameters(): void;
  /* typeEncoding=v16@0:8 */
  updateSwitchButton(): void;
  /* typeEncoding=v16@0:8 */
  viewDidAppear(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=v16@0:8 */
  viewWillLayout(): void;
}

declare class MSAssetPickerHeaderInspectorItem extends MSColorHeaderInspectorItem {
  /* typeEncoding=v16@0:8 */
  updateHeight(): void;
}

declare class MSAssetPickerScrubberController extends NSObject /* implements NSScrubberDelegate, NSScrubberDataSource */ {
  /* typeEncoding=@"MSAssetCollectionViewDataSource", ivar=_dataSource, attributes=(retain,nonatomic) */
  dataSource(): MSAssetCollectionViewDataSource;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSAssetPickerScrubberControllerDelegate>", ivar=_delegate, attributes=(retain,nonatomic) */
  delegate(): MSAssetPickerScrubberControllerDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSString", ivar=_identifier, attributes=(retain,nonatomic) */
  identifier(): NSString;
  /* typeEncoding=@"NSTouchBarItem", ivar=_item, attributes=(retain,nonatomic) */
  item(): NSTouchBarItem;
  /* typeEncoding=@"NSScrubber", ivar=_scrubber, attributes=(retain,nonatomic) */
  scrubber(): NSScrubber;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@24@0:8@16 */
  colorAssetCollectionLabelWithTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  dataSource(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding={CGSize=dd}24@0:8@16 */
  fittingAssetScrubberLabelItemSizeForTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  identifier(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithIdentifier(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  item(...args: any[]): any;
  /* typeEncoding=q24@0:8@16 */
  numberOfItemsForScrubber(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  reloadData(): void;
  /* typeEncoding=@16@0:8 */
  scrubber(...args: any[]): any;
  /* typeEncoding=v32@0:8@16q24 */
  scrubber_didSelectItemAtIndex(...args: any[]): any;
  /* typeEncoding={CGSize=dd}40@0:8@16@24q32 */
  scrubber_layout_sizeForItemAtIndex(...args: any[]): any;
  /* typeEncoding=@32@0:8@16q24 */
  scrubber_viewForItemAtIndex(...args: any[]): any;
  /* typeEncoding=@24@0:8Q16 */
  scrubberItemViewForAssetAtIndex(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  scrubberItemViewWrapping(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDataSource(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIdentifier(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setScrubber(...args: any[]): any;
}

declare class MSAssetPreferenceItem extends NSObject {
  /* typeEncoding=@"<MSAssetPreferenceItemDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSAssetPreferenceItemDelegate;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  downloadFailed(): boolean;
  /* typeEncoding=Q, ivar=_downloadedSoFar, attributes=(assign,nonatomic) */
  downloadedSoFar(): number;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
  enabled(): boolean;
  /* typeEncoding=Q, ivar=_fileSize, attributes=(assign,nonatomic) */
  fileSize(): number;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  hasAppcastURL(): boolean;
  /* typeEncoding=@"MSAssetLibrary", ivar=_library, attributes=(assign,nonatomic,readonly) */
  library(): MSAssetLibrary;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  missingRemoteLibraryWithNoInternet(): boolean;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  modificationDate(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  name(): NSString;
  /* typeEncoding=@"NSImage", ivar=_preview, attributes=(retain,nonatomic) */
  preview(): NSImage;
  /* typeEncoding=@"MSRemoteAssetLibrary", ivar=(null), attributes=(assign,nonatomic,readonly) */
  remoteLibrary(): MSRemoteAssetLibrary;
  /* typeEncoding=@"NSString", ivar=_secondaryTitle, attributes=(retain,nonatomic) */
  secondaryTitle(): NSString;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  updateAvailable(): boolean;
  /* typeEncoding=q, ivar=_updatingStatus, attributes=(assign,nonatomic) */
  updatingStatus(): number;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  validForSecondaryTextField(): boolean;

  /* typeEncoding=@16@0:8 */
  static keyPathsForValuesAffectingUpdateAvailable(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  static preferenceItemForLibrary(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  downloadFailed(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  downloadProgress(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  downloadedSoFar(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  enabled(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  evaluateSecondaryTitle(): void;
  /* typeEncoding=Q16@0:8 */
  fileSize(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasAppcastURL(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  infoText(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  library(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  missingRemoteLibraryWithNoInternet(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  modificationDate(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32^v40 */
  observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  preview(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  remoteLibrary(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  secondaryTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  secondaryTitleStringWhenUpdateAvailable(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setDownloadedSoFar(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setEnabled(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setFileSize(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreview(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSecondaryTitle(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setUpdatingStatus(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setupObservers(): void;
  /* typeEncoding=c16@0:8 */
  updateAvailable(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  updatingRelatedSecondaryTitle(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  updatingStatus(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  valid(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  validForSecondaryTextField(...args: any[]): any;
}

declare class MSAssetScrubberItemView extends NSScrubberItemView {
  /* typeEncoding=@"NSImage", ivar=_cachedPreviewImage, attributes=(assign,nonatomic,weak) */
  cachedPreviewImage(): NSImage;
  /* typeEncoding=@"NSColorSpace", ivar=_canvasColorSpace, attributes=(assign,nonatomic,readonly) */
  canvasColorSpace(): NSColorSpace;
  /* typeEncoding=@"MSColor", ivar=_color, attributes=(assign,nonatomic,readonly) */
  color(): MSColor;
  /* typeEncoding=@"MSGradient", ivar=_gradient, attributes=(assign,nonatomic,readonly) */
  gradient(): MSGradient;
  /* typeEncoding=c, ivar=_isFirstInCollection, attributes=(assign,nonatomic,readonly) */
  isFirstInCollection(): boolean;
  /* typeEncoding=c, ivar=_isLastInCollection, attributes=(assign,nonatomic,readonly) */
  isLastInCollection(): boolean;
  /* typeEncoding=@"MSImageData", ivar=_pattern, attributes=(assign,nonatomic,readonly) */
  pattern(): MSImageData;
  /* typeEncoding=d, ivar=_tailPadding, attributes=(assign,nonatomic,readonly) */
  tailPadding(): number;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  cachedPreviewImage(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  canvasColorSpace(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  clipPath(...args: any[]): any;
  /* typeEncoding=@56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16d48 */
  clipPathForRect_cornerRadius(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  color(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  colorPreviewImageWithDrawingBounds(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}52@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16c48 */
  deviceColorPreviewRectForRect_drawingBorder(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  drawingBounds(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  gradient(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  gradientPreviewImageWithDrawingBounds(...args: any[]): any;
  /* typeEncoding=@48@0:8@16@24c32c36d40 */
  initWithAsset_canvasColorSpace_isFirst_isLast_tailPadding(
    ...args: any[]
  ): any;
  /* typeEncoding=c16@0:8 */
  isFirstInCollection(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isLastInCollection(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  pattern(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  patternPreviewImageWithDrawingBounds(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCachedPreviewImage(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  shouldDrawBorderForColor(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  tailPadding(...args: any[]): any;
}

declare class MSAssetSyncItemTableCellView extends NSTableCellView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setBackgroundStyle(...args: any[]): any;
}

declare class MSAssetSyncSheet extends CHSheetController /* implements NSTableViewDataSource, NSTableViewDelegate, NSSplitViewDelegate */ {
  /* typeEncoding=@"MSSharedObjectView", ivar=_currentSharedObjectView, attributes=(assign,nonatomic,weak) */
  currentSharedObjectView(): MSSharedObjectView;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"MSDocument", ivar=(null), attributes=(assign,nonatomic,readonly) */
  document(): MSDocument;
  /* typeEncoding=c, ivar=_hasSyncableItems, attributes=(assign,nonatomic) */
  hasSyncableItems(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSSplitView", ivar=_splitView, attributes=(assign,nonatomic,weak) */
  splitView(): NSSplitView;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSArray", ivar=_tableViewData, attributes=(assign,nonatomic,readonly) */
  tableViewData(): NSArray;
  /* typeEncoding=@"MSSharedObjectView", ivar=_updatedSharedObjectView, attributes=(assign,nonatomic,weak) */
  updatedSharedObjectView(): MSSharedObjectView;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  buildTableViewData(): void;
  /* typeEncoding=q32@0:8@16@24 */
  compareSyncSheetItem_toItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  currentSharedObjectView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  document(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasSyncableItems(...args: any[]): any;
  /* typeEncoding=q24@0:8@16 */
  numberOfRowsInTableView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCurrentSharedObjectView(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setHasSyncableItems(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSplitView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setUpdatedSharedObjectView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  splitView(...args: any[]): any;
  /* typeEncoding=d40@0:8@16d24q32 */
  splitView_constrainMaxCoordinate_ofSubviewAt(...args: any[]): any;
  /* typeEncoding=d40@0:8@16d24q32 */
  splitView_constrainSplitPosition_ofSubviewAt(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@24 */
  splitView_shouldAdjustSizeOfSubview(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24q32 */
  tableView_didAddRowView_forRow(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_objectValueForTableColumn_row(...args: any[]): any;
  /* typeEncoding=c32@0:8@16q24 */
  tableView_shouldSelectRow(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_viewForTableColumn_row(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tableViewData(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  tableViewSelectionDidChange(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  updateSelectedForSync(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  updateSymbols(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  updatedSharedObjectView(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  windowDidLoad(): void;
}

declare class MSAssetSyncSheetHeader extends NSObject /* implements MSAssetSyncSheetItem */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  displayName(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"MSAssetLibrary", ivar=library, attributes=(retain,nonatomic) */
  library(): MSAssetLibrary;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  modifiedDateString(): NSString;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  shouldSync(): boolean;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
  type(): number;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  displayName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  library(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  modifiedDateString(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibrary(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldSync(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  type(...args: any[]): any;
}

declare class MSAssetSyncSheetObject extends NSObject /* implements MSAssetSyncSheetItem */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  displayName(): NSString;
  /* typeEncoding=@"MSForeignObject", ivar=_foreignObject, attributes=(retain,nonatomic) */
  foreignObject(): MSForeignObject;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"MSAssetLibrary", ivar=library, attributes=(retain,nonatomic) */
  library(): MSAssetLibrary;
  /* typeEncoding=@"MSModelObject<BCSortable><MSSharedObjectStyling>", ivar=_libraryMaster, attributes=(retain,nonatomic) */
  libraryMaster(): MSModelObject;
  /* typeEncoding=c, ivar=_shouldSync, attributes=(assign,nonatomic) */
  shouldSync(): boolean;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  tooltipForLocal(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  tooltipForRemote(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,nonatomic,readonly) */
  type(): number;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  displayName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  foreignObject(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  library(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  libraryMaster(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setForeignObject(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibrary(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLibraryMaster(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldSync(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldSync(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tooltipForLocal(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tooltipForRemote(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  type(...args: any[]): any;
}

declare class MSAssetLibraryDelegate {}
