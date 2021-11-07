declare module 'sketch/dom' {
  namespace dom {
    import MSShapeGroup = sketchInternal.MSShapeGroup;

    export interface ShapeProperties {
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
    }

    export class Shape extends BaseGroup<MSShapeGroup> {
      type: Types.Shape;
      /**
       * The group the Shape is in.
       */
      parent: Group;
      /**
       * The ID of the SharedStyle or null, identical to sharedStyle.id.
       */
      sharedStyleId: string | null;
      /**
       * The associated shared style.
       */
      sharedStyle: SharedStyle | null;

      constructor(properties?: ShapeProperties);
    }
  }
}
