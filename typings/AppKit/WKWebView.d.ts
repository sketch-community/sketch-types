declare class WKWebView extends NSView {
  static alloc(): WKWebView;
  static initWithFrame_configuration(
    CGRect: CGRect,
    config: WKWebViewConfiguration
  ): WKWebView;
  loadRequest(request: NSURLRequest): void;
  loadFileURL_allowingReadAccessToURL(url: NSURL, isDirectory: boolean): void;
  setAutoresizingMask(mask: number): void;
  evaluateJavaScript_completionHandler(js: string, cb: () => void): void;
}

/**
 * @see https://developer.apple.com/documentation/webkit/wkwebviewconfiguration
 */
declare class WKWebViewConfiguration {
  static alloc(): any;
}
