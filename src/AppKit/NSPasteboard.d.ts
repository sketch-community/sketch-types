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
