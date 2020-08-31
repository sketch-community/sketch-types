declare interface SketchContext {
  api(): any;
  command: MSPluginCommand;
  document: MSDocument;
  scriptPath: string;
  scriptURL: NSURL;
  selection: NSArray;
}
declare interface SketchActionContext<T extends MSAction>
  extends SketchContext {
  actionContext: {
    document: MSDocument;
    action?: T;
    exports?: { path: string; request: MSExportRequest }[];
  };
  action: string;
}
/**
 * Sketch context params
 */
declare const context: SketchContext;
