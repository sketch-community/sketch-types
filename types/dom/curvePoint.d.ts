declare module 'sketch/dom' {
  namespace dom {
    import MSCurvePoint = sketchInternal.MSCurvePoint;

    export interface ICurvePoint {
      point: IPoint;
      curveFrom: IPoint;
      curveTo: IPoint;
      cornerRadius: number;
      pointType: CurvePoint.PointType;
    }

    /**
     * A utility class to represent a curve point (with handles to control the curve in a path).
     */
    class CurvePoint extends Component<MSCurvePoint> {
      /**
       * The position of the point.
       */
      point: Point;
      /**
       * The position of the handle control point for the incoming path.
       */
      curveFrom: Point;
      /**
       * The position of the handle control point for the outgoing path.
       */
      curveTo: Point;
      /**
       * The corner radius of the point.
       */
      cornerRadius: number;
      /**
       * The type of the point.
       */
      pointType: CurvePoint.PointType;
    }

    namespace CurvePoint {
      type PointType = ShapePath.PointType;
    }
  }
}
