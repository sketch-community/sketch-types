declare class NSURL {
  static URLWithString(url: string): NSURL;
  static fileURLWithPath(path: string): NSURL;
}

declare class NSURLSession {}
declare class NSURLRequest {
  static requestWithURL(url: NSURL): NSURLRequest;
}
declare class NSURLSessionDownloadTask {}
declare class NSURLSessionUploadTask {}

declare class NSURLSessionDataTask {}
declare class NSURLProtocol {}
declare class NSURLSessionTask {}
