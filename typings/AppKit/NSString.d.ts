declare class NSString extends String {
  static stringWithContentsOfFile_encoding_error(...args: any[]): NSString;
  static stringWithFormat(...args: any[]): NSString;
  static stringWithString(rawString: string): NSString;

  dataUsingEncoding(NSUTF8StringEncoding: number): any;
}
