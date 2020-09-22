declare class MSImageData extends NSObject {
  /**
   * 根据 Image 来转换色彩空间
   * @param image
   * @param convertColorSpace
   */
  initWithImage_convertColorSpace(
    image: NSImage,
    convertColorSpace: boolean
  ): MSImageData;

  static alloc(): MSImageData;
  /* typeEncoding=@"NSString", ivar=(null), attributes=(assign,nonatomic,readonly) */
  archiveReferenceIdentifier_bc(): NSString;
  /* typeEncoding=^{CGImage=}, ivar=(null), attributes=(assign,nonatomic,readonly) */
  cgImage(): any;

  image(): NSImage;
  /* typeEncoding=@"BCReadWriteLock", ivar=_imageLock, attributes=(assign,nonatomic,readonly) */
  imageLock(): BCReadWriteLock;
  /* typeEncoding=@"NSData", ivar=(null), attributes=(assign,nonatomic,readonly) */
  sha1(): NSData;
  /* typeEncoding=#, ivar=(null), attributes=(assign,readonly) */
  superclass(): any;

  /* typeEncoding=@32@0:8@16@24 */
  static decodeReferenceFromJSONZipArchive_withReference(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  static errorImage(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=^{CGImage=}24@0:8Q16 */
  CGImageAtLevelOfDetail(...args: any[]): any;
  /* typeEncoding=^{CGImage=}32@0:8{CGSize=dd}16 */
  CGImageSuitableForDrawingWithSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  NSImage(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  archiveReferenceIdentifier_bc(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  assetType(...args: any[]): any;
  /* typeEncoding=^{CGImage=}16@0:8 */
  cgImage(...args: any[]): any;
  /* typeEncoding=@24@0:8^{_NSZone=}16 */
  copyWithZone(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  correctInvalidGamma(): void;

  data(): NSData;
  /* typeEncoding=@16@0:8 */
  dataLock(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v24@0:8@16 */
  decodeWithUnarchiver(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  encodeAsJSON(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  encodeReferenceInJSONZipArchive(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  encodeWithArchiver(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  ensureMojaveBitmapImageRepIsNotIndexedNotPacked(...args: any[]): any;
  /* typeEncoding=^{CGImage=}24@0:8Q16 */
  generateCGImageAtLevelOfDetail(...args: any[]): any;
  /* typeEncoding=Q16@0:8 */
  hash(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  image(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imageDataByCorrectingInvalidGamma(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  imageLock(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  initDefault(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@24 */
  initWithData_sha(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithImage(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithLegacyHash(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  initWithUnarchiver(...args: any[]): any;
  /* typeEncoding=@40@0:8@16q24q32 */
  initWithUnarchiver_migratingFrom_toVersion(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isAssetEqual(...args: any[]): any;
  /* typeEncoding=c24@0:8@16 */
  isEqual(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  isLegacy(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  replacementObjectForJSONEncoder(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setData(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setSha1(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  sha1(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  treeAsDictionary(...args: any[]): any;
  waitForDataLock(): void;
}

declare class MSImageLayerImporter extends NSObject {
  /* typeEncoding=c24@0:8@16 */
  static fileIsVectorFormat(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  static importLayerFromPath(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  static importerForPath(...args: any[]): any;
  /* typeEncoding=@32@0:8@16Q24 */
  static layerWithContentsOfPath_mode(...args: any[]): any;
}

declare class MSImageOriginalSizeAction extends MSDocumentAction {
  /* typeEncoding=v24@0:8@16 */
  doPerformAction(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  imageOriginalSize(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  label(...args: any[]): any;
  /* typeEncoding=c16@0:8 */
  validate(...args: any[]): any;
}

declare class MSImageOverrideView extends NSImageView {
  /* typeEncoding=c, ivar=(null), attributes=(assign,nonatomic,readonly) */
  displaysPlaceholder(): boolean;
  /* typeEncoding=@"NSImage", ivar=_placeholderImage, attributes=(retain,nonatomic) */
  placeholderImage(): NSImage;

  /* typeEncoding=#16@0:8 */
  static cellClass(...args: any[]): any;

  /* typeEncoding=v16@0:8 */
  _cxx_destruct(): void;
  /* typeEncoding=c16@0:8 */
  displaysPlaceholder(...args: any[]): any;
  /* typeEncoding=@48@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16 */
  initWithFrame(...args: any[]): any;
  /* typeEncoding={CGSize=dd}16@0:8 */
  intrinsicContentSize(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  menuForEvent(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  placeholderImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  removeOverrideImage(...args: any[]): any;
  /* typeEncoding=v24@0:8@16 */
  setPlaceholderImage(...args: any[]): any;
}

declare class MSImageOverrideViewCell extends NSImageCell {
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawFocusRingMaskWithFrame_inView(...args: any[]): any;
  /* typeEncoding=v56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  drawWithFrame_inView(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}56@0:8{CGRect={CGPoint=dd}{CGSize=dd}}16@48 */
  focusRingMaskBoundsForFrame_inView(...args: any[]): any;
}

declare class MSImageSizeReducer extends NSObject {
  /* typeEncoding=@24@0:8@16 */
  static largestSizeForImagesMapTableFromOwners(...args: any[]): any;
  /* typeEncoding=v40@0:8@16@24@?32 */
  static reduceImageSizeOfLayers_windowForSheet_completionBlock(
    ...args: any[]
  ): any;
  /* typeEncoding=v40@0:8@16@24@32 */
  static setResizedData_originalData_forOwners(...args: any[]): any;
  /* typeEncoding=@40@0:8@16Q24@?32 */
  static showImageReductionWarningForWindow_fileSizeDifference_completionBlock(
    ...args: any[]
  ): any;
  /* typeEncoding=@24@0:8@16 */
  static showUnableToReduceAlert(...args: any[]): any;
  /* typeEncoding=@32@0:8@16@?24 */
  static showWaitingSheetForWindow_completionBlock(...args: any[]): any;
}

declare class MSImageTransformEventHandler extends MSTransformEventHandler {
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  bounds(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  dealloc(): void;
  /* typeEncoding=v16@0:8 */
  handlerGotFocus(): void;
  /* typeEncoding=v16@0:8 */
  handlerWillLoseFocus(): void;
  /* typeEncoding=@16@0:8 */
  instructions(...args: any[]): any;
  /* typeEncoding={CGPoint=dd}24@0:8q16 */
  layerPointForCorner(...args: any[]): any;
  /* typeEncoding={CGRect={CGPoint=dd}{CGSize=dd}}16@0:8 */
  newLayerRect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  perspectiveImage(...args: any[]): any;
  /* typeEncoding={CGPoint=dd}56@0:8q16{CGRect={CGPoint=dd}{CGSize=dd}}24 */
  pointForCorner_rect(...args: any[]): any;
  /* typeEncoding=@16@0:8 */
  toolbarIdentifier(...args: any[]): any;
  /* typeEncoding=v16@0:8 */
  transformLayers(): void;
}

declare class MSImageView extends NSImageView {
  /* typeEncoding=v24@0:8@16 */
  concludeDragOperation(...args: any[]): any;
  /* typeEncoding=Q24@0:8@16 */
  draggingEntered(...args: any[]): any;
  /* typeEncoding=@24@0:8@16 */
  webpURLFromDragData(...args: any[]): any;
}
