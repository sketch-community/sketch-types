declare module 'sketch/dom' {
  namespace dom {
    import CGPoint = cocoascript.CGPoint;

    export interface IPoint {
      x: number;
      y: number;
    }

    /**
     * A utility class to represent a point.
     */
    export class Point implements IPoint {
      /**
       * The x coordinate of the point.
       */
      x: number;
      /**
       * The y coordinate of the point.
       */
      y: number;

      /**
       * Return the Point as a CGPoint.
       */
      asCGPoint(): CGPoint;

      /**
       * Return the Point as a NSPoint.
       */
      asNSPoint(): CGPoint;
    }
  }
}
