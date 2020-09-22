declare const NSViewWidthSizable: number;
declare const NSViewHeightSizable: number;

/**
 *  NSView 类
 *  @see https://developer.apple.com/documentation/appkit/nsview
 */
declare class NSView extends NSResponder {
  adjustSubviews(): void;

  subviews(): NSArray<NSView>;
  setSubviews(views: NSArray<NSView>);
  identifier(): string;
  setIdentifier(id: string): void;
  initWithFrame<T = NSView>(rect: NSRect): T;

  /**
   * View是否翻转坐标系
   * https://developer.apple.com/documentation/appkit/nsview/1483532-flipped?language=occ
   */
  readonly flipped: boolean;
  setFlipped(boolean): void;
}
