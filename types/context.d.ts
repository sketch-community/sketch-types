declare namespace sketchPublic {
  import MSPluginCommand = sketchInternal.MSPluginCommand;
  import MSDocument = sketchInternal.MSDocument;
  import MSAction = sketchInternal.MSAction;
  import MSExportRequest = sketchInternal.MSExportRequest;
  import NSURL = cocoascript.NSURL;
  import NSArray = cocoascript.NSArray;

  interface SketchContext {
    command: MSPluginCommand;
    document: MSDocument;
    scriptPath: string;
    scriptURL: NSURL;
    selection: NSArray;
  }

  interface SketchActionContext<T extends MSAction> extends SketchContext {
    actionContext: {
      document: MSDocument;
      action?: T;
      exports?: { path: string; request: MSExportRequest }[];
    };
    action: string;
  }
}
declare type SketchContext = sketchPublic.SketchContext;

declare const context: sketchPublic.SketchContext;
