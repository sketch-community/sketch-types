declare class NSArray<T = NSObject> extends Array {
  [index: number]: T;
  count(): number;
  objectAtIndex(index: number): T;

  static arrayWithArray(array: any): NSArray;
}

declare class NSArrayController {}
