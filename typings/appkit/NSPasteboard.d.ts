/**
 * URL data for one file or resource.
 * @see https://developer.apple.com/documentation/appkit/nspasteboardtypeurl?language=objc
 */
declare const NSPasteboardTypeURL: unique symbol;
/**
 * Color data
 * @see https://developer.apple.com/documentation/appkit/nspasteboardtypecolor?language=objc
 */
declare const NSPasteboardTypeColor: unique symbol;
/**
 * A representation of a file’s contents.
 * @see https://developer.apple.com/documentation/appkit/nsfilecontentspboardtype?language=objc
 */
declare const NSFileContentsPboardType: unique symbol;
// A file URL.
declare const NSPasteboardTypeFileURL: unique symbol;
// Type for the find panel metadata property list.
declare const NSFindPanelSearchOptionsPboardType: unique symbol;
// Font and character information.
declare const NSPasteboardTypeFont: unique symbol;
// Type for HTML content.
declare const NSPasteboardTypeHTML: unique symbol;
// Multiple text selection.
declare const NSPasteboardTypeMultipleTextSelection: unique symbol;
// PDF data.
declare const NSPasteboardTypePDF: unique symbol;
// PNG image data.
declare const NSPasteboardTypePNG: unique symbol;
// Rich Text Format (RTF) data.
declare const NSPasteboardTypeRTF: unique symbol;
// RTFD formatted file contents.
declare const NSPasteboardTypeRTFD: unique symbol;
// Paragraph formatting information.
declare const NSPasteboardTypeRuler: unique symbol;
// Sound data.
declare const NSPasteboardTypeSound: unique symbol;
// String data.
declare const NSPasteboardTypeString: unique symbol;
// Tab-separated fields of text.
declare const NSPasteboardTypeTabularText: unique symbol;
// Type for the Find panel metadata property list.
declare const NSPasteboardTypeTextFinderOptions: unique symbol;
// Tag Image File Format (TIFF) data.
declare const NSPasteboardTypeTIFF: unique symbol;

/**
 * An object that transfers data to and from the pasteboard server.
 * 原生剪切板
 * @see https://developer.apple.com/documentation/appkit/nspasteboard
 **/
declare class NSPasteboard extends NSObject {
  static generalPasteboard(): NSPasteboard;
  /**
   * 读取文本
   **/
  stringForType(t: typeof NSPasteboardTypeString): NSString;
  setString_forType(
    data: string | NSString,
    t: typeof NSPasteboardTypeString
  ): void;
  /**
   * 读取文本
   **/
  dataForType(t: any): NSData;

  pasteboardItems(): any;
  /**
   * 清理剪切板
   **/
  clearContents(): void;

  /**
   * 写入内容
   **/
  writeObjects(param: any[]): void;

  /**
   * 读取文本对象
   * @see https://developer.apple.com/documentation/appkit/nspasteboard/1524454-readobjects
   **/
  readObjectsForClasses_options(): string;
}

declare class NSPasteboardItems {
  stringForType(t: typeof NSPasteboardTypeString): NSString;
}

declare class NSPasteboardItem {}
