declare module 'sketch/dom' {
  namespace dom {
    import CGRect = cocoascript.CGRect;

    /**
     * A utility class to represent a rectangle. Contains some methods to make interacting with a rectangle easier.
     */
    export class Rectangle {
      /**
       * The x coordinate of the top-left corner of the rectangle.
       */
      x: number;
      /**
       * The y coordinate of the top-left corner of the rectangle.
       */
      y: number;
      /**
       * The width of the rectangle.
       */
      width: number;
      /**
       * The height of the rectangle.
       */
      height: number;

      constructor(x: number, y: number, width: number, height: number);
      constructor(rect: Rectangle);

      /**
       * Adjust the rectangle by offsetting it.
       */
      offset(x: number, y: number): this;

      /**
       * Adjust the rectangle by scaling it.
       */
      scale(scale: number): this;
      /**
       * Adjust the rectangle by scaling it.
       */
      scale(scaleWidth: number, scaleHeight: number): this;

      /**
       * Each layer defines its own system of coordinates (with its origin at the top left of the layer).
       * You can change that basis from one layer to the other with changeBasis.
       * Both from and to can be omitted (but not at the same time)
       * to change the basis from/to the Page coordinates.
       */
      changeBasis(change: { from?: Layer; to?: Layer }): Rectangle;

      /**
       * Return the Rectangle as a CGRect
       */
      asCGRect(): CGRect;
    }
  }
}
