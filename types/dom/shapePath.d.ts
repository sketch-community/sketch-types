declare module 'sketch/dom' {
  namespace dom {
    import MSShapePathLayer = sketchInternal.MSShapePathLayer;

    export interface ShapePathProperties {
      /**
       * The name of the Shape
       */
      name?: string;
      /**
       * The group the Shape is in.
       */
      parent?: Group;
      /**
       * The frame of the Shape. This is given in coordinates that are local to the parent of the layer.
       */
      frame?: Rectangle;
      /**
       * The prototyping action associated with the Shape.
       */
      flow?: FlowProperty;
      /**
       * The style of the Shape.
       */
      style?: Style | IStyle;
      /**
       * The points defining the Shape Path.
       */
      points?: ICurvePoint[];
      /**
       * The type of the Shape Path. It can only be set when creating a new ShapePath.
       */
      shapeType: ShapePath.ShapeType;
      /**
       * If the Path is closed.
       */
      closed?: boolean;
    }

    export class ShapePath extends StyledLayer<MSShapePathLayer> {
      type: Types.ShapePath;
      /**
       * The group the Shape is in.
       */
      parent: Group;
      /**
       * The points defining the Shape Path.
       */
      points: CurvePoint[];
      /**
       * The type of the Shape Path. It can only be set when creating a new ShapePath.
       */
      readonly shapeType: ShapePath.ShapeType;
      /**
       * If the Path is closed.
       */
      closed: boolean;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: ShapePathProperties);

      /**
       * create a new ShapePath from an SVG path (the string that goes in the `d` attribute of a path tag in an SVG).
       */
      static fromSVGPath(svg: string): ShapePath;

      /**
       * Returns a string representing the SVG path of the ShapePath.
       */
      getSVGPath(): string;
    }

    export namespace ShapePath {
      export enum ShapeType {
        Rectangle = 'Rectangle',
        Oval = 'Oval',
        Triangle = 'Triangle',
        Polygon = 'Polygon',
        Star = 'Star',
        Custom = 'Custom',
      }

      export enum PointType {
        Undefined = 'Undefined',
        Straight = 'Straight',
        Mirrored = 'Mirrored',
        Asymmetric = 'Asymmetric',
        Disconnected = 'Disconnected',
      }
    }
  }
}
