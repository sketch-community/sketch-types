/// <reference path="../AppKit/NSFont.d.ts" />

declare class MSArtboardBackgroundColorInspectorItem extends MSInspectorItem /* implements MSColorInspectorDelegate, BCPopoverDelegate, MSStylePartPreviewButtonDelegate, MSStylePartPreviewButtonDisabledTarget */ {
  /* typeEncoding=@"MSStylePartPreviewButton", ivar=_backgroundColorButton, attributes=(retain,nonatomic) */
  backgroundColorButton(): MSStylePartPreviewButton;
  /* typeEncoding=@"MSInspectorValueAdaptor", ivar=_colorAdaptor, attributes=(retain,nonatomic) */
  colorAdaptor(): MSInspectorValueAdaptor;
  /* typeEncoding=@"NSButton", ivar=_colorCheckbox, attributes=(retain,nonatomic) */
  colorCheckbox(): NSButton;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"BCPopover", ivar=_popover, attributes=(retain,nonatomic) */
  popover(): BCPopover;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;

  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  backgroundColorAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  backgroundColorButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  canvasColorSpace(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  changeBackgroundColorTo(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  colorAdaptor(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  colorCheckbox(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  colorInspector_didChangeToColor(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v24@0:8@16 */
  dismissViewController(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  documentColorSpace(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  popover(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setBackgroundColorButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setColorAdaptor(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setColorCheckbox(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPopover(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  stylePartPreviewButtonDisabledAction(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  stylePartPreviewButtonPreviewColorSpace(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=v16@0:8 */
  viewWillDisappear(): void;
}

declare class MSArtboardContentResizeInspectorItem extends MSInspectorItem {}

declare class _MSArtboardGroup extends MSLayerGroup {
  /* typeEncoding=@"MSColor", ivar=_backgroundColor, attributes=(retain,nonatomic) */
  backgroundColor(): MSColor;
  /* typeEncoding=@"MSSimpleGrid", ivar=_grid, attributes=(retain,nonatomic) */
  grid(): MSSimpleGrid;
  /* typeEncoding=c, ivar=_hasBackgroundColor, attributes=(assign,nonatomic) */
  hasBackgroundColor(): boolean;
  /* typeEncoding=@"MSRulerData", ivar=_horizontalRulerData, attributes=(retain,nonatomic) */
  horizontalRulerData(): MSRulerData;
  /* typeEncoding=c, ivar=_includeBackgroundColorInExport, attributes=(assign,nonatomic) */
  includeBackgroundColorInExport(): boolean;
  /* typeEncoding=c, ivar=_includeInCloudUpload, attributes=(assign,nonatomic) */
  includeInCloudUpload(): boolean;
  /* typeEncoding=c, ivar=_isFlowHome, attributes=(assign,nonatomic) */
  isFlowHome(): boolean;
  /* typeEncoding=@"MSLayoutGrid", ivar=_layout, attributes=(retain,nonatomic) */
  layout(): MSLayoutGrid;
  /* typeEncoding=@"NSDictionary", ivar=_presetDictionary, attributes=(retain,nonatomic) */
  presetDictionary(): NSDictionary;
  /* typeEncoding=c, ivar=_resizesContent, attributes=(assign,nonatomic) */
  resizesContent(): boolean;
  /* typeEncoding=@"MSRulerData", ivar=_verticalRulerData, attributes=(retain,nonatomic) */
  verticalRulerData(): MSRulerData;

  /* typeEncoding=c16@0:8 */
  static allowsFaulting(...args: any[]): any;
  /* typeEncoding=#16@0:8 */
  static immutableClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  backgroundColor(...args: any[]): any;
  /* typeEncoding=v32@0:8@16Q24 */
  copyPropertiesToObject_options(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateChildProperties(...args: any[]): any;
  /* typeEncoding=v24@0:8@?16 */
  enumerateProperties(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  grid(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasBackgroundColor(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasDefaultValues(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  horizontalRulerData(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  includeBackgroundColorInExport(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  includeInCloudUpload(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  initializeUnsetObjectPropertiesWithDefaults(): void;
  /* typeEncoding=c16@0:8 */
  isFlowHome(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  layout(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  performInitEmptyObject(): void;
  /* typeEncoding=v24@0:8@16 */
  performInitWithImmutableModelObject(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetDictionary(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  propertiesAreEqual(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  resizesContent(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  setAsParentOnChildren(): void;
  /* typeEncoding=v24@0:8@16 */
  setBackgroundColor(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setGrid(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setHasBackgroundColor(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setHorizontalRulerData(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIncludeBackgroundColorInExport(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIncludeInCloudUpload(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsFlowHome(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLayout(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresetDictionary(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setResizesContent(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setVerticalRulerData(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  syncPropertiesFromObject(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  verticalRulerData(...args: any[]): any;
}

declare class MSArtboardGroup extends _MSArtboardGroup /* implements MSArtboardGroup, MSRootLayer, MSLayerWithMutableBackgroundColor, MSColorConvertible */ {
  /* typeEncoding={CGAffineTransform=dddddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  CGTransformForFrame(): CGAffineTransform;
  /* typeEncoding=@"MSColor", ivar=(null), attributes=(retain,nonatomic) */
  backgroundColor(): MSColor;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  bounds(): CGRect;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  contentBounds(): CGRect;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"MSSimpleGrid", ivar=(null), attributes=(copy,nonatomic) */
  grid(): MSSimpleGrid;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic) */
  hasBackgroundColor(): boolean;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  hasTransforms(): boolean;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
  horizontalRulerData(): MSRulerData;
  /* typeEncoding={BCEdgePaddings=dddd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  influenceRectEdgePaddingsThatCascadeToContainedLayers(): BCEdgePaddings;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  isFlippedHorizontal(): boolean;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  isFlippedVertical(): boolean;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  isLayerExportable(): boolean;
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  isVisible(): boolean;
  /* typeEncoding=@"MSLayoutGrid", ivar=(null), attributes=(copy,nonatomic) */
  layout(): MSLayoutGrid;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  objectID(): NSString;
  /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  origin(): CGPoint;
  /* typeEncoding=@"MSArtboardPreset", ivar=(null), attributes=(retain,nonatomic) */
  preset(): MSArtboardPreset;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  rect(): CGRect;
  /* typeEncoding=d, ivar=(null), attributes=(assign,nonatomic,readonly) */
  rotation(): number;
  /* typeEncoding={CGPoint=dd}, ivar=(null), attributes=(assign,nonatomic) */
  rulerBase(): CGPoint;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"MSRulerData", ivar=(null), attributes=(copy,nonatomic) */
  verticalRulerData(): MSRulerData;

  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}24@0:8@16 */
  static artboardRectFromLayersInArray(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  static traits(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v16@0:8 */
  adjustAfterInsert(): void;
  /* typeEncoding=v32@0:8@16@24 */
  applyScreenPickerColor_preferredStyleName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  badgeImages(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  calculateMinimumSize(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  canBeHidden(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  canBeTransformed(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  canChangeBooleanOperation(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@24 */
  canCopyToLayer_beforeLayer(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  canRotate(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  closestClippingLayer(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  constrainProportions(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  contentBounds(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  contextualMenuPreviewTemplateImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  convertColorsUsing(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  defaultArtboardStyle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  displayName(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  displayType(...args: any[]): any;
  /* typeEncoding=c24@0:8q16 */
  fixGeometryWithOptions(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  hasClickThrough(...args: any[]): any;
  /* typeEncoding=c40@0:8{CGPoint=dd}16d32 */
  hitTestInNameLabel_zoomValue(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  immutableBackgroundColor(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  inspectorSections(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isAutomaticScalingEnabled(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isExpanded(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isLocked(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isOpen(...args: any[]): any;
  /* typeEncoding=c24@0:8Q16 */
  isSelectableOnCanvasWithOptions(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  layerDidEndResize(): void;
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16q48 */
  layerDidResizeFromRect_corner(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGVector=dd}16 */
  moveBySuggestedOffset(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  moveChildrenToIdenticalPositionAfterResizeFromRect(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  objectDidInit(): void;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  optimalBoundingBox(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  otherArtboardUnderArtboard(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  parentArtboard(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  parentForInsertingLayers(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  parentRoot(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  performInitEmptyObject(): void;
  /* typeEncoding=@16@0:8 */
  preset(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  resizeToFitChildren(): void;
  /* typeEncoding=@16@0:8 */
  rootForNameUniquing(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  rotation(...args: any[]): any;
  /* typeEncoding={CGPoint=dd}16@0:8 */
  rulerBase(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  rulerCoordinateSpace(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  selectedPreviewTemplateImage(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGPoint=dd}16Q32d40 */
  selectionHitTest_options_zoomValue(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGPoint=dd}16 */
  setCenter(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsLocked(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsVisible(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGPoint=dd}16 */
  setOrigin(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPreset(...args: any[]): any;
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  setRect(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGPoint=dd}16 */
  setRulerBase(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setShouldBreakMaskChain(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  shouldRefreshOverlayForFlows(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  unselectedPreviewTemplateImage(...args: any[]): any;
}

declare class MSArtboardInspectorSection extends MSBaseInspectorSection {
  /* typeEncoding=c, ivar=_colorEnabled, attributes=(assign,nonatomic) */
  colorEnabled(): boolean;
  /* typeEncoding=@"MSArtboardBackgroundColorInspectorItem", ivar=_colorItem, attributes=(retain,nonatomic) */
  colorItem(): MSArtboardBackgroundColorInspectorItem;
  /* typeEncoding=@"MSIncludeBackgroundColorInExportInspectorItem", ivar=_includeInExportItem, attributes=(retain,nonatomic) */
  includeInExportItem(): MSIncludeBackgroundColorInExportInspectorItem;
  /* typeEncoding=@"MSIncludeBackgroundColorInInstancesInspectorItem", ivar=_includeInInstancesItem, attributes=(retain,nonatomic) */
  includeInInstancesItem(): MSIncludeBackgroundColorInInstancesInspectorItem;
  /* typeEncoding=@"NSArrayController", ivar=_layersController, attributes=(retain,nonatomic) */
  layersController(): NSArrayController;
  /* typeEncoding=@"MSPaddingInspectorItem", ivar=_paddingItem, attributes=(retain,nonatomic) */
  paddingItem(): MSPaddingInspectorItem;
  /* typeEncoding=@"MSArtboardContentResizeInspectorItem", ivar=_resizeItem, attributes=(retain,nonatomic) */
  resizeItem(): MSArtboardContentResizeInspectorItem;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=c16@0:8 */
  colorEnabled(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  colorItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  includeInExportItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  includeInInstancesItem(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithNibName_bundle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  layersController(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32^v40 */
  observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  paddingItem(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  resizeItem(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setColorEnabled(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setColorItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIncludeInExportItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setIncludeInInstancesItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLayers(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setLayersController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPaddingItem(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setResizeItem(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateItems(): void;
}

declare class MSArtboardOrderSorting extends NSObject {
  /* typeEncoding=@32@0:8@16Q24 */
  static sortArtboards_inOrder(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  static sortArtboardsInDefaultOrder(...args: any[]): any;
}

declare class MSArtboardPositionInspectorItem extends MSPositionInspectorItem {
  /* typeEncoding=@"NSButton", ivar=_sizeToFitButton, attributes=(retain,nonatomic) */
  sizeToFitButton(): NSButton;

  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  setSizeToFitButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sizeToFitButton(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
}

declare class MSArtboardPreset extends NSObject /* implements NSCopying */ {
  /* typeEncoding=c, ivar=_allowResizedMatching, attributes=(assign,nonatomic,readonly) */
  allowResizedMatching(): boolean;
  /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
  dictionaryRepresentation(): NSDictionary;
  /* typeEncoding=Q, ivar=_height, attributes=(assign,nonatomic) */
  height(): number;
  /* typeEncoding=@"NSImage", ivar=(null), attributes=(assign,nonatomic,readonly) */
  image(): NSImage;
  /* typeEncoding=@"NSString", ivar=_imageName, attributes=(retain,nonatomic) */
  imageName(): NSString;
  /* typeEncoding=c, ivar=_isNew, attributes=(assign,nonatomic) */
  isNew(): boolean;
  /* typeEncoding=c, ivar=_isSizeToFit, attributes=(assign,nonatomic,readonly) */
  isSizeToFit(): boolean;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  layerName(): NSString;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic) */
  name(): NSString;
  /* typeEncoding=c, ivar=_offersLandscapeVariant, attributes=(assign,nonatomic,readonly) */
  offersLandscapeVariant(): boolean;
  /* typeEncoding={CGSize=dd}, ivar=(null), attributes=(assign,nonatomic) */
  size(): CGSize;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  sizeDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=_tooltip, attributes=(copy,nonatomic,readonly) */
  tooltip(): NSString;
  /* typeEncoding=Q, ivar=_width, attributes=(assign,nonatomic) */
  width(): number;

  /* typeEncoding=q52@0:8{CGSize=dd}16{CGSize=dd}32c48 */
  static compareArtboardSize_withScaledPresetSize_offeringLandscapeVariant(
    ...args: any[]
  ): any;
  /* typeEncoding=d52@0:8{CGSize=dd}16{CGSize=dd}32c48 */
  static resizeScaleFromArtboardSize_presetSize_offeringLandscapeVariant(
    ...args: any[]
  ): any;
  /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
  static sizeToFitPresetWithName_size(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=c16@0:8 */
  allowResizedMatching(...args: any[]): any;
  /* typeEncoding=@24@0:8^{_NSZone=}16 */
  copyWithZone(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  description(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  dictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  hash(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  height(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  image(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imageName(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithDictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=@48@0:8@16{CGSize=dd}24@40 */
  initWithName_size_imageName(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isEqual(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isNew(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isSizeToFit(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  layerName(...args: any[]): any;
  /* typeEncoding=Q32@0:8{CGSize=dd}16 */
  matchWithArtboardSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  offersLandscapeVariant(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  oppositeOrientationPreset(...args: any[]): any;
  /* typeEncoding=d32@0:8{CGSize=dd}16 */
  resizeScaleFromArtboardSize(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setHeight(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setImageName(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsNew(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setName(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGSize=dd}16 */
  setSize(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  setWidth(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  size(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sizeDescription(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tooltip(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  width(...args: any[]): any;
}

declare class MSArtboardPresetButton extends MSInspectorButton {
  /* typeEncoding=@"NSString", ivar=_secondaryTitle, attributes=(retain,nonatomic) */
  secondaryTitle(): NSString;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  attributedSecondaryTitle(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  attributedTitle(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  intrinsicContentSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  secondaryTitle(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSecondaryTitle(...args: any[]): any;
}

declare class MSArtboardPresetButtonCell extends MSInspectorButtonCell {
  /* typeEncoding=@16@0:8 */
  arrowImage(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  arrowRectForBounds(...args: any[]): any;
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawBezelWithFrame_inView(...args: any[]): any;
  /* typeEncoding=v64@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
  drawImage_withFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawMainTitleWithFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawSecondaryTitleWithFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}64@0:8@16{CGRect={CGPoint=dd}{CGSize=dd}}24@56 */
  drawTitle_withFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  imageRectForBounds(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isHighlighted(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  mainTitleRectWithFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  secondaryTitleRectWithFrame_inView(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setHighlighted(...args: any[]): any;
}

declare class MSArtboardPresetClipView extends NSClipView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class MSArtboardPresetInspectorItem extends MSInspectorItem /* implements MSArtboardPresetsViewControllerDelegate, MSEditArtboardPresetViewControllerDelegate */ {
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=@"MSArtboardPresetButton", ivar=_presetButton, attributes=(retain,nonatomic) */
  presetButton(): MSArtboardPresetButton;
  /* typeEncoding=@"MSArtboardPresetStore", ivar=_presetStore, attributes=(assign,nonatomic,readonly) */
  presetStore(): MSArtboardPresetStore;
  /* typeEncoding=@"MSArtboardPresetsViewController", ivar=_presetsViewController, attributes=(retain,nonatomic) */
  presetsViewController(): MSArtboardPresetsViewController;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;

  /* typeEncoding=c24@0:8@16 */
  static canHandleLayer(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8q16 */
  applyOrientation(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  applyPreset(...args: any[]): any;
  /* typeEncoding=v32@0:8@16q24 */
  artboardPresetsViewController_didSelectOrientation(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  artboardPresetsViewController_didSelectPreset(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v24@0:8q16 */
  didChangeOrientation(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dismissAllPresentedViewControllers(): void;
  /* typeEncoding=v24@0:8@16 */
  dismissViewController(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  displayImageForPreset(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  editArtboardPresetViewController_savePreset(...args: any[]): any;
  /* typeEncoding=v48@0:8@16@24@32^v40 */
  observeValueForKeyPath_ofObject_change_context(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  orientation(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  orientationOfArtboard(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  presentViewController_animator(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetButton(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetStore(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetsViewController(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  refreshPresetButtonAndPopover(): void;
  /* typeEncoding=@16@0:8 */
  selectedPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresetButton(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresetsViewController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showCustomPresetSheet(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showPresets(...args: any[]): any;
  /* typeEncoding=@32@0:8@16Q24 */
  sizeStringForPreset_match(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  toggleOrientation(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=v16@0:8 */
  viewWillDisappear(): void;
}

declare class MSArtboardPresetStore extends NSObject {
  /* typeEncoding=@"NSArray", ivar=_categories, attributes=(assign,nonatomic,readonly) */
  categories(): NSArray;
  /* typeEncoding=@"MSArtboardPresetsCategory", ivar=_customPresetsCategory, attributes=(assign,nonatomic,readonly) */
  customPresetsCategory(): MSArtboardPresetsCategory;

  /* typeEncoding=Q16@0:8 */
  static indexOfLastSelectedCategory(...args: any[]): any;
  /* typeEncoding=v24@0:8Q16 */
  static setIndexOfLastSelectedCategory(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  static setSystemCategories(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static systemCategories(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  artboardPresetStoreDidChange(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  categories(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  customPresetsCategory(...args: any[]): any;
  /* typeEncoding=c32@0:8@16@?24 */
  enumeratePresetsInCategory_usingBlock(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  loadUserPresets(): void;
  /* typeEncoding=@40@0:8@16{CGSize=dd}24 */
  presetWithName_matchingSize(...args: any[]): any;
  /* typeEncoding=@40@0:8{CGSize=dd}16@32 */
  presetWithSize_preferredCategory(...args: any[]): any;
  /* typeEncoding=c32@0:8@16^@24 */
  removePreset_error(...args: any[]): any;
  /* typeEncoding=@40@0:8{CGSize=dd}16@32 */
  resizablePresetMatchingSize_preferredCategory(...args: any[]): any;
  /* typeEncoding=c32@0:8@16^@24 */
  savePreset_error(...args: any[]): any;
  /* typeEncoding=c24@0:8^@16 */
  saveUserPresets(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  suggestedNameForUserPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  userPresetsURL(...args: any[]): any;
}

declare class MSArtboardPresetTableCellView extends NSTableCellView {
  /* typeEncoding=@"NSImageView", ivar=_checkmark, attributes=(retain,nonatomic) */
  checkmark(): NSImageView;
  /* typeEncoding=@"NSTextField", ivar=_sizeLabel, attributes=(retain,nonatomic) */
  sizeLabel(): NSTextField;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  checkmark(...args: any[]): any;
  /* typeEncoding=@32@0:8{CGPoint=dd}16 */
  hitTest(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setBackgroundStyle(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCheckmark(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSizeLabel(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sizeLabel(...args: any[]): any;
}

declare class MSArtboardPresetsCategory extends NSObject {
  /* typeEncoding=@"NSString", ivar=_name, attributes=(copy,nonatomic,readonly) */
  name(): NSString;
  /* typeEncoding=@"NSArray", ivar=_sections, attributes=(copy,nonatomic,readonly) */
  sections(): NSArray;

  /* typeEncoding=@24@0:8@16 */
  static categoriesWithContentsOfURL(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@24@0:8@16 */
  initWithDictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithName_sections(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sections(...args: any[]): any;
}

declare class MSArtboardPresetsRowView extends NSTableRowView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class MSArtboardPresetsSection extends NSObject {
  /* typeEncoding=@"NSDictionary", ivar=(null), attributes=(assign,nonatomic,readonly) */
  dictionaryRepresentation(): NSDictionary;
  /* typeEncoding=@"NSString", ivar=_name, attributes=(assign,nonatomic,readonly) */
  name(): NSString;
  /* typeEncoding=@"NSArray", ivar=_presets, attributes=(copy,nonatomic) */
  presets(): NSArray;

  /* typeEncoding=@24@0:8@16 */
  static sectionsWithContentsOfURL(...args: any[]): any;
  /* typeEncoding=c40@0:8@16@24^@32 */
  static writeSections_toURL_error(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  description(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  dictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithDictionaryRepresentation(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithName_presets(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  name(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presets(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresets(...args: any[]): any;
}

declare class MSArtboardPresetsSectionHeaderView extends NSTableCellView {
  /* typeEncoding=v48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  drawRect(...args: any[]): any;
}

declare class MSArtboardPresetsTableView extends NSTableView {
  /* typeEncoding=@24@0:8@16 */
  menuForEvent(...args: any[]): any;
}

declare class MSArtboardPresetsViewControllerDelegate {
}

declare class MSArtboardPresetsViewController extends NSViewController /* implements NSTableViewDataSource, NSTableViewDelegate, MSEditArtboardPresetViewControllerDelegate, NSUserInterfaceValidations, BCPopoverDelegate */ {
  /* typeEncoding=@"NSArray", ivar=_arrangedObjects, attributes=(assign,nonatomic,readonly) */
  arrangedObjects(): NSArray;
  /* typeEncoding=@"NSArray", ivar=_arrangedSections, attributes=(assign,nonatomic,readonly) */
  arrangedSections(): NSArray;
  /* typeEncoding=@"NSArray", ivar=_categories, attributes=(copy,nonatomic) */
  categories(): NSArray;
  /* typeEncoding=@"NSArrayController", ivar=_categoriesController, attributes=(retain,nonatomic) */
  categoriesController(): NSArrayController;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  debugDescription(): NSString;
  /* typeEncoding=@"<MSArtboardPresetsViewControllerDelegate>", ivar=_delegate, attributes=(assign,nonatomic,weak) */
  delegate(): MSArtboardPresetsViewControllerDelegate;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(copy,readonly) */
  description(): NSString;
  /* typeEncoding=@"MSArtboardPreset", ivar=_editingPreset, attributes=(retain,nonatomic) */
  editingPreset(): MSArtboardPreset;
  /* typeEncoding=@"NSArray", ivar=_extraPresets, attributes=(copy,nonatomic) */
  extraPresets(): NSArray;
  /* typeEncoding=Q, ivar=(null), attributes=(assign,readonly) */
  hash(): number;
  /* typeEncoding=q, ivar=_orientation, attributes=(assign,nonatomic) */
  orientation(): number;
  /* typeEncoding=@"NSSegmentedControl", ivar=_orientationSegmentedControl, attributes=(retain,nonatomic) */
  orientationSegmentedControl(): NSSegmentedControl;
  /* typeEncoding=@"MSArtboardPresetStore", ivar=_presetStore, attributes=(retain,nonatomic) */
  presetStore(): MSArtboardPresetStore;
  /* typeEncoding=@"MSArtboardPresetsCategory", ivar=(null), attributes=(retain,nonatomic) */
  selectedCategory(): MSArtboardPresetsCategory;
  /* typeEncoding={CGSize=dd}, ivar=_selectedPresetSize, attributes=(assign,nonatomic) */
  selectedPresetSize(): CGSize;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;
  /* typeEncoding=@"NSTableView", ivar=_tableView, attributes=(retain,nonatomic) */
  tableView(): NSTableView;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=v24@0:8@16 */
  addUserPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  arrangedObjects(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  arrangedSections(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  artboardPresetStoreDidChange(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  categories(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  categoriesController(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  categoryForPreset(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=@16@0:8 */
  delegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  deleteRowAction(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  editArtboardPresetViewController_savePreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  editRowAction(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  editingPreset(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  extraPresets(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithCoder(...args: any[]): any;
  /* typeEncoding=c24@0:8q16 */
  isFauxSeparatorSectionAtIndex(...args: any[]): any;
  /* typeEncoding=c24@0:8Q16 */
  isSectionAtIndex(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  itemIsUserPreset(...args: any[]): any;
  /* typeEncoding=q24@0:8@16 */
  numberOfRowsInTableView(...args: any[]): any;
  /* typeEncoding=q16@0:8 */
  orientation(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  orientationSegmentedControl(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  popoverWillShow(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  prepareForSegue_sender(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  presetAtIndexPath(...args: any[]): any;
  /* typeEncoding=@28@0:8@16c24 */
  presetForPreset_landscape(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  presetStore(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  rearrangeObjects(): void;
  /* typeEncoding=v16@0:8 */
  refresh(): void;
  /* typeEncoding=v16@0:8 */
  refreshOrientationControl(): void;
  /* typeEncoding=v24@0:8@16 */
  selectCategory(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  selectOrientation(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  selectedCategory(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  selectedPresetSize(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCategories(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setCategoriesController(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setDelegate(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setEditingPreset(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setExtraPresets(...args: any[]): any;
  /* typeEncoding=v24@0:8q16 */
  setOrientation(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setOrientationSegmentedControl(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPresetStore(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSelectedCategory(...args: any[]): any;
  /* typeEncoding=v32@0:8{CGSize=dd}16 */
  setSelectedPresetSize(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTableView(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  showCreateCustomSizeSheet(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  tableView(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24q32 */
  tableView_didAddRowView_forRow(...args: any[]): any;
  /* typeEncoding=d32@0:8@16q24 */
  tableView_heightOfRow(...args: any[]): any;
  /* typeEncoding=c32@0:8@16q24 */
  tableView_isGroupRow(...args: any[]): any;
  /* typeEncoding=@32@0:8@16q24 */
  tableView_rowViewForRow(...args: any[]): any;
  /* typeEncoding=c32@0:8@16q24 */
  tableView_shouldSelectRow(...args: any[]): any;
  /* typeEncoding=@40@0:8@16@24q32 */
  tableView_viewForTableColumn_row(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  tableViewSelectionDidChange(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  validateUserInterfaceItem(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
  /* typeEncoding=@24@0:8q16 */
  viewForGroupRow(...args: any[]): any;
}

declare class MSArtboardRendererCG extends MSGroupRendererCG {
  /* typeEncoding=v36@0:8@16c24@28 */
  renderSubLayersOfGroup_ignoreDrawingArea_context(...args: any[]): any;
}

declare class MSArtboardSizeInspectorItem extends MSBaseSizeInspectorItem {
  /* typeEncoding=Q, ivar=_orientation, attributes=(assign,nonatomic,readonly) */
  orientation(): number;
  /* typeEncoding=@"NSSegmentedControl", ivar=_orientationSegmentedControl, attributes=(retain,nonatomic) */
  orientationSegmentedControl(): NSSegmentedControl;

  /* typeEncoding=@24@0:8@16 */
  static filterSelection(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=Q16@0:8 */
  orientation(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  orientationSegmentedControl(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  refreshOrientationControl(): void;
  /* typeEncoding=v24@0:8@16 */
  selectOrientation(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setOrientationSegmentedControl(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  updateDisplayedValues(): void;
  /* typeEncoding=v16@0:8 */
  updateUI(): void;
  /* typeEncoding=v16@0:8 */
  viewDidLoad(): void;
}

declare class MSArtboardSystemCategories extends NSObject {
  /* typeEncoding=@16@0:8 */
  static defaultCategories(...args: any[]): any;

  /* typeEncoding=@16@0:8 */
  init(...args: any[]): any;
}

declare class MSArtboardTitleItem extends NSObject {
  /* typeEncoding=@"NSAttributedString", ivar=_attributedTitle, attributes=(retain,nonatomic) */
  attributedTitle(): NSAttributedString;
  /* typeEncoding={?=iiii}, ivar=_bounds, attributes=(assign,nonatomic) */
  bounds(): any;
  /* typeEncoding=^{CGColor=}, ivar=_color, attributes=(assign,nonatomic) */
  color(): any;
  /* typeEncoding=c, ivar=_isFlowHome, attributes=(assign,nonatomic) */
  isFlowHome(): boolean;
  /* typeEncoding=c, ivar=_isSymbolMaster, attributes=(assign,nonatomic) */
  isSymbolMaster(): boolean;
  /* typeEncoding=d, ivar=_titleCompression, attributes=(assign,nonatomic) */
  titleCompression(): number;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=@16@0:8 */
  attributedTitle(...args: any[]): any;
  /* typeEncoding={?=iiii}16@0:8 */
  bounds(...args: any[]): any;
  /* typeEncoding=^{CGColor=}16@0:8 */
  color(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=c24@0:8@16 */
  isEqualToItem(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isFlowHome(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isSymbolMaster(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setAttributedTitle(...args: any[]): any;
  /* typeEncoding=v32@0:8{?=iiii}16 */
  setBounds(...args: any[]): any;
  /* typeEncoding=v24@0:8^{CGColor=}16 */
  setColor(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsFlowHome(...args: any[]): any;
  /* typeEncoding=v20@0:8c16 */
  setIsSymbolMaster(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setTitleCompression(...args: any[]): any;
  /* typeEncoding=d16@0:8 */
  titleCompression(...args: any[]): any;
}

declare class MSArtboardTitleRenderer extends NSObject {
  /* typeEncoding=d, ivar=_backingScaleFactor, attributes=(assign,nonatomic) */
  backingScaleFactor(): number;
  /* typeEncoding=^{CGContext=}, ivar=_context, attributes=(assign,nonatomic) */
  context(): any;
  /* typeEncoding=@"<MSGPURenderer>", ivar=_renderer, attributes=(assign,nonatomic,readonly,weak) */
  renderer(): MSGPURenderer;
  /* typeEncoding=@"<MSGPUTexture>", ivar=_texture, attributes=(retain,nonatomic) */
  texture(): MSGPUTexture;
  /* typeEncoding=^v, ivar=_textureBytes, attributes=(assign,nonatomic) */
  textureBytes(): any;
  /* typeEncoding=@"NSFont", ivar=_titleFont, attributes=(assign,nonatomic,readonly) */
  titleFont(): NSFont;
  /* typeEncoding=@"NSMutableDictionary", ivar=_titleMap, attributes=(assign,nonatomic,readonly) */
  titleMap(): NSMutableDictionary;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=d16@0:8 */
  backingScaleFactor(...args: any[]): any;
  /* typeEncoding=^{CGContext=}16@0:8 */
  context(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v72@0:8@16^{CGColor=}24^{CGColor=}32d40d48{CGPoint=dd}56 */
  drawTitlesForArtboards_titleColor_symbolTitleColor_zoom_backingScaleFactor_baseOrigin(
    ...args: any[]
  ): any;
  /* typeEncoding=@24@0:8@16 */
  initWithGPURenderer(...args: any[]): any;
  /* typeEncoding=@40@0:8@16d24d32 */
  ms_collectArtboardsForTitleRendering_zoom_backingScaleFactor(
    ...args: any[]
  ): any;
  /* typeEncoding=v56@0:8@16d24d32@40@48 */
  ms_createTextureForArtboards_zoom_backingScaleFactor_titleColor_symbolTitleColor(
    ...args: any[]
  ): any;
  /* typeEncoding=v56@0:8@16d24d32{CGPoint=dd}40 */
  ms_drawTitles_zoom_backingScaleFactor_baseOrigin(...args: any[]): any;
  /* typeEncoding=v32@0:8@16d24 */
  ms_drawTitlesToTexture_backingScaleFactor(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  ms_findExistingItemForArtboard(...args: any[]): any;
  /* typeEncoding=v32@0:8@16@24 */
  ms_insertTitleItem_name(...args: any[]): any;
  /* typeEncoding=c40@0:8@16d24d32 */
  ms_needsToRecreateTitlesForArtboards_zoom_backingScaleFactor(
    ...args: any[]
  ): any;
  /* typeEncoding=v32@0:8Q16Q24 */
  ms_recreateTextureForWidth_height(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  ms_uploadTextureData(): void;
  /* typeEncoding=@16@0:8 */
  renderer(...args: any[]): any;
  /* typeEncoding=v24@0:8d16 */
  setBackingScaleFactor(...args: any[]): any;
  /* typeEncoding=v24@0:8^{CGContext=}16 */
  setContext(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setTexture(...args: any[]): any;
  /* typeEncoding=v24@0:8^v16 */
  setTextureBytes(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  texture(...args: any[]): any;
  /* typeEncoding=^v16@0:8 */
  textureBytes(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  titleFont(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  titleMap(...args: any[]): any;
}

