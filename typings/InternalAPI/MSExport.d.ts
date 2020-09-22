declare class MSExportAction extends MSDocumentAction {
  /* typeEncoding=@16@0:8 */
  baseNameForSlice(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  createInitialSliceWithCompletionHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  determineRectForInitialSliceWithCompletionHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  doPerformAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  export(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasArtboardsWitNoExportFormats(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  label(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  rectForExportingEntirePage(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  showInspectorPanelIfNecessary(): void;
  /* typeEncoding=@16@0:8 */
  tooltip(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  touchBarImage(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  validate(...args: any[]): any;
}

declare class MSExportFormat extends _MSExportFormat {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,readonly) */
  baseFileName(): NSString;

  /* typeEncoding=@32@0:8@16@24 */
  static exportableFilenameBodyForLayerName_exportFormat(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  static exportableFilenameForLayerName_exportFormat(...args: any[]): any;
  /* typeEncoding=@40@0:8d16@24@32 */
  static formatWithScale_name_fileFormat(...args: any[]): any;
  /* typeEncoding=@56@0:8d16@24@32d40q48 */
  static formatWithScale_name_fileFormat_absoluteSize_namingScheme(
    ...args: any[]
  ): any;
  /* typeEncoding=@16@0:8 */
  static validFormats(...args: any[]): any;

  /* typeEncoding=@16@0:8 */
  baseFileName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  container(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  defaultName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  description(...args: any[]): any;
  /* typeEncoding=d48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  exportScaleInRect(...args: any[]): any;
  /* typeEncoding=@40@0:8d16@24@32 */
  initWithScale_name_fileFormat(...args: any[]): any;
  /* typeEncoding=@56@0:8d16@24@32d40q48 */
  initWithScale_name_fileFormat_absoluteSize_namingScheme(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isScalableExport(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  parentLayer(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  remove(): void;
}

declare class MSExportFormatNamingTextField extends MSTextFieldWithDropDownMenu {
  /* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(copy,nonatomic) */
  exportFormats(): NSArray;

  /* typeEncoding=#16@0:8 */
  static cellClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  applyNamingScheme(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormats(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  popupMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormats(...args: any[]): any;
}

declare class MSExportFormatNamingTextFieldCell extends MSTextFieldWithDropDownMenuCell {
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  isPrefixed(): boolean;
  /* typeEncoding=d, ivar=_layerNamePlaceholderWidth, attributes=(assign,nonatomic) */
  layerNamePlaceholderWidth(): number;
  /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
  namingScheme(): number;

  /* typeEncoding=v24@0:8@16 */
  controlTextDidChange(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawInteriorWithFrame_inView(...args: any[]): any;
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawWithFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawingRectForBounds(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initTextCell(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithCoder(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isPrefixed(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  layerNamePlaceholderWidth(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  namingScheme(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setLayerNamePlaceholderWidth(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setupExportFormatNamingTextFieldCell(): void;
}

declare class MSExportFormatViewController extends NSViewController {
  /* typeEncoding=d, ivar=_designedFormatPopUpButtonWidth, attributes=(assign,nonatomic) */
  designedFormatPopUpButtonWidth(): number;
  /* typeEncoding=c, ivar=_drawOldFashioned, attributes=(assign,nonatomic) */
  drawOldFashioned(): boolean;
  /* typeEncoding=d, ivar=_expandedRemoveWidth, attributes=(assign,nonatomic) */
  expandedRemoveWidth(): number;
  /* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
  exportFormats(): NSArray;
  /* typeEncoding=@"NSPopUpButton", ivar=_formatPopup, attributes=(retain,nonatomic) */
  formatPopup(): NSPopUpButton;
  /* typeEncoding=@"NSView", ivar=_removeButtonContainerView, attributes=(retain,nonatomic) */
  removeButtonContainerView(): NSView;
  /* typeEncoding=c, ivar=_removeButtonHidden, attributes=(assign,nonatomic,getter=isRemoveButtonHidden) */
  removeButtonHidden(): boolean;
  /* typeEncoding=@"NSButton", ivar=_removeSizeButton, attributes=(retain,nonatomic) */
  removeSizeButton(): NSButton;
  /* typeEncoding=@"MSTextFieldWithDropDownMenu", ivar=_scaleField, attributes=(retain,nonatomic) */
  scaleField(): MSTextFieldWithDropDownMenu;
  /* typeEncoding=@"NSMenu", ivar=_scalePopupMenu, attributes=(retain,nonatomic) */
  scalePopupMenu(): NSMenu;
  /* typeEncoding=@"NSView", ivar=_sizeView, attributes=(retain,nonatomic) */
  sizeView(): NSView;
  /* typeEncoding=@"MSExportFormatNamingTextField", ivar=_suffixTextField, attributes=(retain,nonatomic) */
  suffixTextField(): MSExportFormatNamingTextField;

  /* typeEncoding=v16@0:8 */
  static initialize(): void;
  /* typeEncoding=@28@0:8d16S24 */
  static scaleDisplayStringForValue_suffix(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v56@0:8d16@24q32{CGSize=dd}40 */
  applyEditedScaleFieldValue_toExportFormat_scaleType_normalSize(
    ...args: any[]
  ): any;
  /* typeEncoding=v32@0:8@16@?24 */
  commitScaleStringEdit_withCompletionBlock(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  designedFormatPopUpButtonWidth(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  drawOldFashioned(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  expandedRemoveWidth(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  exportFormatCanBeScaled(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormats(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportSelection(...args: any[]): any;
  /* typeEncoding=v40@0:8@16q24@?32 */
  findSizeOfLayer_forScaleType_completionBlock(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  firstExportFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  formatPopup(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  formatPopupAction(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isRemoveButtonHidden(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  prepare(): void;
  /* typeEncoding=@16@0:8 */
  removeButtonContainerView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  removeSizeButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  scaleField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  scaleFieldAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  scaleMenuAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  scalePopupMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setDesignedFormatPopUpButtonWidth(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setDrawOldFashioned(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setExpandedRemoveWidth(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormats(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFormatPopup(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRemoveButtonContainerView(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setRemoveButtonHidden(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRemoveSizeButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setScaleField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setScalePopupMenu(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSizeView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSuffixTextField(...args: any[]): any;
  /* typeEncoding=d24@0:8@16 */
  sizeByRemovingSuffixes(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sizeView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  suffixTextField(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateRemoveButtonLayout(): void;
  /* typeEncoding=v16@0:8 */
  updateTextFieldProperties(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
}

declare class MSExportInitialHeaderItem extends MSHeaderInspectorItem {
  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;

  /* typeEncoding=@32@0:8@16@24 */
  initWithNibName_bundle(...args: any[]): any;
}

declare class MSExportInspectorViewController extends MSInspectorItem {
  /* typeEncoding=@"NSButton", ivar=_addExportFormatButton, attributes=(retain,nonatomic) */
  addExportFormatButton(): NSButton;
  /* typeEncoding=@"NSView", ivar=_bottomLabelView, attributes=(retain,nonatomic) */
  bottomLabelView(): NSView;
  /* typeEncoding=@"NSTextField", ivar=_exportFormatLabelTextField, attributes=(retain,nonatomic) */
  exportFormatLabelTextField(): NSTextField;
  /* typeEncoding=@"NSButton", ivar=_exportPresetsMenuButton, attributes=(retain,nonatomic) */
  exportPresetsMenuButton(): NSButton;
  /* typeEncoding=@"NSArray", ivar=_formatViewControllers, attributes=(copy,nonatomic) */
  formatViewControllers(): NSArray;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  hasExports(): boolean;
  /* typeEncoding=@"MSHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
  headerItem(): MSHeaderInspectorItem;
  /* typeEncoding=@"NSTextField", ivar=_headerLabel, attributes=(retain,nonatomic) */
  headerLabel(): NSTextField;
  /* typeEncoding=@"NSButton", ivar=_knifeButton, attributes=(retain,nonatomic) */
  knifeButton(): NSButton;
  /* typeEncoding=@"NSView", ivar=_nameView, attributes=(retain,nonatomic) */
  nameView(): NSView;
  /* typeEncoding=@"NSLayoutConstraint", ivar=_textLabelRightConstraint, attributes=(retain,nonatomic) */
  textLabelRightConstraint(): NSLayoutConstraint;
  /* typeEncoding=d, ivar=_textLabelRightConstraintExpandedWidth, attributes=(assign,nonatomic) */
  textLabelRightConstraintExpandedWidth(): number;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(assign,nonatomic,readonly) */
  views(): NSArray;

  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  addExportFormatButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addExportPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  applyExportPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  bottomLabelView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  createSliceAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  document(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  editExportPresets(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatLabelTextField(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  exportPresetAppliesToSelectedLayers(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportPresetsMenuButton(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  findExportFormatAmong_equalToFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  firstResponderIgnoringFieldEditor(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  formatViewControllers(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasEnabledStyle(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasExports(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  headerItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  headerLabel(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  knifeButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  nameView(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  prepare(): void;
  /* typeEncoding=v24@0:8@16 */
  setAddExportFormatButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setBottomLabelView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatLabelTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportPresetsMenuButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFormatViewControllers(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHeaderItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHeaderLabel(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setKnifeButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLayers(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setNameView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTextLabelRightConstraint(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setTextLabelRightConstraintExpandedWidth(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showExportPresetMenu(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  textLabelRightConstraint(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  textLabelRightConstraintExpandedWidth(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  unApplyAllExportPresets(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=@16@0:8 */
  views(...args: any[]): any;
}

declare class MSExportManager extends NSObject {
  /* typeEncoding=@"NSColorSpace", ivar=_colorSpace, attributes=(assign,nonatomic,readonly) */
  colorSpace(): NSColorSpace;
  /* typeEncoding=@"MSRenderingDriver", ivar=_driver, attributes=(retain,nonatomic) */
  driver(): MSRenderingDriver;
  /* typeEncoding=@?, ivar=_sliceCompletionBlock, attributes=(copy,nonatomic) */
  sliceCompletionBlock(): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  colorSpace(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  destinationForRequest_inFolder(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  displayNoSlicesWarning(): void;
  /* typeEncoding=@16@0:8 */
  driver(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  exportFileForRequest_toFileURL(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportFilesForRequests(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportSlice(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  exportedDataForRequest(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  openPanelForRequests(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  rendererForRequest(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  savePanelWithDefaultFilename(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  saveSlices_toFolder(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDriver(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  setSliceCompletionBlock(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showSavePanelToExportIndividualSlice(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showSaveToFolderPanelToExportSlices(...args: any[]): any;
  /* typeEncoding=@?16@0:8 */
  sliceCompletionBlock(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  strippedSliceName(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24@?32 */
  warnBeforeOverwritingAndSaveSlices_toFolder_completionBlock(
    ...args: any[]
  ): any;
}

declare class MSExportOptions extends _MSExportOptions /* implements MSExportFormatContainer */ {
  /* typeEncoding=@24@0:8@16 */
  static nextMostAppropriateExportFormatToAdd(...args: any[]): any;

  /* typeEncoding=@16@0:8 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  containingLayer(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  firstFormat(...args: any[]): any;
}

declare class MSExportPDFBookAction extends MSDocumentAction {
  /* typeEncoding=v24@0:8@16 */
  doPerformAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportPDFBook(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  label(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  validate(...args: any[]): any;
}

declare class MSExportPreset extends _MSExportPreset /* implements MSExportFormatContainer */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  displayName(): NSString;
  /* typeEncoding=c, ivar=(null), attributes=(assign) */
  shouldAutoApply(): boolean;

  /* typeEncoding=@16@0:8 */
  static allExportPresets(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  static ensureDefaultExportPresetIsSet(): void;

  /* typeEncoding=Q16@0:8 */
  assetType(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  containingLayer(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  displayName(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithName_formats(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isAssetEqual(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldAutoApply(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldAutoApply(...args: any[]): any;
}

declare class MSExportPresetTableCellView extends NSTableCellView {
  /* typeEncoding=@"NSButton", ivar=_defaultPresetButton, attributes=(retain,nonatomic) */
  defaultPresetButton(): NSButton;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  defaultPresetButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDefaultPresetButton(...args: any[]): any;
}

declare class MSExportPresetsPreferencePane extends MSPreferencePane /* implements NSTableViewDataSource, NSTableViewDelegate */ {
  /* typeEncoding=@"NSButton", ivar=_addButton, attributes=(assign,nonatomic,weak) */
  addButton(): NSButton;
  /* typeEncoding=@"NSButton", ivar=_addFormatButton, attributes=(assign,nonatomic,weak) */
  addFormatButton(): NSButton;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=d, ivar=_designedExportFormatFooterBottomDistance, attributes=(assign,nonatomic,readonly) */
  designedExportFormatFooterBottomDistance(): number;
  /* typeEncoding={CGSize=dd}, ivar=_designedSize, attributes=(assign,nonatomic,readonly) */
  designedSize(): CGSize;
  /* typeEncoding=@"NSView", ivar=_exportFormatEditorView, attributes=(assign,nonatomic,weak) */
  exportFormatEditorView(): NSView;
  /* typeEncoding=@"NSLayoutConstraint", ivar=_exportFormatFooterBottomConstraint, attributes=(assign,nonatomic,weak) */
  exportFormatFooterBottomConstraint(): NSLayoutConstraint;
  /* typeEncoding=@"NSView", ivar=_exportFormatFooterView, attributes=(assign,nonatomic,weak) */
  exportFormatFooterView(): NSView;
  /* typeEncoding=@"NSArray", ivar=_exportFormatViewControllers, attributes=(retain,nonatomic) */
  exportFormatViewControllers(): NSArray;
  /* typeEncoding=@"NSStackView", ivar=_exportFormatsView, attributes=(assign,nonatomic,weak) */
  exportFormatsView(): NSStackView;
  /* typeEncoding=@"MSExportFormatViewController", ivar=_exportFormatsViewController, attributes=(assign,nonatomic,weak) */
  exportFormatsViewController(): MSExportFormatViewController;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSView", ivar=_noPresetsPlaceholderView, attributes=(assign,nonatomic,weak) */
  noPresetsPlaceholderView(): NSView;
  /* typeEncoding=@"NSTextField", ivar=_presetNameTextField, attributes=(assign,nonatomic,weak) */
  presetNameTextField(): NSTextField;
  /* typeEncoding=@"NSArray", ivar=(null), attributes=(copy,nonatomic,readonly) */
  presets(): NSArray;
  /* typeEncoding=@"NSButton", ivar=_removeButton, attributes=(assign,nonatomic,weak) */
  removeButton(): NSButton;
  /* typeEncoding=@"MSExportPreset", ivar=(null), attributes=(assign,nonatomic,readonly) */
  selectedPreset(): MSExportPreset;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(assign,nonatomic,weak) */
  tableView(): NSTableView;

  /* typeEncoding=c24@0:8@16 */
  static exportPresetWithNameExists(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static identifier(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static localizedNewExportPresetName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static title(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static toolbarIcon(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  addButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addExportPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  addFormatButton(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  adjustFirstResponderIfNeeded(): void;
  /* typeEncoding=v24@0:8@16 */
  commitExportPresetName(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  commitPendingTextEditsIfNeeded(): void;
  /* typeEncoding=d16@0:8 */
  designedExportFormatFooterBottomDistance(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  designedSize(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  editExportPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatEditorView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatFooterBottomConstraint(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatFooterView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatViewControllers(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatsView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormatsViewController(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  globalAssets(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  noPresetsPlaceholderView(...args: any[]): any;
  /* typeEncoding=q24@0:8@16 */
  numberOfRowsInTableView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  pickDefaultExportPreset(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  preferredSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetNameTextField(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  presetWithDisplayName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presets(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  refreshExportFormats(): void;
  /* typeEncoding=v16@0:8 */
  refreshExportPresets(): void;
  /* typeEncoding=@16@0:8 */
  removeButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormatFromPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeExportPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  restoreDefaultExportPresets(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  selectPreset(...args: any[]): any;
  /* typeEncoding=c24@0:8Q16 */
  selectPresetAtIndex(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  selectedPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAddButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAddFormatButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatEditorView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatFooterBottomConstraint(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatFooterView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatViewControllers(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatsView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportFormatsViewController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setNoPresetsPlaceholderView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresetNameTextField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRemoveButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTableView(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tableView(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_objectValueForTableColumn_row(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_viewForTableColumn_row(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  tableViewSelectionDidChange(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  uniqueNonEmptyName_forPreset(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidAppear(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
}

declare class MSExportPreviewHeaderInspectorItem extends MSInspectorItem {
  /* typeEncoding=c, ivar=_collapsed, attributes=(assign,nonatomic) */
  collapsed(): boolean;
  /* typeEncoding=c, ivar=_hideSeparator, attributes=(assign,nonatomic) */
  hideSeparator(): boolean;

  /* typeEncoding=c16@0:8 */
  collapsed(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  configurableView(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hideSeparator(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setCollapsed(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setHideSeparator(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
}

declare class MSExportPreviewImagesInspectorItem extends MSInspectorItem /* implements MSLayerChangeObserver */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"NSArray", ivar=_previewViews, attributes=(retain,nonatomic) */
  previewViews(): NSArray;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=q, ivar=_throttleCount, attributes=(assign,nonatomic) */
  throttleCount(): number;

  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;
  /* typeEncoding={CGSize=dd}24@0:8Q16 */
  static previewImageSizeForNumColumns(...args: any[]): any;
  /* typeEncoding={CGSize=dd}24@0:8Q16 */
  static previewViewSizeForNumColumns(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@?24 */
  static reloadPreviewsForLayers_withCompletion(...args: any[]): any;
  /* typeEncoding=v32@0:8@16d24 */
  static setFrameOfViewModels_withInspectorWidth(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v24@0:8@16 */
  layerDidChange(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewViews(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  reloadPreviewViews(): void;
  /* typeEncoding=v16@0:8 */
  removeAllPreviewViews(): void;
  /* typeEncoding=v16@0:8 */
  schedulePreviewViewReload(): void;
  /* typeEncoding=v24@0:8@16 */
  setLayers(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewViews(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewsWithViewModels(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setThrottleCount(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  throttleCount(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
}

declare class MSExportPreviewInspectorSection extends MSBaseInspectorSection /* implements MSInspectorItemDelegate */ {
  /* typeEncoding=@"MSSliceBackgroundColorInspectorItem", ivar=_colorItem, attributes=(retain,nonatomic) */
  colorItem(): MSSliceBackgroundColorInspectorItem;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"MSExportSelectedInspectorItem", ivar=_exportSelectedItem, attributes=(retain,nonatomic) */
  exportSelectedItem(): MSExportSelectedInspectorItem;
  /* typeEncoding=@"NSArray", ivar=_footerItems, attributes=(retain,nonatomic) */
  footerItems(): NSArray;
  /* typeEncoding=@"MSExportInspectorViewController", ivar=_formatsItem, attributes=(retain,nonatomic) */
  formatsItem(): MSExportInspectorViewController;
  /* typeEncoding=@"MSSliceExportGroupContentsOnlyInspectorItem", ivar=_groupContentsItem, attributes=(retain,nonatomic) */
  groupContentsItem(): MSSliceExportGroupContentsOnlyInspectorItem;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  hasContent(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"MSExportPreviewHeaderInspectorItem", ivar=_headerItem, attributes=(retain,nonatomic) */
  headerItem(): MSExportPreviewHeaderInspectorItem;
  /* typeEncoding=@"MSExportPreviewImagesInspectorItem", ivar=_imagesItem, attributes=(retain,nonatomic) */
  imagesItem(): MSExportPreviewImagesInspectorItem;
  /* typeEncoding=@"MSExportInitialHeaderItem", ivar=_initialHeaderItem, attributes=(retain,nonatomic) */
  initialHeaderItem(): MSExportInitialHeaderItem;
  /* typeEncoding=@"MSHeader2InspectorItem", ivar=_sliceHeader, attributes=(retain,nonatomic) */
  sliceHeader(): MSHeader2InspectorItem;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"MSSliceTrimTransparencyInspectorItem", ivar=_trimTransparencyItem, attributes=(retain,nonatomic) */
  trimTransparencyItem(): MSSliceTrimTransparencyInspectorItem;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  colorItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportSelectedItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  footerItems(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  footerViews(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  formatsItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  groupContentsItem(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasContent(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  headerItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imagesItem(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithNibName_bundle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  initialHeaderItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setColorItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportSelectedItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFooterItems(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFormatsItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setGroupContentsItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHeaderItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setImagesItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setInitialHeaderItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSliceHeader(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTrimTransparencyItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sliceHeader(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  trimTransparencyItem(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateItems(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=@16@0:8 */
  views(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  wantsSeparatorAfterViews(...args: any[]): any;
}

declare class MSExportPreviewOperation extends NSOperation {
  /* typeEncoding=@"MSImmutableLayerAncestry", ivar=_ancestry, attributes=(retain,nonatomic) */
  ancestry(): MSImmutableLayerAncestry;
  /* typeEncoding={CGSize=dd}, ivar=_imageSize, attributes=(assign,nonatomic) */
  imageSize(): CGSize;
  /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
  previewImage(): NSImage;
  /* typeEncoding=@"MSExportPreviewViewModel", ivar=(null), attributes=(assign,nonatomic,readonly) */
  previewViewModel(): MSExportPreviewViewModel;
  /* typeEncoding=@"MSExportRequest", ivar=_request, attributes=(retain,nonatomic) */
  request(): MSExportRequest;

  /* typeEncoding=@16@0:8 */
  static sharedPreviewRenderQueue(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  ancestry(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportingColorSpace(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  imageSize(...args: any[]): any;
  /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
  initWithAncestry_imageSize(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  main(): void;
  /* typeEncoding=@16@0:8 */
  previewImage(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewViewModel(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  request(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAncestry(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGSize=dd}16 */
  setImageSize(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRequest(...args: any[]): any;
}

declare class MSExportPreviewView extends NSView /* implements NSDraggingSource, NSPasteboardWriting */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"MSExportPreviewViewModel", ivar=_viewModel, attributes=(retain,nonatomic) */
  viewModel(): MSExportPreviewViewModel;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  awakeFromNib(): void;
  /* typeEncoding=v24@0:8@16 */
  beginDragWithEvent(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  cursorUpdate(...args: any[]): any;
  /* typeEncoding=Q32@0:8@16q24 */
  draggingSession_sourceOperationMaskForDraggingContext(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  imageDrawRect(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  initWithFrame(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithViewModel(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  mouseDown(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  pasteboardPropertyListForType(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setViewModel(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setup(): void;
  /* typeEncoding=@16@0:8 */
  viewModel(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  writableTypesForPasteboard(...args: any[]): any;
  /* typeEncoding=Q32@0:8@16@24 */
  writingOptionsForType_pasteboard(...args: any[]): any;
}

declare class MSExportPreviewViewModel extends NSObject {
  /* typeEncoding=@"MSExportRequest", ivar=_cachedExportRequest, attributes=(retain,nonatomic) */
  cachedExportRequest(): MSExportRequest;
  /* typeEncoding=@"NSString", ivar=_defaultExportFormat, attributes=(assign,nonatomic,readonly) */
  defaultExportFormat(): NSString;
  /* typeEncoding=c, ivar=_isVectorFormat, attributes=(assign,nonatomic,readonly) */
  isVectorFormat(): boolean;
  /* typeEncoding=@"NSString", ivar=_layerName, attributes=(assign,nonatomic,readonly) */
  layerName(): NSString;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_previewFrame, attributes=(assign,nonatomic) */
  previewFrame(): CGRect;
  /* typeEncoding=@"NSImage", ivar=_previewImage, attributes=(retain,nonatomic) */
  previewImage(): NSImage;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  cachedExportRequest(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  defaultExportFormat(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  imageDataInFormat(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24@32 */
  initWithPreviewImage_cachedExportRequest_ancestry(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isVectorFormat(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  layerName(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  previewFrame(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCachedExportRequest(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  setPreviewFrame(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewImage(...args: any[]): any;
}

declare class MSExportRendererWithSVGSupport extends MSExporter {
  /* typeEncoding=@16@0:8 */
  data(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  previewImage(...args: any[]): any;
}

declare class MSExportRenderingContext extends MSRenderingContextCG {
  /* typeEncoding=@"MSExportRequest", ivar=_exportRequest, attributes=(retain,nonatomic) */
  exportRequest(): MSExportRequest;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  exportRequest(...args: any[]): any;
  /* typeEncoding=@48@0:8@16@24^{CGContext=}32@40 */
  initWithName_driver_context_renderingRequest(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  rendererShouldSkipDrawingLayer(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportRequest(...args: any[]): any;
  /* typeEncoding=c36@0:8@16@24c32 */
  shouldDrawLayer_withMaskingShapeGroup_ignoreDrawingArea(...args: any[]): any;
}

declare class MSExportRequest extends NSObject /* implements NSCopying */ {
  /* typeEncoding=@"MSImmutableColor", ivar=_backgroundColor, attributes=(copy,nonatomic) */
  backgroundColor(): MSImmutableColor;
  /* typeEncoding=d, ivar=_compression, attributes=(assign,nonatomic) */
  compression(): number;
  /* typeEncoding=@"NSString", ivar=_format, attributes=(copy,nonatomic) */
  format(): NSString;
  /* typeEncoding=@"MSImmutableDocumentData", ivar=_immutableDocument, attributes=(retain,nonatomic) */
  immutableDocument(): MSImmutableDocumentData;
  /* typeEncoding=c, ivar=_includeArtboardBackground, attributes=(assign,nonatomic) */
  includeArtboardBackground(): boolean;
  /* typeEncoding=@"NSSet", ivar=_includedLayerIDs, attributes=(copy,nonatomic) */
  includedLayerIDs(): NSSet;
  /* typeEncoding=c, ivar=_interlaced, attributes=(assign,nonatomic) */
  interlaced(): boolean;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
  name(): NSString;
  /* typeEncoding=Q, ivar=_options, attributes=(assign,nonatomic) */
  options(): number;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  pasteboardType(): NSString;
  /* typeEncoding=c, ivar=_progressive, attributes=(assign,nonatomic) */
  progressive(): boolean;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=_rect, attributes=(assign,nonatomic) */
  rect(): CGRect;
  /* typeEncoding=@"MSImmutableLayer", ivar=_rootLayer, attributes=(retain,nonatomic) */
  rootLayer(): MSImmutableLayer;
  /* typeEncoding=c, ivar=_saveForWeb, attributes=(assign,nonatomic) */
  saveForWeb(): boolean;
  /* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
  scale(): number;
  /* typeEncoding=c, ivar=_shouldTrim, attributes=(assign,nonatomic) */
  shouldTrim(): boolean;

  /* typeEncoding=@68@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32c64 */
  static exportRequestFromExportFormat_layer_inRect_useIDForName(
    ...args: any[]
  ): any;
  /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
  static exportRequestFromLayerAncestry_exportFormat_inRect(
    ...args: any[]
  ): any;
  /* typeEncoding=@24@0:8@16 */
  static exportRequestsFromExportableLayer(...args: any[]): any;
  /* typeEncoding=@68@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32c64 */
  static exportRequestsFromExportableLayer_exportFormats_inRect_useIDForName(
    ...args: any[]
  ): any;
  /* typeEncoding=@36@0:8@16@24c32 */
  static exportRequestsFromExportableLayer_exportFormats_useIDForName(
    ...args: any[]
  ): any;
  /* typeEncoding=@60@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24c56 */
  static exportRequestsFromExportableLayer_inRect_useIDForName(
    ...args: any[]
  ): any;
  /* typeEncoding=@28@0:8@16c24 */
  static exportRequestsFromExportableLayer_useIDForName(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  static exportRequestsFromLayerAncestry(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  static exportRequestsFromLayerAncestry_exportFormats(...args: any[]): any;
  /* typeEncoding=@64@0:8@16@24{CGRect={CGPoint=dd}{CGSize=dd}}32 */
  static exportRequestsFromLayerAncestry_exportFormats_inRect(
    ...args: any[]
  ): any;
  /* typeEncoding=@56@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
  static exportRequestsFromLayerAncestry_inRect(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  backgroundColor(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  compression(...args: any[]): any;
  /* typeEncoding=v40@0:8@16Q24@32 */
  configureForLayer_layerOptions_includedIDs(...args: any[]): any;
  /* typeEncoding=v40@0:8@16Q24@32 */
  configureForLayerAncestry_layerOptions_includedIDs(...args: any[]): any;
  /* typeEncoding=@24@0:8^{_NSZone=}16 */
  copyWithZone(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  format(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  immutableDocument(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  includeArtboardBackground(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  includedLayerIDs(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  interlaced(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  objectIDsForSelfAncestorsAndChildrenOfAncestry(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  options(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  pasteboardType(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  progressive(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  readSettingsFromDefaults(): void;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  rect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  rootLayer(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  saveForWeb(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  scale(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setBackgroundColor(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setCompression(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setImmutableDocument(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIncludeArtboardBackground(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIncludedLayerIDs(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setInterlaced(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  setNameFromID_exportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setOptions(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setProgressive(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  setRect(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setRootLayer(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setSaveForWeb(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setScale(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldTrim(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldTrim(...args: any[]): any;
}

declare class MSExportSelectedInspectorItem extends MSInspectorItem {
  /* typeEncoding=@"NSButton", ivar=_exportButton, attributes=(retain,nonatomic) */
  exportButton(): NSButton;
  /* typeEncoding=@"NSButton", ivar=_shareButton, attributes=(retain,nonatomic) */
  shareButton(): NSButton;
  /* typeEncoding=@"MSShareButtonHandler", ivar=_shareButtonHandler, attributes=(retain,nonatomic) */
  shareButtonHandler(): MSShareButtonHandler;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=@16@0:8 */
  exportButton(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithNibName_bundle(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32^v40 */
  observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setShareButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setShareButtonHandler(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  shareAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  shareButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  shareButtonHandler(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
}

declare class MSExportSelectionWithExportFormatsAction extends MSDocumentAction {
  /* typeEncoding=v24@0:8@16 */
  doPerformAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportSelection(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  label(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  validate(...args: any[]): any;
}

declare class MSExportSheet extends CHSheetController {
  /* typeEncoding=@"NSCollectionView", ivar=_collectionView, attributes=(retain,nonatomic) */
  collectionView(): NSCollectionView;
  /* typeEncoding=@"NSButton", ivar=_exportButton, attributes=(retain,nonatomic) */
  exportButton(): NSButton;
  /* typeEncoding=@"NSButton", ivar=_includeAllSlicesCheckBox, attributes=(retain,nonatomic) */
  includeAllSlicesCheckBox(): NSButton;
  /* typeEncoding=@"NSMutableArray", ivar=_selectedSlices, attributes=(retain,nonatomic) */
  selectedSlices(): NSMutableArray;
  /* typeEncoding=@"NSArray", ivar=_slices, attributes=(retain,nonatomic) */
  slices(): NSArray;
  /* typeEncoding=q, ivar=(null), attributes=(assign,nonatomic,readonly) */
  slicesCheckBoxState(): number;
  /* typeEncoding=@"NSSet", ivar=_warningSliceIDs, attributes=(retain,nonatomic) */
  warningSliceIDs(): NSSet;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  awakeFromNib(): void;
  /* typeEncoding=@16@0:8 */
  collectionView(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  collectionView_newItemForRepresentedObject(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  confirm(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  document(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  findConflictingNamesInSlices(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  includeAllCheckboxAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  includeAllSlicesCheckBox(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isItemSelectedForExport(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  resizeWindowToFit(): void;
  /* typeEncoding=@16@0:8 */
  selectedSlices(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCollectionView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIncludeAllSlicesCheckBox(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSelectedSlices(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSlices(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setWarningSliceIDs(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  slices(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  slicesCheckBoxState(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  toggleItemSelectedForExportState(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  updateExportSheetItems(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  validateIncludeAllSlicesCheckBox(): void;
  /* typeEncoding=@16@0:8 */
  warningSliceIDs(...args: any[]): any;
}

declare class MSExportSheetItem extends NSCollectionViewItem {
  /* typeEncoding=@"NSButton", ivar=_checkBox, attributes=(retain,nonatomic) */
  checkBox(): NSButton;
  /* typeEncoding=@"MSExportSheet", ivar=_exportSheet, attributes=(assign,nonatomic,weak) */
  exportSheet(): MSExportSheet;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
  isExportable(): boolean;
  /* typeEncoding=@"NSView", ivar=_previewContainer, attributes=(retain,nonatomic) */
  previewContainer(): NSView;
  /* typeEncoding=c, ivar=_showWarningLabel, attributes=(assign,nonatomic) */
  showWarningLabel(): boolean;
  /* typeEncoding=@"NSTextField", ivar=_subTitleField, attributes=(retain,nonatomic) */
  subTitleField(): NSTextField;
  /* typeEncoding=@"NSTextField", ivar=_titleField, attributes=(retain,nonatomic) */
  titleField(): NSTextField;
  /* typeEncoding=@"NSImageView", ivar=_warningView, attributes=(retain,nonatomic) */
  warningView(): NSImageView;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  awakeFromNib(): void;
  /* typeEncoding=@16@0:8 */
  checkBox(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  exportPreviewOperationDidFinish(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportSheet(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isExportable(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  loadUI(): void;
  /* typeEncoding=@16@0:8 */
  previewContainer(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCheckBox(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExportSheet(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsExportable(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreviewContainer(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShowWarningLabel(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSubTitleField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTitleField(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setWarningView(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  showWarningLabel(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  subTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  subTitleField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  titleField(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  warningView(...args: any[]): any;
}

declare class MSExportStackView extends MSStackView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class _MSExportFormat extends MSModelObject {
  /* typeEncoding=d, ivar=_absoluteSize, attributes=(assign,nonatomic) */
  absoluteSize(): number;
  /* typeEncoding=@"NSString", ivar=_fileFormat, attributes=(retain,nonatomic) */
  fileFormat(): NSString;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
  name(): NSString;
  /* typeEncoding=q, ivar=_namingScheme, attributes=(assign,nonatomic) */
  namingScheme(): number;
  /* typeEncoding=d, ivar=_scale, attributes=(assign,nonatomic) */
  scale(): number;
  /* typeEncoding=q, ivar=_visibleScaleType, attributes=(assign,nonatomic) */
  visibleScaleType(): number;

  /* typeEncoding=c16@0:8 */
  static allowsFaulting(...args: any[]): any;
  /* typeEncoding=#16@0:8 */
  static immutableClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=d16@0:8 */
  absoluteSize(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  copyPropertiesToObject_options(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateChildProperties(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateProperties(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  fileFormat(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasDefaultValues(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  initializeUnsetObjectPropertiesWithDefaults(): void;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  namingScheme(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  performInitEmptyObject(): void;
  /* typeEncoding=v24@0:8@16 */
  performInitWithImmutableModelObject(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  propertiesAreEqual(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  scale(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setAbsoluteSize(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setAsParentOnChildren(): void;
  /* typeEncoding=v24@0:8@16 */
  setFileFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setNamingScheme(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setScale(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setVisibleScaleType(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  syncPropertiesFromObject(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  visibleScaleType(...args: any[]): any;
}

declare class _MSExportOptions extends MSModelObject {
  /* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
  exportFormats(): NSArray;
  /* typeEncoding=@"NSArray", ivar=_includedLayerIds, attributes=(retain,nonatomic) */
  includedLayerIds(): NSArray;
  /* typeEncoding=Q, ivar=_layerOptions, attributes=(assign,nonatomic) */
  layerOptions(): number;
  /* typeEncoding=c, ivar=_shouldTrim, attributes=(assign,nonatomic) */
  shouldTrim(): boolean;

  /* typeEncoding=c16@0:8 */
  static allowsFaulting(...args: any[]): any;
  /* typeEncoding=#16@0:8 */
  static immutableClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addExportFormats(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  copyPropertiesToObject_options(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateChildProperties(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateProperties(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormats(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasDefaultValues(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  includedLayerIds(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  initializeUnsetObjectPropertiesWithDefaults(): void;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormat_afterExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  insertExportFormat_atIndex(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormat_beforeExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormats_afterExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormats_beforeExportFormat(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  layerOptions(...args: any[]): any;
  /* typeEncoding=v32@0:8Q16Q24 */
  moveExportFormatIndex_toIndex(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  performInitEmptyObject(): void;
  /* typeEncoding=v24@0:8@16 */
  performInitWithImmutableModelObject(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  propertiesAreEqual(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  removeAllExportFormats(): void;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  removeExportFormatAtIndex(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormatsAtIndexes(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setAsParentOnChildren(): void;
  /* typeEncoding=v24@0:8@16 */
  setExportFormats(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIncludedLayerIds(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setLayerOptions(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldTrim(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldTrim(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  syncPropertiesFromObject(...args: any[]): any;
}

declare class _MSExportPreset extends MSModelObject {
  /* typeEncoding=@"NSArray", ivar=_exportFormats, attributes=(retain,nonatomic) */
  exportFormats(): NSArray;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(retain,nonatomic) */
  name(): NSString;
  /* typeEncoding=c, ivar=_shouldApplyAutomatically, attributes=(assign,nonatomic) */
  shouldApplyAutomatically(): boolean;

  /* typeEncoding=c16@0:8 */
  static allowsFaulting(...args: any[]): any;
  /* typeEncoding=#16@0:8 */
  static immutableClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addExportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  addExportFormats(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  copyPropertiesToObject_options(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateChildProperties(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateProperties(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  exportFormats(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasDefaultValues(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  initializeUnsetObjectPropertiesWithDefaults(): void;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormat_afterExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  insertExportFormat_atIndex(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormat_beforeExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormats_afterExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  insertExportFormats_beforeExportFormat(...args: any[]): any;
  /* typeEncoding=v32@0:8Q16Q24 */
  moveExportFormatIndex_toIndex(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  performInitEmptyObject(): void;
  /* typeEncoding=v24@0:8@16 */
  performInitWithImmutableModelObject(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  propertiesAreEqual(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  removeAllExportFormats(): void;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormat(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  removeExportFormatAtIndex(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeExportFormatsAtIndexes(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setAsParentOnChildren(): void;
  /* typeEncoding=v24@0:8@16 */
  setExportFormats(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldApplyAutomatically(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldApplyAutomatically(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  syncPropertiesFromObject(...args: any[]): any;
}
