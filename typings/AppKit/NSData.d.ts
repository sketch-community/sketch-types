declare const NSDataBase64DecodingIgnoreUnknownCharacters: unique symbol;

declare class NSData extends NSObject {
  static alloc(): NSData;

  /**
   *
   * @param string
   * @param ignoreUnknownCharacters
   */
  initWithBase64EncodedString_options(
    string: NSString,
    ignoreUnknownCharacters: typeof NSDataBase64DecodingIgnoreUnknownCharacters
  ): NSData;
}
